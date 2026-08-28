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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12755" onclick="CopyToClipboard('tag12755');return false;" class="tag-decoration">v2</div><div id="tag31897" onclick="CopyToClipboard('tag31897');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag9696" onclick="CopyToClipboard('tag9696');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag28161" onclick="CopyToClipboard('tag28161');return false;" class="tag-decoration">v2-v2</div><div id="tag24638" onclick="CopyToClipboard('tag24638');return false;" class="tag-decoration">v2-v2.2</div><div id="tag27954" onclick="CopyToClipboard('tag27954');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag3301" onclick="CopyToClipboard('tag3301');return false;" class="tag-decoration">v2-develop</div><div id="tag21770" onclick="CopyToClipboard('tag21770');return false;" class="tag-decoration">v2-develop-39f193a</div><div id="tag25703" onclick="CopyToClipboard('tag25703');return false;" class="tag-decoration">v2-develop-2.2.0-develop.285</div><div id="tag7750" onclick="CopyToClipboard('tag7750');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag10030" onclick="CopyToClipboard('tag10030');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26915" onclick="CopyToClipboard('tag26915');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/39f193a4aa60b8886fe09bef02c3dbbef3bb33e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33205088843" target="_blank">2026-08-28 19:43:03</a></td></tr>
<tr><td><div id="tag5980" onclick="CopyToClipboard('tag5980');return false;" class="tag-decoration">v3</div><div id="tag2304" onclick="CopyToClipboard('tag2304');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag28243" onclick="CopyToClipboard('tag28243');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag21017" onclick="CopyToClipboard('tag21017');return false;" class="tag-decoration">v3-v3</div><div id="tag7930" onclick="CopyToClipboard('tag7930');return false;" class="tag-decoration">v3-v3.3</div><div id="tag25773" onclick="CopyToClipboard('tag25773');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag19865" onclick="CopyToClipboard('tag19865');return false;" class="tag-decoration">v3-develop</div><div id="tag9925" onclick="CopyToClipboard('tag9925');return false;" class="tag-decoration">v3-develop-cd0adf4</div><div id="tag13700" onclick="CopyToClipboard('tag13700');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1322</div><div id="tag2928" onclick="CopyToClipboard('tag2928');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8890" onclick="CopyToClipboard('tag8890');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag6322" onclick="CopyToClipboard('tag6322');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/cd0adf43e66c0b75401fe3b1f47d0351584c1136" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33151412386" target="_blank">2026-08-28 07:25:36</a></td></tr>
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
