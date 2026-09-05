---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17873" onclick="CopyToClipboard('tag17873');return false;" class="tag-decoration">v2</div><div id="tag7009" onclick="CopyToClipboard('tag7009');return false;" class="tag-decoration">v2-aa1914d</div><div id="tag17346" onclick="CopyToClipboard('tag17346');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag32227" onclick="CopyToClipboard('tag32227');return false;" class="tag-decoration">v2-v2</div><div id="tag23518" onclick="CopyToClipboard('tag23518');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15664" onclick="CopyToClipboard('tag15664');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa1914d70212e1e14ae67f4a62cc2cb25ae5bc59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919589942" target="_blank">2026-09-04 21:07:15</a></td></tr>
<tr><td><div id="tag24905" onclick="CopyToClipboard('tag24905');return false;" class="tag-decoration">v2-develop</div><div id="tag6396" onclick="CopyToClipboard('tag6396');return false;" class="tag-decoration">v2-develop-e83f36c</div><div id="tag19657" onclick="CopyToClipboard('tag19657');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag27558" onclick="CopyToClipboard('tag27558');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag32601" onclick="CopyToClipboard('tag32601');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag4349" onclick="CopyToClipboard('tag4349');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e83f36cde5eb5902e50183666fb74b2b76c8ae3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919592194" target="_blank">2026-09-04 21:07:17</a></td></tr>
<tr><td><div id="tag13219" onclick="CopyToClipboard('tag13219');return false;" class="tag-decoration">v3</div><div id="tag8489" onclick="CopyToClipboard('tag8489');return false;" class="tag-decoration">v3-b8885e6</div><div id="tag17599" onclick="CopyToClipboard('tag17599');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag2279" onclick="CopyToClipboard('tag2279');return false;" class="tag-decoration">v3-v3</div><div id="tag7269" onclick="CopyToClipboard('tag7269');return false;" class="tag-decoration">v3-v3.4</div><div id="tag28557" onclick="CopyToClipboard('tag28557');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b8885e6212135f291e116db88b7a8708aac9bae6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919594938" target="_blank">2026-09-04 21:07:19</a></td></tr>
<tr><td><div id="tag11035" onclick="CopyToClipboard('tag11035');return false;" class="tag-decoration">v3-develop</div><div id="tag29801" onclick="CopyToClipboard('tag29801');return false;" class="tag-decoration">v3-develop-0941f8b</div><div id="tag29010" onclick="CopyToClipboard('tag29010');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1573</div><div id="tag15017" onclick="CopyToClipboard('tag15017');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8879" onclick="CopyToClipboard('tag8879');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag10609" onclick="CopyToClipboard('tag10609');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0941f8b434da59c311f225f6da2f913fdf6cc0fb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33984732880" target="_blank">2026-09-05 18:39:13</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
