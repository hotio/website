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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22202" onclick="CopyToClipboard('tag22202');return false;" class="tag-decoration">v2</div><div id="tag19512" onclick="CopyToClipboard('tag19512');return false;" class="tag-decoration">v2-aa1914d</div><div id="tag4966" onclick="CopyToClipboard('tag4966');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17383" onclick="CopyToClipboard('tag17383');return false;" class="tag-decoration">v2-v2</div><div id="tag24187" onclick="CopyToClipboard('tag24187');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21646" onclick="CopyToClipboard('tag21646');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa1914d70212e1e14ae67f4a62cc2cb25ae5bc59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919589942" target="_blank">2026-09-04 21:07:15</a></td></tr>
<tr><td><div id="tag15332" onclick="CopyToClipboard('tag15332');return false;" class="tag-decoration">v2-develop</div><div id="tag12706" onclick="CopyToClipboard('tag12706');return false;" class="tag-decoration">v2-develop-e83f36c</div><div id="tag22178" onclick="CopyToClipboard('tag22178');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag31673" onclick="CopyToClipboard('tag31673');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5363" onclick="CopyToClipboard('tag5363');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26523" onclick="CopyToClipboard('tag26523');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e83f36cde5eb5902e50183666fb74b2b76c8ae3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919592194" target="_blank">2026-09-04 21:07:17</a></td></tr>
<tr><td><div id="tag19920" onclick="CopyToClipboard('tag19920');return false;" class="tag-decoration">v3</div><div id="tag5594" onclick="CopyToClipboard('tag5594');return false;" class="tag-decoration">v3-b8885e6</div><div id="tag9337" onclick="CopyToClipboard('tag9337');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag30729" onclick="CopyToClipboard('tag30729');return false;" class="tag-decoration">v3-v3</div><div id="tag3967" onclick="CopyToClipboard('tag3967');return false;" class="tag-decoration">v3-v3.4</div><div id="tag23569" onclick="CopyToClipboard('tag23569');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b8885e6212135f291e116db88b7a8708aac9bae6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919594938" target="_blank">2026-09-04 21:07:19</a></td></tr>
<tr><td><div id="tag1420" onclick="CopyToClipboard('tag1420');return false;" class="tag-decoration">v3-develop</div><div id="tag27646" onclick="CopyToClipboard('tag27646');return false;" class="tag-decoration">v3-develop-1e32df2</div><div id="tag20839" onclick="CopyToClipboard('tag20839');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1578</div><div id="tag27370" onclick="CopyToClipboard('tag27370');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30812" onclick="CopyToClipboard('tag30812');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag8088" onclick="CopyToClipboard('tag8088');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1e32df24d84f165dea5d4fbd22680a185cea8547" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34141997891" target="_blank">2026-09-07 16:10:33</a></td></tr>
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
