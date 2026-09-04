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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20455" onclick="CopyToClipboard('tag20455');return false;" class="tag-decoration">v2</div><div id="tag10947" onclick="CopyToClipboard('tag10947');return false;" class="tag-decoration">v2-aa1914d</div><div id="tag2906" onclick="CopyToClipboard('tag2906');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag9414" onclick="CopyToClipboard('tag9414');return false;" class="tag-decoration">v2-v2</div><div id="tag16104" onclick="CopyToClipboard('tag16104');return false;" class="tag-decoration">v2-v2.2</div><div id="tag3629" onclick="CopyToClipboard('tag3629');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa1914d70212e1e14ae67f4a62cc2cb25ae5bc59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919589942" target="_blank">2026-09-04 21:07:15</a></td></tr>
<tr><td><div id="tag11408" onclick="CopyToClipboard('tag11408');return false;" class="tag-decoration">v2-develop</div><div id="tag5149" onclick="CopyToClipboard('tag5149');return false;" class="tag-decoration">v2-develop-1c0e956</div><div id="tag1416" onclick="CopyToClipboard('tag1416');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag30799" onclick="CopyToClipboard('tag30799');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19774" onclick="CopyToClipboard('tag19774');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag18504" onclick="CopyToClipboard('tag18504');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1c0e9564c09c7d78cfa5ce72ca00f60cd5afa701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599363470" target="_blank">2026-09-02 06:33:17</a></td></tr>
<tr><td><div id="tag15147" onclick="CopyToClipboard('tag15147');return false;" class="tag-decoration">v3</div><div id="tag206" onclick="CopyToClipboard('tag206');return false;" class="tag-decoration">v3-b8885e6</div><div id="tag2521" onclick="CopyToClipboard('tag2521');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag20913" onclick="CopyToClipboard('tag20913');return false;" class="tag-decoration">v3-v3</div><div id="tag7780" onclick="CopyToClipboard('tag7780');return false;" class="tag-decoration">v3-v3.4</div><div id="tag20301" onclick="CopyToClipboard('tag20301');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b8885e6212135f291e116db88b7a8708aac9bae6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919594938" target="_blank">2026-09-04 21:07:19</a></td></tr>
<tr><td><div id="tag8458" onclick="CopyToClipboard('tag8458');return false;" class="tag-decoration">v3-develop</div><div id="tag1634" onclick="CopyToClipboard('tag1634');return false;" class="tag-decoration">v3-develop-60a6808</div><div id="tag23620" onclick="CopyToClipboard('tag23620');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1561</div><div id="tag30985" onclick="CopyToClipboard('tag30985');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3618" onclick="CopyToClipboard('tag3618');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag16184" onclick="CopyToClipboard('tag16184');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/60a680875915f019f925e4ecb238e1b699152742" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919592988" target="_blank">2026-09-04 21:07:18</a></td></tr>
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
