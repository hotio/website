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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28353" onclick="CopyToClipboard('tag28353');return false;" class="tag-decoration">v2</div><div id="tag29317" onclick="CopyToClipboard('tag29317');return false;" class="tag-decoration">v2-aa1914d</div><div id="tag1174" onclick="CopyToClipboard('tag1174');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17098" onclick="CopyToClipboard('tag17098');return false;" class="tag-decoration">v2-v2</div><div id="tag9536" onclick="CopyToClipboard('tag9536');return false;" class="tag-decoration">v2-v2.2</div><div id="tag23566" onclick="CopyToClipboard('tag23566');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa1914d70212e1e14ae67f4a62cc2cb25ae5bc59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919589942" target="_blank">2026-09-04 21:07:15</a></td></tr>
<tr><td><div id="tag20293" onclick="CopyToClipboard('tag20293');return false;" class="tag-decoration">v2-develop</div><div id="tag17856" onclick="CopyToClipboard('tag17856');return false;" class="tag-decoration">v2-develop-e83f36c</div><div id="tag18123" onclick="CopyToClipboard('tag18123');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag6264" onclick="CopyToClipboard('tag6264');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag31088" onclick="CopyToClipboard('tag31088');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag6466" onclick="CopyToClipboard('tag6466');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e83f36cde5eb5902e50183666fb74b2b76c8ae3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919592194" target="_blank">2026-09-04 21:07:17</a></td></tr>
<tr><td><div id="tag32718" onclick="CopyToClipboard('tag32718');return false;" class="tag-decoration">v3</div><div id="tag31763" onclick="CopyToClipboard('tag31763');return false;" class="tag-decoration">v3-b8885e6</div><div id="tag24057" onclick="CopyToClipboard('tag24057');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag14713" onclick="CopyToClipboard('tag14713');return false;" class="tag-decoration">v3-v3</div><div id="tag24533" onclick="CopyToClipboard('tag24533');return false;" class="tag-decoration">v3-v3.4</div><div id="tag30786" onclick="CopyToClipboard('tag30786');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b8885e6212135f291e116db88b7a8708aac9bae6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919594938" target="_blank">2026-09-04 21:07:19</a></td></tr>
<tr><td><div id="tag29993" onclick="CopyToClipboard('tag29993');return false;" class="tag-decoration">v3-develop</div><div id="tag20218" onclick="CopyToClipboard('tag20218');return false;" class="tag-decoration">v3-develop-103cafa</div><div id="tag20120" onclick="CopyToClipboard('tag20120');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1582</div><div id="tag22505" onclick="CopyToClipboard('tag22505');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24886" onclick="CopyToClipboard('tag24886');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag30652" onclick="CopyToClipboard('tag30652');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/103cafafa961d7d4d7eef4afadeb88f3496e883f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34158647934" target="_blank">2026-09-07 20:14:33</a></td></tr>
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
