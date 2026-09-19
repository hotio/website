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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23443" onclick="CopyToClipboard('tag23443');return false;" class="tag-decoration">v2</div><div id="tag4674" onclick="CopyToClipboard('tag4674');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag23628" onclick="CopyToClipboard('tag23628');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag3233" onclick="CopyToClipboard('tag3233');return false;" class="tag-decoration">v2-v2</div><div id="tag15848" onclick="CopyToClipboard('tag15848');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11676" onclick="CopyToClipboard('tag11676');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag6775" onclick="CopyToClipboard('tag6775');return false;" class="tag-decoration">v2-develop</div><div id="tag12932" onclick="CopyToClipboard('tag12932');return false;" class="tag-decoration">v2-develop-3e1a116</div><div id="tag14465" onclick="CopyToClipboard('tag14465');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag29587" onclick="CopyToClipboard('tag29587');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag22609" onclick="CopyToClipboard('tag22609');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15808" onclick="CopyToClipboard('tag15808');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e1a116cef3b0a89ab1a64ddc1757f8f5a1039ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35471710899" target="_blank">2026-09-19 21:52:39</a></td></tr>
<tr><td><div id="tag28506" onclick="CopyToClipboard('tag28506');return false;" class="tag-decoration">v3</div><div id="tag1182" onclick="CopyToClipboard('tag1182');return false;" class="tag-decoration">v3-44c7018</div><div id="tag24996" onclick="CopyToClipboard('tag24996');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag8687" onclick="CopyToClipboard('tag8687');return false;" class="tag-decoration">v3-v3</div><div id="tag12934" onclick="CopyToClipboard('tag12934');return false;" class="tag-decoration">v3-v3.6</div><div id="tag20771" onclick="CopyToClipboard('tag20771');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/44c70188b212c0edcc5a8dd8de67fef16b6994a1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363850436" target="_blank">2026-09-18 15:40:20</a></td></tr>
<tr><td><div id="tag2602" onclick="CopyToClipboard('tag2602');return false;" class="tag-decoration">v3-develop</div><div id="tag17454" onclick="CopyToClipboard('tag17454');return false;" class="tag-decoration">v3-develop-7fd09c5</div><div id="tag15428" onclick="CopyToClipboard('tag15428');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1694</div><div id="tag22713" onclick="CopyToClipboard('tag22713');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25207" onclick="CopyToClipboard('tag25207');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag15302" onclick="CopyToClipboard('tag15302');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7fd09c58cc40a3210c20ea1a130b4459617405d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35429788033" target="_blank">2026-09-19 07:36:30</a></td></tr>
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
