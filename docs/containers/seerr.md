---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag16587" onclick="CopyToClipboard('tag16587');return false;" class="tag-decoration">nightly</div><div id="tag25252" onclick="CopyToClipboard('tag25252');return false;" class="tag-decoration">nightly-d417cd4</div><div id="tag3903" onclick="CopyToClipboard('tag3903');return false;" class="tag-decoration">nightly-b185621e8e48743bb38adaa0d15b334626b7b100</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/d417cd40fc6ce9dff241d2b58d98b747f9b1973e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/41521391940" target="_blank">2026-11-02 20:40:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16217" onclick="CopyToClipboard('tag16217');return false;" class="tag-decoration">release</div><div id="tag17535" onclick="CopyToClipboard('tag17535');return false;" class="tag-decoration">release-dc5c052</div><div id="tag30206" onclick="CopyToClipboard('tag30206');return false;" class="tag-decoration">release-3.5.1</div><div id="tag4707" onclick="CopyToClipboard('tag4707');return false;" class="tag-decoration">release-v3</div><div id="tag10827" onclick="CopyToClipboard('tag10827');return false;" class="tag-decoration">release-v3.5</div><div id="tag31988" onclick="CopyToClipboard('tag31988');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/dc5c0521e3c91d256c3f4e4fb2e7c0834fda8c87" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/41521376967" target="_blank">2026-11-02 20:40:32</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
