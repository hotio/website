---
hide:
  - toc
title: hotio/sonarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sonarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sonarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sonarr/sonarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27396" onclick="CopyToClipboard('tag27396');return false;" class="tag-decoration">nightly</div><div id="tag8456" onclick="CopyToClipboard('tag8456');return false;" class="tag-decoration">nightly-e5d297a</div><div id="tag30770" onclick="CopyToClipboard('tag30770');return false;" class="tag-decoration">nightly-4.0.16.2946</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/e5d297a1607d620b296e27e9544bc71c884e0fca" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/21065743888" target="_blank">2026-01-16 11:53:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10027" onclick="CopyToClipboard('tag10027');return false;" class="tag-decoration">release</div><div id="tag3138" onclick="CopyToClipboard('tag3138');return false;" class="tag-decoration">release-2cf3bd6</div><div id="tag14749" onclick="CopyToClipboard('tag14749');return false;" class="tag-decoration">release-4.0.16.2944</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/2cf3bd6350435a5609f0035c05fbbaa30f9792d5" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/21064911624" target="_blank">2026-01-16 11:19:04</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sonarr" \
        -p 8989:8989 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8989/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sonarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sonarr:
        container_name: sonarr
        image: ghcr.io/hotio/sonarr
        ports:
          - "8989:8989"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8989/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
