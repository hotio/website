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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28335" onclick="CopyToClipboard('tag28335');return false;" class="tag-decoration">v2</div><div id="tag17327" onclick="CopyToClipboard('tag17327');return false;" class="tag-decoration">v2-06f5ad2</div><div id="tag17726" onclick="CopyToClipboard('tag17726');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag13037" onclick="CopyToClipboard('tag13037');return false;" class="tag-decoration">v2-v2</div><div id="tag12388" onclick="CopyToClipboard('tag12388');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17684" onclick="CopyToClipboard('tag17684');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/06f5ad26a83ad9c108c84fbf0471bafb8565ce08" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507612909" target="_blank">2026-10-27 12:55:15</a></td></tr>
<tr><td><div id="tag16595" onclick="CopyToClipboard('tag16595');return false;" class="tag-decoration">v2-develop</div><div id="tag24173" onclick="CopyToClipboard('tag24173');return false;" class="tag-decoration">v2-develop-4a212ea</div><div id="tag28640" onclick="CopyToClipboard('tag28640');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag13088" onclick="CopyToClipboard('tag13088');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag24117" onclick="CopyToClipboard('tag24117');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag23306" onclick="CopyToClipboard('tag23306');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4a212ea9bf5b63efbfa71c0a7c4f28d7921b8c3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40596994204" target="_blank">2026-10-27 22:43:36</a></td></tr>
<tr><td><div id="tag652" onclick="CopyToClipboard('tag652');return false;" class="tag-decoration">v3</div><div id="tag31601" onclick="CopyToClipboard('tag31601');return false;" class="tag-decoration">v3-442ad67</div><div id="tag31610" onclick="CopyToClipboard('tag31610');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag31418" onclick="CopyToClipboard('tag31418');return false;" class="tag-decoration">v3-v3</div><div id="tag28620" onclick="CopyToClipboard('tag28620');return false;" class="tag-decoration">v3-v3.6</div><div id="tag25877" onclick="CopyToClipboard('tag25877');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/442ad67ffbb7c57cf22609adf248489cb81855bf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507610640" target="_blank">2026-10-27 12:55:14</a></td></tr>
<tr><td><div id="tag18797" onclick="CopyToClipboard('tag18797');return false;" class="tag-decoration">v3-develop</div><div id="tag8502" onclick="CopyToClipboard('tag8502');return false;" class="tag-decoration">v3-develop-d6274e6</div><div id="tag21471" onclick="CopyToClipboard('tag21471');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag23280" onclick="CopyToClipboard('tag23280');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag16345" onclick="CopyToClipboard('tag16345');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag529" onclick="CopyToClipboard('tag529');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d6274e6cc6d6bb2a18411070f2dba903f9bccc8e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40596998526" target="_blank">2026-10-27 22:43:39</a></td></tr>
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
