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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29953" onclick="CopyToClipboard('tag29953');return false;" class="tag-decoration">v2</div><div id="tag19180" onclick="CopyToClipboard('tag19180');return false;" class="tag-decoration">v2-06f5ad2</div><div id="tag3035" onclick="CopyToClipboard('tag3035');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag14527" onclick="CopyToClipboard('tag14527');return false;" class="tag-decoration">v2-v2</div><div id="tag2557" onclick="CopyToClipboard('tag2557');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13758" onclick="CopyToClipboard('tag13758');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/06f5ad26a83ad9c108c84fbf0471bafb8565ce08" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507612909" target="_blank">2026-10-27 12:55:15</a></td></tr>
<tr><td><div id="tag6857" onclick="CopyToClipboard('tag6857');return false;" class="tag-decoration">v2-develop</div><div id="tag26013" onclick="CopyToClipboard('tag26013');return false;" class="tag-decoration">v2-develop-c1b0ede</div><div id="tag15963" onclick="CopyToClipboard('tag15963');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag3240" onclick="CopyToClipboard('tag3240');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3931" onclick="CopyToClipboard('tag3931');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17922" onclick="CopyToClipboard('tag17922');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c1b0ede61d8d86b3268a3eb2b3241c932e98d664" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507611788" target="_blank">2026-10-27 12:55:14</a></td></tr>
<tr><td><div id="tag6363" onclick="CopyToClipboard('tag6363');return false;" class="tag-decoration">v3</div><div id="tag32725" onclick="CopyToClipboard('tag32725');return false;" class="tag-decoration">v3-442ad67</div><div id="tag13755" onclick="CopyToClipboard('tag13755');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag32331" onclick="CopyToClipboard('tag32331');return false;" class="tag-decoration">v3-v3</div><div id="tag15441" onclick="CopyToClipboard('tag15441');return false;" class="tag-decoration">v3-v3.6</div><div id="tag30897" onclick="CopyToClipboard('tag30897');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/442ad67ffbb7c57cf22609adf248489cb81855bf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507610640" target="_blank">2026-10-27 12:55:14</a></td></tr>
<tr><td><div id="tag1609" onclick="CopyToClipboard('tag1609');return false;" class="tag-decoration">v3-develop</div><div id="tag7664" onclick="CopyToClipboard('tag7664');return false;" class="tag-decoration">v3-develop-3f2ac30</div><div id="tag19714" onclick="CopyToClipboard('tag19714');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag5276" onclick="CopyToClipboard('tag5276');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag2415" onclick="CopyToClipboard('tag2415');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag20509" onclick="CopyToClipboard('tag20509');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3f2ac305a9b1a656f0c4762519d3b0bc1af31617" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507610455" target="_blank">2026-10-27 12:55:14</a></td></tr>
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
