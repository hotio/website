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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6647" onclick="CopyToClipboard('tag6647');return false;" class="tag-decoration">v2</div><div id="tag2075" onclick="CopyToClipboard('tag2075');return false;" class="tag-decoration">v2-3b89e2e</div><div id="tag17619" onclick="CopyToClipboard('tag17619');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17820" onclick="CopyToClipboard('tag17820');return false;" class="tag-decoration">v2-v2</div><div id="tag9952" onclick="CopyToClipboard('tag9952');return false;" class="tag-decoration">v2-v2.2</div><div id="tag27203" onclick="CopyToClipboard('tag27203');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3b89e2e9a15c44c5415047148770ea51241447ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599372066" target="_blank">2026-09-02 06:33:24</a></td></tr>
<tr><td><div id="tag21893" onclick="CopyToClipboard('tag21893');return false;" class="tag-decoration">v2-develop</div><div id="tag23328" onclick="CopyToClipboard('tag23328');return false;" class="tag-decoration">v2-develop-1c0e956</div><div id="tag18944" onclick="CopyToClipboard('tag18944');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag1998" onclick="CopyToClipboard('tag1998');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14154" onclick="CopyToClipboard('tag14154');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag30594" onclick="CopyToClipboard('tag30594');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1c0e9564c09c7d78cfa5ce72ca00f60cd5afa701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599363470" target="_blank">2026-09-02 06:33:17</a></td></tr>
<tr><td><div id="tag4381" onclick="CopyToClipboard('tag4381');return false;" class="tag-decoration">v3</div><div id="tag19134" onclick="CopyToClipboard('tag19134');return false;" class="tag-decoration">v3-7f610bc</div><div id="tag16470" onclick="CopyToClipboard('tag16470');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag7077" onclick="CopyToClipboard('tag7077');return false;" class="tag-decoration">v3-v3</div><div id="tag1628" onclick="CopyToClipboard('tag1628');return false;" class="tag-decoration">v3-v3.4</div><div id="tag18234" onclick="CopyToClipboard('tag18234');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7f610bcd319101e2d80ae6fc96d350998e687ff0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599360065" target="_blank">2026-09-02 06:33:15</a></td></tr>
<tr><td><div id="tag135" onclick="CopyToClipboard('tag135');return false;" class="tag-decoration">v3-develop</div><div id="tag7059" onclick="CopyToClipboard('tag7059');return false;" class="tag-decoration">v3-develop-9c49e13</div><div id="tag12008" onclick="CopyToClipboard('tag12008');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1522</div><div id="tag18955" onclick="CopyToClipboard('tag18955');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25317" onclick="CopyToClipboard('tag25317');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag25099" onclick="CopyToClipboard('tag25099');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9c49e13534045835bf4c642b00791bb961bad191" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33808574955" target="_blank">2026-09-03 21:33:19</a></td></tr>
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
