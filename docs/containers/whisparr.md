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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20012" onclick="CopyToClipboard('tag20012');return false;" class="tag-decoration">v2</div><div id="tag6533" onclick="CopyToClipboard('tag6533');return false;" class="tag-decoration">v2-b17234c</div><div id="tag7335" onclick="CopyToClipboard('tag7335');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag16181" onclick="CopyToClipboard('tag16181');return false;" class="tag-decoration">v2-v2</div><div id="tag1635" onclick="CopyToClipboard('tag1635');return false;" class="tag-decoration">v2-v2.2</div><div id="tag26666" onclick="CopyToClipboard('tag26666');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag1272" onclick="CopyToClipboard('tag1272');return false;" class="tag-decoration">v2-develop</div><div id="tag21294" onclick="CopyToClipboard('tag21294');return false;" class="tag-decoration">v2-develop-17c4b95</div><div id="tag22897" onclick="CopyToClipboard('tag22897');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag29475" onclick="CopyToClipboard('tag29475');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag21239" onclick="CopyToClipboard('tag21239');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17980" onclick="CopyToClipboard('tag17980');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/17c4b956b22fac6e304c14d97d5b95a431f0c0e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960755350" target="_blank">2026-09-24 05:37:15</a></td></tr>
<tr><td><div id="tag25929" onclick="CopyToClipboard('tag25929');return false;" class="tag-decoration">v3</div><div id="tag4579" onclick="CopyToClipboard('tag4579');return false;" class="tag-decoration">v3-0a2e672</div><div id="tag23924" onclick="CopyToClipboard('tag23924');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag16332" onclick="CopyToClipboard('tag16332');return false;" class="tag-decoration">v3-v3</div><div id="tag19554" onclick="CopyToClipboard('tag19554');return false;" class="tag-decoration">v3-v3.6</div><div id="tag29976" onclick="CopyToClipboard('tag29976');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0a2e6724dec3845704c770f093144f4c49325571" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960752074" target="_blank">2026-09-24 05:37:11</a></td></tr>
<tr><td><div id="tag16225" onclick="CopyToClipboard('tag16225');return false;" class="tag-decoration">v3-develop</div><div id="tag27572" onclick="CopyToClipboard('tag27572');return false;" class="tag-decoration">v3-develop-a35150e</div><div id="tag11850" onclick="CopyToClipboard('tag11850');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1745</div><div id="tag26127" onclick="CopyToClipboard('tag26127');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag2476" onclick="CopyToClipboard('tag2476');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag25110" onclick="CopyToClipboard('tag25110');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a35150ec134ed50761edd978178098a6b975b9d1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36273771081" target="_blank">2026-09-26 21:40:55</a></td></tr>
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
