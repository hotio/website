---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag25776" onclick="CopyToClipboard('tag25776');return false;" class="tag-decoration">nightly</div><div id="tag22781" onclick="CopyToClipboard('tag22781');return false;" class="tag-decoration">nightly-648f41e</div><div id="tag16717" onclick="CopyToClipboard('tag16717');return false;" class="tag-decoration">nightly-7.1.0.10948</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/648f41e4be44265de17cc47652ea8d55e9df0463" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45287588928" target="_blank">2026-11-23 23:18:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag791" onclick="CopyToClipboard('tag791');return false;" class="tag-decoration">release</div><div id="tag8237" onclick="CopyToClipboard('tag8237');return false;" class="tag-decoration">release-c70f6c2</div><div id="tag361" onclick="CopyToClipboard('tag361');return false;" class="tag-decoration">release-7.0.3.10918</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/c70f6c2b60f528ddd22117319541e4405672babd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45287586466" target="_blank">2026-11-23 23:17:59</a></td></tr>
<tr><td><div id="tag32321" onclick="CopyToClipboard('tag32321');return false;" class="tag-decoration">testing</div><div id="tag8277" onclick="CopyToClipboard('tag8277');return false;" class="tag-decoration">testing-97dafc4</div><div id="tag31291" onclick="CopyToClipboard('tag31291');return false;" class="tag-decoration">testing-7.0.3.10918</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/97dafc49b835b7773187d0b8fef2d642d60b3ca7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/43824914760" target="_blank">2026-11-16 07:35:17</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
