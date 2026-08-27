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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13988" onclick="CopyToClipboard('tag13988');return false;" class="tag-decoration">v2</div><div id="tag7548" onclick="CopyToClipboard('tag7548');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag25149" onclick="CopyToClipboard('tag25149');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag32142" onclick="CopyToClipboard('tag32142');return false;" class="tag-decoration">v2-v2</div><div id="tag24582" onclick="CopyToClipboard('tag24582');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30608" onclick="CopyToClipboard('tag30608');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag13437" onclick="CopyToClipboard('tag13437');return false;" class="tag-decoration">v2-develop</div><div id="tag1671" onclick="CopyToClipboard('tag1671');return false;" class="tag-decoration">v2-develop-4c05b54</div><div id="tag4251" onclick="CopyToClipboard('tag4251');return false;" class="tag-decoration">v2-develop-2.2.0-develop.219</div><div id="tag1865" onclick="CopyToClipboard('tag1865');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag18119" onclick="CopyToClipboard('tag18119');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26899" onclick="CopyToClipboard('tag26899');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4c05b5464f35934b32154ad1f9e7500954c89119" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33015261004" target="_blank">2026-08-26 21:25:03</a></td></tr>
<tr><td><div id="tag18350" onclick="CopyToClipboard('tag18350');return false;" class="tag-decoration">v3</div><div id="tag27580" onclick="CopyToClipboard('tag27580');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag331" onclick="CopyToClipboard('tag331');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag5708" onclick="CopyToClipboard('tag5708');return false;" class="tag-decoration">v3-v3</div><div id="tag8116" onclick="CopyToClipboard('tag8116');return false;" class="tag-decoration">v3-v3.3</div><div id="tag17521" onclick="CopyToClipboard('tag17521');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag23364" onclick="CopyToClipboard('tag23364');return false;" class="tag-decoration">v3-develop</div><div id="tag21969" onclick="CopyToClipboard('tag21969');return false;" class="tag-decoration">v3-develop-889e6e3</div><div id="tag11885" onclick="CopyToClipboard('tag11885');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1290</div><div id="tag21157" onclick="CopyToClipboard('tag21157');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5382" onclick="CopyToClipboard('tag5382');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag22844" onclick="CopyToClipboard('tag22844');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/889e6e3be95d828df5a540ceec2d5814a370034f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33001478094" target="_blank">2026-08-26 18:45:42</a></td></tr>
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
