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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31487" onclick="CopyToClipboard('tag31487');return false;" class="tag-decoration">v2</div><div id="tag2503" onclick="CopyToClipboard('tag2503');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag2025" onclick="CopyToClipboard('tag2025');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag10443" onclick="CopyToClipboard('tag10443');return false;" class="tag-decoration">v2-v2</div><div id="tag2919" onclick="CopyToClipboard('tag2919');return false;" class="tag-decoration">v2-v2.2</div><div id="tag6019" onclick="CopyToClipboard('tag6019');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag1274" onclick="CopyToClipboard('tag1274');return false;" class="tag-decoration">v2-develop</div><div id="tag19702" onclick="CopyToClipboard('tag19702');return false;" class="tag-decoration">v2-develop-3e1a116</div><div id="tag12391" onclick="CopyToClipboard('tag12391');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag27757" onclick="CopyToClipboard('tag27757');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14953" onclick="CopyToClipboard('tag14953');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag19888" onclick="CopyToClipboard('tag19888');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e1a116cef3b0a89ab1a64ddc1757f8f5a1039ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35471710899" target="_blank">2026-09-19 21:52:39</a></td></tr>
<tr><td><div id="tag9813" onclick="CopyToClipboard('tag9813');return false;" class="tag-decoration">v3</div><div id="tag10331" onclick="CopyToClipboard('tag10331');return false;" class="tag-decoration">v3-d443ede</div><div id="tag8648" onclick="CopyToClipboard('tag8648');return false;" class="tag-decoration">v3-3.6.1-release.1708</div><div id="tag10605" onclick="CopyToClipboard('tag10605');return false;" class="tag-decoration">v3-v3</div><div id="tag26888" onclick="CopyToClipboard('tag26888');return false;" class="tag-decoration">v3-v3.6</div><div id="tag3058" onclick="CopyToClipboard('tag3058');return false;" class="tag-decoration">v3-v3.6.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/d443eded6b2b981b5d2cfc3fc10ba210e5f867d0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35483056806" target="_blank">2026-09-20 02:05:08</a></td></tr>
<tr><td><div id="tag10017" onclick="CopyToClipboard('tag10017');return false;" class="tag-decoration">v3-develop</div><div id="tag1959" onclick="CopyToClipboard('tag1959');return false;" class="tag-decoration">v3-develop-155ef85</div><div id="tag18194" onclick="CopyToClipboard('tag18194');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1706</div><div id="tag5511" onclick="CopyToClipboard('tag5511');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10584" onclick="CopyToClipboard('tag10584');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag1165" onclick="CopyToClipboard('tag1165');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/155ef85f63e9267563f6adf2ed752f27613344fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35483056645" target="_blank">2026-09-20 02:05:08</a></td></tr>
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
