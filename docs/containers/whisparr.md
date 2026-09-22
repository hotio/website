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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13787" onclick="CopyToClipboard('tag13787');return false;" class="tag-decoration">v2</div><div id="tag23876" onclick="CopyToClipboard('tag23876');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag10793" onclick="CopyToClipboard('tag10793');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag30939" onclick="CopyToClipboard('tag30939');return false;" class="tag-decoration">v2-v2</div><div id="tag18443" onclick="CopyToClipboard('tag18443');return false;" class="tag-decoration">v2-v2.2</div><div id="tag18870" onclick="CopyToClipboard('tag18870');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag17707" onclick="CopyToClipboard('tag17707');return false;" class="tag-decoration">v2-develop</div><div id="tag25129" onclick="CopyToClipboard('tag25129');return false;" class="tag-decoration">v2-develop-3e1a116</div><div id="tag18821" onclick="CopyToClipboard('tag18821');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag516" onclick="CopyToClipboard('tag516');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag7605" onclick="CopyToClipboard('tag7605');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag9906" onclick="CopyToClipboard('tag9906');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e1a116cef3b0a89ab1a64ddc1757f8f5a1039ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35471710899" target="_blank">2026-09-19 21:52:39</a></td></tr>
<tr><td><div id="tag28715" onclick="CopyToClipboard('tag28715');return false;" class="tag-decoration">v3</div><div id="tag2958" onclick="CopyToClipboard('tag2958');return false;" class="tag-decoration">v3-e36c32c</div><div id="tag6543" onclick="CopyToClipboard('tag6543');return false;" class="tag-decoration">v3-3.6.1-release.1708</div><div id="tag22365" onclick="CopyToClipboard('tag22365');return false;" class="tag-decoration">v3-v3</div><div id="tag9000" onclick="CopyToClipboard('tag9000');return false;" class="tag-decoration">v3-v3.6</div><div id="tag16950" onclick="CopyToClipboard('tag16950');return false;" class="tag-decoration">v3-v3.6.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e36c32c5776e543477a023bde7c6a6f366fd35a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527361" target="_blank">2026-09-22 08:00:55</a></td></tr>
<tr><td><div id="tag30446" onclick="CopyToClipboard('tag30446');return false;" class="tag-decoration">v3-develop</div><div id="tag30813" onclick="CopyToClipboard('tag30813');return false;" class="tag-decoration">v3-develop-7154ca9</div><div id="tag9317" onclick="CopyToClipboard('tag9317');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1711</div><div id="tag9830" onclick="CopyToClipboard('tag9830');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag21086" onclick="CopyToClipboard('tag21086');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag5477" onclick="CopyToClipboard('tag5477');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7154ca9c2927d3ca8d3561ef2cb9220c3d7e9e2c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35577219759" target="_blank">2026-09-21 08:18:29</a></td></tr>
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
