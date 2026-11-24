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
<tr><td><div id="tag7516" onclick="CopyToClipboard('tag7516');return false;" class="tag-decoration">nightly</div><div id="tag5474" onclick="CopyToClipboard('tag5474');return false;" class="tag-decoration">nightly-2e02187</div><div id="tag20434" onclick="CopyToClipboard('tag20434');return false;" class="tag-decoration">nightly-3.1.0.5797</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/2e021874e66d2d9ece0cc0efb670cf60f1204f90" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45304481578" target="_blank">2026-11-24 01:21:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20429" onclick="CopyToClipboard('tag20429');return false;" class="tag-decoration">release</div><div id="tag29974" onclick="CopyToClipboard('tag29974');return false;" class="tag-decoration">release-9c0fc39</div><div id="tag22912" onclick="CopyToClipboard('tag22912');return false;" class="tag-decoration">release-3.0.2.5780</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/9c0fc39ce1522d5926d42749f14db96cd103843a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/43971949425" target="_blank">2026-11-16 22:38:06</a></td></tr>
<tr><td><div id="tag14469" onclick="CopyToClipboard('tag14469');return false;" class="tag-decoration">testing</div><div id="tag6525" onclick="CopyToClipboard('tag6525');return false;" class="tag-decoration">testing-6f95b3b</div><div id="tag9805" onclick="CopyToClipboard('tag9805');return false;" class="tag-decoration">testing-3.1.0.5799</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/6f95b3b3ae3db966a77676144153730af6cdec03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45304473174" target="_blank">2026-11-24 01:21:40</a></td></tr>
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
