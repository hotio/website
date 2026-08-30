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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31618" onclick="CopyToClipboard('tag31618');return false;" class="tag-decoration">v2</div><div id="tag11365" onclick="CopyToClipboard('tag11365');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag32268" onclick="CopyToClipboard('tag32268');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag19467" onclick="CopyToClipboard('tag19467');return false;" class="tag-decoration">v2-v2</div><div id="tag21891" onclick="CopyToClipboard('tag21891');return false;" class="tag-decoration">v2-v2.2</div><div id="tag25148" onclick="CopyToClipboard('tag25148');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag30325" onclick="CopyToClipboard('tag30325');return false;" class="tag-decoration">v2-develop</div><div id="tag11898" onclick="CopyToClipboard('tag11898');return false;" class="tag-decoration">v2-develop-e5d9c53</div><div id="tag9222" onclick="CopyToClipboard('tag9222');return false;" class="tag-decoration">v2-develop-2.2.0-develop.322</div><div id="tag11782" onclick="CopyToClipboard('tag11782');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag4172" onclick="CopyToClipboard('tag4172');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag9593" onclick="CopyToClipboard('tag9593');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e5d9c53e2a20c4a8e7e1663cda74358be888596d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33284320424" target="_blank">2026-08-30 00:51:51</a></td></tr>
<tr><td><div id="tag15650" onclick="CopyToClipboard('tag15650');return false;" class="tag-decoration">v3</div><div id="tag15689" onclick="CopyToClipboard('tag15689');return false;" class="tag-decoration">v3-00d55e6</div><div id="tag11951" onclick="CopyToClipboard('tag11951');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag24914" onclick="CopyToClipboard('tag24914');return false;" class="tag-decoration">v3-v3</div><div id="tag13781" onclick="CopyToClipboard('tag13781');return false;" class="tag-decoration">v3-v3.4</div><div id="tag2129" onclick="CopyToClipboard('tag2129');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/00d55e6821959f1ee697c5a3948c9e9b7d7bdd51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311324528" target="_blank">2026-08-30 12:22:47</a></td></tr>
<tr><td><div id="tag20760" onclick="CopyToClipboard('tag20760');return false;" class="tag-decoration">v3-develop</div><div id="tag10441" onclick="CopyToClipboard('tag10441');return false;" class="tag-decoration">v3-develop-670c81e</div><div id="tag30645" onclick="CopyToClipboard('tag30645');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1388</div><div id="tag31214" onclick="CopyToClipboard('tag31214');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12964" onclick="CopyToClipboard('tag12964');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag4378" onclick="CopyToClipboard('tag4378');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/670c81e495a5b5095e4a6958b817aa1b5042d10a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311321020" target="_blank">2026-08-30 12:22:43</a></td></tr>
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
