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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5195" onclick="CopyToClipboard('tag5195');return false;" class="tag-decoration">v2</div><div id="tag14675" onclick="CopyToClipboard('tag14675');return false;" class="tag-decoration">v2-aa1914d</div><div id="tag20742" onclick="CopyToClipboard('tag20742');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag27682" onclick="CopyToClipboard('tag27682');return false;" class="tag-decoration">v2-v2</div><div id="tag5267" onclick="CopyToClipboard('tag5267');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9054" onclick="CopyToClipboard('tag9054');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa1914d70212e1e14ae67f4a62cc2cb25ae5bc59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919589942" target="_blank">2026-09-04 21:07:15</a></td></tr>
<tr><td><div id="tag24172" onclick="CopyToClipboard('tag24172');return false;" class="tag-decoration">v2-develop</div><div id="tag23233" onclick="CopyToClipboard('tag23233');return false;" class="tag-decoration">v2-develop-9911f45</div><div id="tag21306" onclick="CopyToClipboard('tag21306');return false;" class="tag-decoration">v2-develop-2.2.0-develop.336</div><div id="tag29089" onclick="CopyToClipboard('tag29089');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14095" onclick="CopyToClipboard('tag14095');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag9807" onclick="CopyToClipboard('tag9807');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9911f45552326dbe4584c050ce1fca8c64d421fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34245465231" target="_blank">2026-09-08 15:32:57</a></td></tr>
<tr><td><div id="tag2102" onclick="CopyToClipboard('tag2102');return false;" class="tag-decoration">v3</div><div id="tag5310" onclick="CopyToClipboard('tag5310');return false;" class="tag-decoration">v3-b8885e6</div><div id="tag32551" onclick="CopyToClipboard('tag32551');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag14338" onclick="CopyToClipboard('tag14338');return false;" class="tag-decoration">v3-v3</div><div id="tag21538" onclick="CopyToClipboard('tag21538');return false;" class="tag-decoration">v3-v3.4</div><div id="tag21577" onclick="CopyToClipboard('tag21577');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b8885e6212135f291e116db88b7a8708aac9bae6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919594938" target="_blank">2026-09-04 21:07:19</a></td></tr>
<tr><td><div id="tag32146" onclick="CopyToClipboard('tag32146');return false;" class="tag-decoration">v3-develop</div><div id="tag3093" onclick="CopyToClipboard('tag3093');return false;" class="tag-decoration">v3-develop-103cafa</div><div id="tag32496" onclick="CopyToClipboard('tag32496');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1582</div><div id="tag31717" onclick="CopyToClipboard('tag31717');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19628" onclick="CopyToClipboard('tag19628');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag10430" onclick="CopyToClipboard('tag10430');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/103cafafa961d7d4d7eef4afadeb88f3496e883f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34158647934" target="_blank">2026-09-07 20:14:33</a></td></tr>
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
