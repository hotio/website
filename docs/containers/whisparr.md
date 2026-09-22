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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25761" onclick="CopyToClipboard('tag25761');return false;" class="tag-decoration">v2</div><div id="tag12429" onclick="CopyToClipboard('tag12429');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag21685" onclick="CopyToClipboard('tag21685');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag6601" onclick="CopyToClipboard('tag6601');return false;" class="tag-decoration">v2-v2</div><div id="tag6251" onclick="CopyToClipboard('tag6251');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9844" onclick="CopyToClipboard('tag9844');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag2815" onclick="CopyToClipboard('tag2815');return false;" class="tag-decoration">v2-develop</div><div id="tag6643" onclick="CopyToClipboard('tag6643');return false;" class="tag-decoration">v2-develop-3e1a116</div><div id="tag2903" onclick="CopyToClipboard('tag2903');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag18071" onclick="CopyToClipboard('tag18071');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag4403" onclick="CopyToClipboard('tag4403');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag23002" onclick="CopyToClipboard('tag23002');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e1a116cef3b0a89ab1a64ddc1757f8f5a1039ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35471710899" target="_blank">2026-09-19 21:52:39</a></td></tr>
<tr><td><div id="tag13266" onclick="CopyToClipboard('tag13266');return false;" class="tag-decoration">v3</div><div id="tag27254" onclick="CopyToClipboard('tag27254');return false;" class="tag-decoration">v3-e36c32c</div><div id="tag29989" onclick="CopyToClipboard('tag29989');return false;" class="tag-decoration">v3-3.6.1-release.1708</div><div id="tag15242" onclick="CopyToClipboard('tag15242');return false;" class="tag-decoration">v3-v3</div><div id="tag20271" onclick="CopyToClipboard('tag20271');return false;" class="tag-decoration">v3-v3.6</div><div id="tag32324" onclick="CopyToClipboard('tag32324');return false;" class="tag-decoration">v3-v3.6.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e36c32c5776e543477a023bde7c6a6f366fd35a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527361" target="_blank">2026-09-22 08:00:55</a></td></tr>
<tr><td><div id="tag29865" onclick="CopyToClipboard('tag29865');return false;" class="tag-decoration">v3-develop</div><div id="tag18198" onclick="CopyToClipboard('tag18198');return false;" class="tag-decoration">v3-develop-ad98dbc</div><div id="tag9039" onclick="CopyToClipboard('tag9039');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1711</div><div id="tag1864" onclick="CopyToClipboard('tag1864');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30902" onclick="CopyToClipboard('tag30902');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag5250" onclick="CopyToClipboard('tag5250');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ad98dbce53211ad47fcca2af8524380359961394" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702530980" target="_blank">2026-09-22 08:00:56</a></td></tr>
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
