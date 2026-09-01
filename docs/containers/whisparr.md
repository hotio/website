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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5088" onclick="CopyToClipboard('tag5088');return false;" class="tag-decoration">v2</div><div id="tag26220" onclick="CopyToClipboard('tag26220');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag13185" onclick="CopyToClipboard('tag13185');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag23088" onclick="CopyToClipboard('tag23088');return false;" class="tag-decoration">v2-v2</div><div id="tag4142" onclick="CopyToClipboard('tag4142');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30233" onclick="CopyToClipboard('tag30233');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag22558" onclick="CopyToClipboard('tag22558');return false;" class="tag-decoration">v2-develop</div><div id="tag31115" onclick="CopyToClipboard('tag31115');return false;" class="tag-decoration">v2-develop-d1d04e9</div><div id="tag765" onclick="CopyToClipboard('tag765');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag21359" onclick="CopyToClipboard('tag21359');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5389" onclick="CopyToClipboard('tag5389');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag20415" onclick="CopyToClipboard('tag20415');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d1d04e99cd78fd6cfe11edb32abf58c2b10e7e88" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33332982242" target="_blank">2026-08-30 20:12:10</a></td></tr>
<tr><td><div id="tag3475" onclick="CopyToClipboard('tag3475');return false;" class="tag-decoration">v3</div><div id="tag7759" onclick="CopyToClipboard('tag7759');return false;" class="tag-decoration">v3-00d55e6</div><div id="tag11780" onclick="CopyToClipboard('tag11780');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag27558" onclick="CopyToClipboard('tag27558');return false;" class="tag-decoration">v3-v3</div><div id="tag15670" onclick="CopyToClipboard('tag15670');return false;" class="tag-decoration">v3-v3.4</div><div id="tag92" onclick="CopyToClipboard('tag92');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/00d55e6821959f1ee697c5a3948c9e9b7d7bdd51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311324528" target="_blank">2026-08-30 12:22:47</a></td></tr>
<tr><td><div id="tag3403" onclick="CopyToClipboard('tag3403');return false;" class="tag-decoration">v3-develop</div><div id="tag23010" onclick="CopyToClipboard('tag23010');return false;" class="tag-decoration">v3-develop-7fd2e49</div><div id="tag15358" onclick="CopyToClipboard('tag15358');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1444</div><div id="tag12390" onclick="CopyToClipboard('tag12390');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20625" onclick="CopyToClipboard('tag20625');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag7915" onclick="CopyToClipboard('tag7915');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7fd2e4983884073ecae779870714b1b996b2c68d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33475060611" target="_blank">2026-09-01 05:49:01</a></td></tr>
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
