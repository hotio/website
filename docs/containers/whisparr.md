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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19792" onclick="CopyToClipboard('tag19792');return false;" class="tag-decoration">v2</div><div id="tag2919" onclick="CopyToClipboard('tag2919');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag28809" onclick="CopyToClipboard('tag28809');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag30046" onclick="CopyToClipboard('tag30046');return false;" class="tag-decoration">v2-v2</div><div id="tag15921" onclick="CopyToClipboard('tag15921');return false;" class="tag-decoration">v2-v2.2</div><div id="tag23636" onclick="CopyToClipboard('tag23636');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag14218" onclick="CopyToClipboard('tag14218');return false;" class="tag-decoration">v2-develop</div><div id="tag2618" onclick="CopyToClipboard('tag2618');return false;" class="tag-decoration">v2-develop-dbc3e09</div><div id="tag22906" onclick="CopyToClipboard('tag22906');return false;" class="tag-decoration">v2-develop-2.2.0-develop.293</div><div id="tag25278" onclick="CopyToClipboard('tag25278');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9472" onclick="CopyToClipboard('tag9472');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag13720" onclick="CopyToClipboard('tag13720');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/dbc3e09276eb4b0b31823060d19d1318db209725" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33267019015" target="_blank">2026-08-29 17:58:39</a></td></tr>
<tr><td><div id="tag10879" onclick="CopyToClipboard('tag10879');return false;" class="tag-decoration">v3</div><div id="tag16567" onclick="CopyToClipboard('tag16567');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag31342" onclick="CopyToClipboard('tag31342');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag8904" onclick="CopyToClipboard('tag8904');return false;" class="tag-decoration">v3-v3</div><div id="tag11584" onclick="CopyToClipboard('tag11584');return false;" class="tag-decoration">v3-v3.3</div><div id="tag22296" onclick="CopyToClipboard('tag22296');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag21233" onclick="CopyToClipboard('tag21233');return false;" class="tag-decoration">v3-develop</div><div id="tag27935" onclick="CopyToClipboard('tag27935');return false;" class="tag-decoration">v3-develop-dc1b4ee</div><div id="tag8913" onclick="CopyToClipboard('tag8913');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1378</div><div id="tag27551" onclick="CopyToClipboard('tag27551');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28702" onclick="CopyToClipboard('tag28702');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag28938" onclick="CopyToClipboard('tag28938');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/dc1b4eed714c721cfe73b4b3c26e41aa4b28117a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33245622204" target="_blank">2026-08-29 09:29:49</a></td></tr>
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
