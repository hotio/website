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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24833" onclick="CopyToClipboard('tag24833');return false;" class="tag-decoration">v2</div><div id="tag15802" onclick="CopyToClipboard('tag15802');return false;" class="tag-decoration">v2-998495f</div><div id="tag19872" onclick="CopyToClipboard('tag19872');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag25637" onclick="CopyToClipboard('tag25637');return false;" class="tag-decoration">v2-v2</div><div id="tag15814" onclick="CopyToClipboard('tag15814');return false;" class="tag-decoration">v2-v2.2</div><div id="tag25742" onclick="CopyToClipboard('tag25742');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag791" onclick="CopyToClipboard('tag791');return false;" class="tag-decoration">v2-develop</div><div id="tag30889" onclick="CopyToClipboard('tag30889');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag21308" onclick="CopyToClipboard('tag21308');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag10732" onclick="CopyToClipboard('tag10732');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag28986" onclick="CopyToClipboard('tag28986');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag2412" onclick="CopyToClipboard('tag2412');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag11898" onclick="CopyToClipboard('tag11898');return false;" class="tag-decoration">v3</div><div id="tag29286" onclick="CopyToClipboard('tag29286');return false;" class="tag-decoration">v3-7fb9b23</div><div id="tag5824" onclick="CopyToClipboard('tag5824');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag817" onclick="CopyToClipboard('tag817');return false;" class="tag-decoration">v3-v3</div><div id="tag31104" onclick="CopyToClipboard('tag31104');return false;" class="tag-decoration">v3-v3.6</div><div id="tag15358" onclick="CopyToClipboard('tag15358');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7fb9b2395ccc8060763d457df9946db9e183be64" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38456159836" target="_blank">2026-10-13 19:36:17</a></td></tr>
<tr><td><div id="tag4011" onclick="CopyToClipboard('tag4011');return false;" class="tag-decoration">v3-develop</div><div id="tag27819" onclick="CopyToClipboard('tag27819');return false;" class="tag-decoration">v3-develop-77ecf17</div><div id="tag13055" onclick="CopyToClipboard('tag13055');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1903</div><div id="tag16321" onclick="CopyToClipboard('tag16321');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4722" onclick="CopyToClipboard('tag4722');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag3145" onclick="CopyToClipboard('tag3145');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/77ecf17fdf52ae8c5e05efa3df8c136b9885ce1c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38974874880" target="_blank">2026-10-16 22:17:39</a></td></tr>
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
