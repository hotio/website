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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5936" onclick="CopyToClipboard('tag5936');return false;" class="tag-decoration">v2</div><div id="tag32247" onclick="CopyToClipboard('tag32247');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag27688" onclick="CopyToClipboard('tag27688');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag27158" onclick="CopyToClipboard('tag27158');return false;" class="tag-decoration">v2-v2</div><div id="tag4265" onclick="CopyToClipboard('tag4265');return false;" class="tag-decoration">v2-v2.2</div><div id="tag28127" onclick="CopyToClipboard('tag28127');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag25673" onclick="CopyToClipboard('tag25673');return false;" class="tag-decoration">v2-develop</div><div id="tag28421" onclick="CopyToClipboard('tag28421');return false;" class="tag-decoration">v2-develop-d1d04e9</div><div id="tag99" onclick="CopyToClipboard('tag99');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag20225" onclick="CopyToClipboard('tag20225');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11484" onclick="CopyToClipboard('tag11484');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag4022" onclick="CopyToClipboard('tag4022');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d1d04e99cd78fd6cfe11edb32abf58c2b10e7e88" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33332982242" target="_blank">2026-08-30 20:12:10</a></td></tr>
<tr><td><div id="tag10482" onclick="CopyToClipboard('tag10482');return false;" class="tag-decoration">v3</div><div id="tag14268" onclick="CopyToClipboard('tag14268');return false;" class="tag-decoration">v3-00d55e6</div><div id="tag1605" onclick="CopyToClipboard('tag1605');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag28925" onclick="CopyToClipboard('tag28925');return false;" class="tag-decoration">v3-v3</div><div id="tag24913" onclick="CopyToClipboard('tag24913');return false;" class="tag-decoration">v3-v3.4</div><div id="tag25836" onclick="CopyToClipboard('tag25836');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/00d55e6821959f1ee697c5a3948c9e9b7d7bdd51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311324528" target="_blank">2026-08-30 12:22:47</a></td></tr>
<tr><td><div id="tag7752" onclick="CopyToClipboard('tag7752');return false;" class="tag-decoration">v3-develop</div><div id="tag4598" onclick="CopyToClipboard('tag4598');return false;" class="tag-decoration">v3-develop-670c81e</div><div id="tag16673" onclick="CopyToClipboard('tag16673');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1388</div><div id="tag13271" onclick="CopyToClipboard('tag13271');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5418" onclick="CopyToClipboard('tag5418');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag12978" onclick="CopyToClipboard('tag12978');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/670c81e495a5b5095e4a6958b817aa1b5042d10a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311321020" target="_blank">2026-08-30 12:22:43</a></td></tr>
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
