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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7716" onclick="CopyToClipboard('tag7716');return false;" class="tag-decoration">v2</div><div id="tag8497" onclick="CopyToClipboard('tag8497');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag23522" onclick="CopyToClipboard('tag23522');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17609" onclick="CopyToClipboard('tag17609');return false;" class="tag-decoration">v2-v2</div><div id="tag4357" onclick="CopyToClipboard('tag4357');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15129" onclick="CopyToClipboard('tag15129');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag13178" onclick="CopyToClipboard('tag13178');return false;" class="tag-decoration">v2-develop</div><div id="tag23687" onclick="CopyToClipboard('tag23687');return false;" class="tag-decoration">v2-develop-d1d04e9</div><div id="tag18160" onclick="CopyToClipboard('tag18160');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag19887" onclick="CopyToClipboard('tag19887');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag6896" onclick="CopyToClipboard('tag6896');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag29402" onclick="CopyToClipboard('tag29402');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d1d04e99cd78fd6cfe11edb32abf58c2b10e7e88" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33332982242" target="_blank">2026-08-30 20:12:10</a></td></tr>
<tr><td><div id="tag19854" onclick="CopyToClipboard('tag19854');return false;" class="tag-decoration">v3</div><div id="tag260" onclick="CopyToClipboard('tag260');return false;" class="tag-decoration">v3-00d55e6</div><div id="tag10090" onclick="CopyToClipboard('tag10090');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag14289" onclick="CopyToClipboard('tag14289');return false;" class="tag-decoration">v3-v3</div><div id="tag4680" onclick="CopyToClipboard('tag4680');return false;" class="tag-decoration">v3-v3.4</div><div id="tag24866" onclick="CopyToClipboard('tag24866');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/00d55e6821959f1ee697c5a3948c9e9b7d7bdd51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311324528" target="_blank">2026-08-30 12:22:47</a></td></tr>
<tr><td><div id="tag24026" onclick="CopyToClipboard('tag24026');return false;" class="tag-decoration">v3-develop</div><div id="tag27141" onclick="CopyToClipboard('tag27141');return false;" class="tag-decoration">v3-develop-b141caf</div><div id="tag16206" onclick="CopyToClipboard('tag16206');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1412</div><div id="tag9170" onclick="CopyToClipboard('tag9170');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6046" onclick="CopyToClipboard('tag6046');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag20881" onclick="CopyToClipboard('tag20881');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b141caf89beb26b2d086ef21fb9af50734ba8ddf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33340562630" target="_blank">2026-08-30 22:58:44</a></td></tr>
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
