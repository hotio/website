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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag999" onclick="CopyToClipboard('tag999');return false;" class="tag-decoration">v2</div><div id="tag8999" onclick="CopyToClipboard('tag8999');return false;" class="tag-decoration">v2-998495f</div><div id="tag14516" onclick="CopyToClipboard('tag14516');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag32151" onclick="CopyToClipboard('tag32151');return false;" class="tag-decoration">v2-v2</div><div id="tag22892" onclick="CopyToClipboard('tag22892');return false;" class="tag-decoration">v2-v2.2</div><div id="tag4530" onclick="CopyToClipboard('tag4530');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag28322" onclick="CopyToClipboard('tag28322');return false;" class="tag-decoration">v2-develop</div><div id="tag1510" onclick="CopyToClipboard('tag1510');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag32011" onclick="CopyToClipboard('tag32011');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag30487" onclick="CopyToClipboard('tag30487');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag8676" onclick="CopyToClipboard('tag8676');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag12167" onclick="CopyToClipboard('tag12167');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag26636" onclick="CopyToClipboard('tag26636');return false;" class="tag-decoration">v3</div><div id="tag4720" onclick="CopyToClipboard('tag4720');return false;" class="tag-decoration">v3-4c2fb89</div><div id="tag6834" onclick="CopyToClipboard('tag6834');return false;" class="tag-decoration">v3-3.6.4-release.1865</div><div id="tag31000" onclick="CopyToClipboard('tag31000');return false;" class="tag-decoration">v3-v3</div><div id="tag31746" onclick="CopyToClipboard('tag31746');return false;" class="tag-decoration">v3-v3.6</div><div id="tag10967" onclick="CopyToClipboard('tag10967');return false;" class="tag-decoration">v3-v3.6.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4c2fb89f8b6cca7c1a5d35e271dc3880061f76fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38173143300" target="_blank">2026-10-11 20:39:42</a></td></tr>
<tr><td><div id="tag24824" onclick="CopyToClipboard('tag24824');return false;" class="tag-decoration">v3-develop</div><div id="tag23315" onclick="CopyToClipboard('tag23315');return false;" class="tag-decoration">v3-develop-78cf324</div><div id="tag868" onclick="CopyToClipboard('tag868');return false;" class="tag-decoration">v3-develop-3.6.5-develop.1880</div><div id="tag12550" onclick="CopyToClipboard('tag12550');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24974" onclick="CopyToClipboard('tag24974');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag8464" onclick="CopyToClipboard('tag8464');return false;" class="tag-decoration">v3-develop-v3.6.5</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/78cf3248f25a2d388054a984c1ebd86e41d9e671" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38321493538" target="_blank">2026-10-12 23:19:04</a></td></tr>
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
