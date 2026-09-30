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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17089" onclick="CopyToClipboard('tag17089');return false;" class="tag-decoration">v2</div><div id="tag5064" onclick="CopyToClipboard('tag5064');return false;" class="tag-decoration">v2-b17234c</div><div id="tag25227" onclick="CopyToClipboard('tag25227');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag20826" onclick="CopyToClipboard('tag20826');return false;" class="tag-decoration">v2-v2</div><div id="tag10815" onclick="CopyToClipboard('tag10815');return false;" class="tag-decoration">v2-v2.2</div><div id="tag12267" onclick="CopyToClipboard('tag12267');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag4995" onclick="CopyToClipboard('tag4995');return false;" class="tag-decoration">v2-develop</div><div id="tag28550" onclick="CopyToClipboard('tag28550');return false;" class="tag-decoration">v2-develop-16fd73a</div><div id="tag2711" onclick="CopyToClipboard('tag2711');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag12336" onclick="CopyToClipboard('tag12336');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12167" onclick="CopyToClipboard('tag12167');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag5475" onclick="CopyToClipboard('tag5475');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/16fd73aa2cfe8f883938062debfb21c17af570d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767602397" target="_blank">2026-09-30 19:43:01</a></td></tr>
<tr><td><div id="tag4959" onclick="CopyToClipboard('tag4959');return false;" class="tag-decoration">v3</div><div id="tag10842" onclick="CopyToClipboard('tag10842');return false;" class="tag-decoration">v3-1d21d81</div><div id="tag25865" onclick="CopyToClipboard('tag25865');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag28382" onclick="CopyToClipboard('tag28382');return false;" class="tag-decoration">v3-v3</div><div id="tag6138" onclick="CopyToClipboard('tag6138');return false;" class="tag-decoration">v3-v3.6</div><div id="tag10808" onclick="CopyToClipboard('tag10808');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/1d21d8160a7277e7b799544e1fef8a6abfecfd28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767605536" target="_blank">2026-09-30 19:43:03</a></td></tr>
<tr><td><div id="tag154" onclick="CopyToClipboard('tag154');return false;" class="tag-decoration">v3-develop</div><div id="tag13324" onclick="CopyToClipboard('tag13324');return false;" class="tag-decoration">v3-develop-b02c688</div><div id="tag7255" onclick="CopyToClipboard('tag7255');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag27846" onclick="CopyToClipboard('tag27846');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag23082" onclick="CopyToClipboard('tag23082');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag18610" onclick="CopyToClipboard('tag18610');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b02c6884487a4c488cd0a0536272959fc882a967" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36384630491" target="_blank">2026-09-28 06:03:51</a></td></tr>
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
