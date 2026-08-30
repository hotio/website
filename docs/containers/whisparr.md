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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22189" onclick="CopyToClipboard('tag22189');return false;" class="tag-decoration">v2</div><div id="tag14994" onclick="CopyToClipboard('tag14994');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag10180" onclick="CopyToClipboard('tag10180');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag6335" onclick="CopyToClipboard('tag6335');return false;" class="tag-decoration">v2-v2</div><div id="tag24964" onclick="CopyToClipboard('tag24964');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17428" onclick="CopyToClipboard('tag17428');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag17931" onclick="CopyToClipboard('tag17931');return false;" class="tag-decoration">v2-develop</div><div id="tag14581" onclick="CopyToClipboard('tag14581');return false;" class="tag-decoration">v2-develop-e5d9c53</div><div id="tag27792" onclick="CopyToClipboard('tag27792');return false;" class="tag-decoration">v2-develop-2.2.0-develop.322</div><div id="tag25414" onclick="CopyToClipboard('tag25414');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19243" onclick="CopyToClipboard('tag19243');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15345" onclick="CopyToClipboard('tag15345');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e5d9c53e2a20c4a8e7e1663cda74358be888596d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33284320424" target="_blank">2026-08-30 00:51:51</a></td></tr>
<tr><td><div id="tag25405" onclick="CopyToClipboard('tag25405');return false;" class="tag-decoration">v3</div><div id="tag21432" onclick="CopyToClipboard('tag21432');return false;" class="tag-decoration">v3-00d55e6</div><div id="tag28114" onclick="CopyToClipboard('tag28114');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag31467" onclick="CopyToClipboard('tag31467');return false;" class="tag-decoration">v3-v3</div><div id="tag24270" onclick="CopyToClipboard('tag24270');return false;" class="tag-decoration">v3-v3.4</div><div id="tag16007" onclick="CopyToClipboard('tag16007');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/00d55e6821959f1ee697c5a3948c9e9b7d7bdd51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311324528" target="_blank">2026-08-30 12:22:47</a></td></tr>
<tr><td><div id="tag18877" onclick="CopyToClipboard('tag18877');return false;" class="tag-decoration">v3-develop</div><div id="tag22044" onclick="CopyToClipboard('tag22044');return false;" class="tag-decoration">v3-develop-dc1b4ee</div><div id="tag5824" onclick="CopyToClipboard('tag5824');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1378</div><div id="tag28244" onclick="CopyToClipboard('tag28244');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag26322" onclick="CopyToClipboard('tag26322');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag15847" onclick="CopyToClipboard('tag15847');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/dc1b4eed714c721cfe73b4b3c26e41aa4b28117a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33245622204" target="_blank">2026-08-29 09:29:49</a></td></tr>
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
