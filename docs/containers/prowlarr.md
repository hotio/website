---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag753" onclick="CopyToClipboard('tag753');return false;" class="tag-decoration">nightly</div><div id="tag3007" onclick="CopyToClipboard('tag3007');return false;" class="tag-decoration">nightly-5bfe205</div><div id="tag20987" onclick="CopyToClipboard('tag20987');return false;" class="tag-decoration">nightly-2.5.1.5457</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/5bfe205c444b6b3cb6765feca271c6a1aceae12e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28739098378" target="_blank">2026-07-05 11:22:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9348" onclick="CopyToClipboard('tag9348');return false;" class="tag-decoration">release</div><div id="tag28424" onclick="CopyToClipboard('tag28424');return false;" class="tag-decoration">release-948fa07</div><div id="tag17115" onclick="CopyToClipboard('tag17115');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/948fa0709ed195662df42fc58ee90e2277cf1701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28600323697" target="_blank">2026-07-02 15:05:09</a></td></tr>
<tr><td><div id="tag25165" onclick="CopyToClipboard('tag25165');return false;" class="tag-decoration">testing</div><div id="tag30159" onclick="CopyToClipboard('tag30159');return false;" class="tag-decoration">testing-128a7b7</div><div id="tag11002" onclick="CopyToClipboard('tag11002');return false;" class="tag-decoration">testing-2.5.0.5422</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/128a7b75be5bb78074875ab152b7ae373365e69f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28600321865" target="_blank">2026-07-02 15:05:09</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
