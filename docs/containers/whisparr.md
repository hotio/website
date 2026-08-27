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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29123" onclick="CopyToClipboard('tag29123');return false;" class="tag-decoration">v2</div><div id="tag21722" onclick="CopyToClipboard('tag21722');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag29709" onclick="CopyToClipboard('tag29709');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag3619" onclick="CopyToClipboard('tag3619');return false;" class="tag-decoration">v2-v2</div><div id="tag25654" onclick="CopyToClipboard('tag25654');return false;" class="tag-decoration">v2-v2.2</div><div id="tag3438" onclick="CopyToClipboard('tag3438');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag182" onclick="CopyToClipboard('tag182');return false;" class="tag-decoration">v2-develop</div><div id="tag5511" onclick="CopyToClipboard('tag5511');return false;" class="tag-decoration">v2-develop-02a0a52</div><div id="tag23556" onclick="CopyToClipboard('tag23556');return false;" class="tag-decoration">v2-develop-2.2.0-develop.242</div><div id="tag16154" onclick="CopyToClipboard('tag16154');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3313" onclick="CopyToClipboard('tag3313');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag20431" onclick="CopyToClipboard('tag20431');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/02a0a52a064c98ee75ffedaeb13cfe69485f3c80" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33075888278" target="_blank">2026-08-27 13:15:25</a></td></tr>
<tr><td><div id="tag5511" onclick="CopyToClipboard('tag5511');return false;" class="tag-decoration">v3</div><div id="tag2974" onclick="CopyToClipboard('tag2974');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag7171" onclick="CopyToClipboard('tag7171');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag3138" onclick="CopyToClipboard('tag3138');return false;" class="tag-decoration">v3-v3</div><div id="tag3767" onclick="CopyToClipboard('tag3767');return false;" class="tag-decoration">v3-v3.3</div><div id="tag4752" onclick="CopyToClipboard('tag4752');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag28778" onclick="CopyToClipboard('tag28778');return false;" class="tag-decoration">v3-develop</div><div id="tag32547" onclick="CopyToClipboard('tag32547');return false;" class="tag-decoration">v3-develop-e381cdf</div><div id="tag25991" onclick="CopyToClipboard('tag25991');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1310</div><div id="tag20518" onclick="CopyToClipboard('tag20518');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14912" onclick="CopyToClipboard('tag14912');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag18242" onclick="CopyToClipboard('tag18242');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e381cdfeedf5795afa1c086bcc7fb7a619437518" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33113811549" target="_blank">2026-08-27 20:32:21</a></td></tr>
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
