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
<tr><td><div id="tag16595" onclick="CopyToClipboard('tag16595');return false;" class="tag-decoration">nightly</div><div id="tag1741" onclick="CopyToClipboard('tag1741');return false;" class="tag-decoration">nightly-3e748b5</div><div id="tag3416" onclick="CopyToClipboard('tag3416');return false;" class="tag-decoration">nightly-2.4.0.5368</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/3e748b5dbf499927316621e60f6537657b6de880" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25700520747" target="_blank">2026-05-11 22:15:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag688" onclick="CopyToClipboard('tag688');return false;" class="tag-decoration">release</div><div id="tag16056" onclick="CopyToClipboard('tag16056');return false;" class="tag-decoration">release-c870b34</div><div id="tag27726" onclick="CopyToClipboard('tag27726');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/c870b347a941ce61ca01af47ca5ba9d0ba21d934" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25664484417" target="_blank">2026-05-11 10:24:04</a></td></tr>
<tr><td><div id="tag7093" onclick="CopyToClipboard('tag7093');return false;" class="tag-decoration">testing</div><div id="tag23796" onclick="CopyToClipboard('tag23796');return false;" class="tag-decoration">testing-b2840af</div><div id="tag21585" onclick="CopyToClipboard('tag21585');return false;" class="tag-decoration">testing-2.3.7.5365</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/b2840af3d2fcba7e9c2f7ea38267ec852787bc36" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25700528373" target="_blank">2026-05-11 22:16:01</a></td></tr>
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
