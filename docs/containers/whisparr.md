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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32424" onclick="CopyToClipboard('tag32424');return false;" class="tag-decoration">v2</div><div id="tag9296" onclick="CopyToClipboard('tag9296');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag24567" onclick="CopyToClipboard('tag24567');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag28275" onclick="CopyToClipboard('tag28275');return false;" class="tag-decoration">v2-v2</div><div id="tag11106" onclick="CopyToClipboard('tag11106');return false;" class="tag-decoration">v2-v2.2</div><div id="tag22600" onclick="CopyToClipboard('tag22600');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag23392" onclick="CopyToClipboard('tag23392');return false;" class="tag-decoration">v2-develop</div><div id="tag24433" onclick="CopyToClipboard('tag24433');return false;" class="tag-decoration">v2-develop-39f193a</div><div id="tag13056" onclick="CopyToClipboard('tag13056');return false;" class="tag-decoration">v2-develop-2.2.0-develop.285</div><div id="tag8885" onclick="CopyToClipboard('tag8885');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag25324" onclick="CopyToClipboard('tag25324');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17531" onclick="CopyToClipboard('tag17531');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/39f193a4aa60b8886fe09bef02c3dbbef3bb33e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33205088843" target="_blank">2026-08-28 19:43:03</a></td></tr>
<tr><td><div id="tag31311" onclick="CopyToClipboard('tag31311');return false;" class="tag-decoration">v3</div><div id="tag27049" onclick="CopyToClipboard('tag27049');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag6940" onclick="CopyToClipboard('tag6940');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag15328" onclick="CopyToClipboard('tag15328');return false;" class="tag-decoration">v3-v3</div><div id="tag10822" onclick="CopyToClipboard('tag10822');return false;" class="tag-decoration">v3-v3.3</div><div id="tag9301" onclick="CopyToClipboard('tag9301');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag19844" onclick="CopyToClipboard('tag19844');return false;" class="tag-decoration">v3-develop</div><div id="tag7233" onclick="CopyToClipboard('tag7233');return false;" class="tag-decoration">v3-develop-8b14f70</div><div id="tag21685" onclick="CopyToClipboard('tag21685');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1353</div><div id="tag20064" onclick="CopyToClipboard('tag20064');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30569" onclick="CopyToClipboard('tag30569');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag31418" onclick="CopyToClipboard('tag31418');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8b14f70e0fb2d006dc5d4a3ab44627d79da3a437" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33205088829" target="_blank">2026-08-28 19:43:03</a></td></tr>
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
