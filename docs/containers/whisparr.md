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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13781" onclick="CopyToClipboard('tag13781');return false;" class="tag-decoration">v2</div><div id="tag1333" onclick="CopyToClipboard('tag1333');return false;" class="tag-decoration">v2-632fb9e</div><div id="tag27134" onclick="CopyToClipboard('tag27134');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag26002" onclick="CopyToClipboard('tag26002');return false;" class="tag-decoration">v2-v2</div><div id="tag5480" onclick="CopyToClipboard('tag5480');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10161" onclick="CopyToClipboard('tag10161');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/632fb9ea6b0ab4d2b56c6eda018d51ac5d16db60" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568972" target="_blank">2026-07-08 21:57:03</a></td></tr>
<tr><td><div id="tag23304" onclick="CopyToClipboard('tag23304');return false;" class="tag-decoration">v2-develop</div><div id="tag1653" onclick="CopyToClipboard('tag1653');return false;" class="tag-decoration">v2-develop-36edde9</div><div id="tag32080" onclick="CopyToClipboard('tag32080');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag17130" onclick="CopyToClipboard('tag17130');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag17711" onclick="CopyToClipboard('tag17711');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag2658" onclick="CopyToClipboard('tag2658');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/36edde9b89623edf5f47e4c37f59720ab38f14c1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29180897608" target="_blank">2026-07-12 05:15:05</a></td></tr>
<tr><td><div id="tag12897" onclick="CopyToClipboard('tag12897');return false;" class="tag-decoration">v3</div><div id="tag1477" onclick="CopyToClipboard('tag1477');return false;" class="tag-decoration">v3-07d0e40</div><div id="tag4598" onclick="CopyToClipboard('tag4598');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag13389" onclick="CopyToClipboard('tag13389');return false;" class="tag-decoration">v3-v3</div><div id="tag9095" onclick="CopyToClipboard('tag9095');return false;" class="tag-decoration">v3-v3.3</div><div id="tag27252" onclick="CopyToClipboard('tag27252');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/07d0e406b8d766712ff279abfce49d64aee8b6e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568950" target="_blank">2026-07-08 21:57:02</a></td></tr>
<tr><td><div id="tag21547" onclick="CopyToClipboard('tag21547');return false;" class="tag-decoration">v3-develop</div><div id="tag29499" onclick="CopyToClipboard('tag29499');return false;" class="tag-decoration">v3-develop-88991cb</div><div id="tag30647" onclick="CopyToClipboard('tag30647');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag21997" onclick="CopyToClipboard('tag21997');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag1147" onclick="CopyToClipboard('tag1147');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag6062" onclick="CopyToClipboard('tag6062');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/88991cb592d11d8bc82d6c108da13296a462fc43" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568265" target="_blank">2026-07-08 21:57:02</a></td></tr>
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
