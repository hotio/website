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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2485" onclick="CopyToClipboard('tag2485');return false;" class="tag-decoration">v2</div><div id="tag18077" onclick="CopyToClipboard('tag18077');return false;" class="tag-decoration">v2-b17234c</div><div id="tag25708" onclick="CopyToClipboard('tag25708');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag3341" onclick="CopyToClipboard('tag3341');return false;" class="tag-decoration">v2-v2</div><div id="tag28020" onclick="CopyToClipboard('tag28020');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10521" onclick="CopyToClipboard('tag10521');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag18615" onclick="CopyToClipboard('tag18615');return false;" class="tag-decoration">v2-develop</div><div id="tag28405" onclick="CopyToClipboard('tag28405');return false;" class="tag-decoration">v2-develop-16fd73a</div><div id="tag6998" onclick="CopyToClipboard('tag6998');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag20491" onclick="CopyToClipboard('tag20491');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag1949" onclick="CopyToClipboard('tag1949');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17572" onclick="CopyToClipboard('tag17572');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/16fd73aa2cfe8f883938062debfb21c17af570d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767602397" target="_blank">2026-09-30 19:43:01</a></td></tr>
<tr><td><div id="tag16943" onclick="CopyToClipboard('tag16943');return false;" class="tag-decoration">v3</div><div id="tag15184" onclick="CopyToClipboard('tag15184');return false;" class="tag-decoration">v3-0a2e672</div><div id="tag22897" onclick="CopyToClipboard('tag22897');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag19246" onclick="CopyToClipboard('tag19246');return false;" class="tag-decoration">v3-v3</div><div id="tag18312" onclick="CopyToClipboard('tag18312');return false;" class="tag-decoration">v3-v3.6</div><div id="tag155" onclick="CopyToClipboard('tag155');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0a2e6724dec3845704c770f093144f4c49325571" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960752074" target="_blank">2026-09-24 05:37:11</a></td></tr>
<tr><td><div id="tag17592" onclick="CopyToClipboard('tag17592');return false;" class="tag-decoration">v3-develop</div><div id="tag14320" onclick="CopyToClipboard('tag14320');return false;" class="tag-decoration">v3-develop-b02c688</div><div id="tag12498" onclick="CopyToClipboard('tag12498');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag9026" onclick="CopyToClipboard('tag9026');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12864" onclick="CopyToClipboard('tag12864');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag26133" onclick="CopyToClipboard('tag26133');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b02c6884487a4c488cd0a0536272959fc882a967" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36384630491" target="_blank">2026-09-28 06:03:51</a></td></tr>
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
