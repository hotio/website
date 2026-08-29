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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22429" onclick="CopyToClipboard('tag22429');return false;" class="tag-decoration">v2</div><div id="tag8351" onclick="CopyToClipboard('tag8351');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag11618" onclick="CopyToClipboard('tag11618');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag3578" onclick="CopyToClipboard('tag3578');return false;" class="tag-decoration">v2-v2</div><div id="tag19310" onclick="CopyToClipboard('tag19310');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31252" onclick="CopyToClipboard('tag31252');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag14460" onclick="CopyToClipboard('tag14460');return false;" class="tag-decoration">v2-develop</div><div id="tag26397" onclick="CopyToClipboard('tag26397');return false;" class="tag-decoration">v2-develop-5a3234e</div><div id="tag8502" onclick="CopyToClipboard('tag8502');return false;" class="tag-decoration">v2-develop-2.2.0-develop.291</div><div id="tag29954" onclick="CopyToClipboard('tag29954');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag30250" onclick="CopyToClipboard('tag30250');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag972" onclick="CopyToClipboard('tag972');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5a3234e43ace1c08600b3b15899a7b332b34d827" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33229238381" target="_blank">2026-08-29 02:33:02</a></td></tr>
<tr><td><div id="tag28657" onclick="CopyToClipboard('tag28657');return false;" class="tag-decoration">v3</div><div id="tag31834" onclick="CopyToClipboard('tag31834');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag700" onclick="CopyToClipboard('tag700');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag11175" onclick="CopyToClipboard('tag11175');return false;" class="tag-decoration">v3-v3</div><div id="tag6114" onclick="CopyToClipboard('tag6114');return false;" class="tag-decoration">v3-v3.3</div><div id="tag28296" onclick="CopyToClipboard('tag28296');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag10220" onclick="CopyToClipboard('tag10220');return false;" class="tag-decoration">v3-develop</div><div id="tag2245" onclick="CopyToClipboard('tag2245');return false;" class="tag-decoration">v3-develop-dc1b4ee</div><div id="tag24264" onclick="CopyToClipboard('tag24264');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1378</div><div id="tag15429" onclick="CopyToClipboard('tag15429');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag11155" onclick="CopyToClipboard('tag11155');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag18282" onclick="CopyToClipboard('tag18282');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/dc1b4eed714c721cfe73b4b3c26e41aa4b28117a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33245622204" target="_blank">2026-08-29 09:29:49</a></td></tr>
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
