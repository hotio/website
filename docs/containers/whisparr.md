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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13282" onclick="CopyToClipboard('tag13282');return false;" class="tag-decoration">v2</div><div id="tag588" onclick="CopyToClipboard('tag588');return false;" class="tag-decoration">v2-b17234c</div><div id="tag15763" onclick="CopyToClipboard('tag15763');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17933" onclick="CopyToClipboard('tag17933');return false;" class="tag-decoration">v2-v2</div><div id="tag27442" onclick="CopyToClipboard('tag27442');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13336" onclick="CopyToClipboard('tag13336');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag18377" onclick="CopyToClipboard('tag18377');return false;" class="tag-decoration">v2-develop</div><div id="tag30716" onclick="CopyToClipboard('tag30716');return false;" class="tag-decoration">v2-develop-17c4b95</div><div id="tag27187" onclick="CopyToClipboard('tag27187');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag31291" onclick="CopyToClipboard('tag31291');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29238" onclick="CopyToClipboard('tag29238');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag12134" onclick="CopyToClipboard('tag12134');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/17c4b956b22fac6e304c14d97d5b95a431f0c0e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960755350" target="_blank">2026-09-24 05:37:15</a></td></tr>
<tr><td><div id="tag1751" onclick="CopyToClipboard('tag1751');return false;" class="tag-decoration">v3</div><div id="tag7067" onclick="CopyToClipboard('tag7067');return false;" class="tag-decoration">v3-0a2e672</div><div id="tag11177" onclick="CopyToClipboard('tag11177');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag6143" onclick="CopyToClipboard('tag6143');return false;" class="tag-decoration">v3-v3</div><div id="tag6384" onclick="CopyToClipboard('tag6384');return false;" class="tag-decoration">v3-v3.6</div><div id="tag24274" onclick="CopyToClipboard('tag24274');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0a2e6724dec3845704c770f093144f4c49325571" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960752074" target="_blank">2026-09-24 05:37:11</a></td></tr>
<tr><td><div id="tag31175" onclick="CopyToClipboard('tag31175');return false;" class="tag-decoration">v3-develop</div><div id="tag6182" onclick="CopyToClipboard('tag6182');return false;" class="tag-decoration">v3-develop-bd61e06</div><div id="tag86" onclick="CopyToClipboard('tag86');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1740</div><div id="tag5691" onclick="CopyToClipboard('tag5691');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag7754" onclick="CopyToClipboard('tag7754');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag8836" onclick="CopyToClipboard('tag8836');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/bd61e06b2d25dcbf9652e5a525516ae9e9a02ce1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36069426363" target="_blank">2026-09-24 22:48:00</a></td></tr>
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
