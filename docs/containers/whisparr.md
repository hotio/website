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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12025" onclick="CopyToClipboard('tag12025');return false;" class="tag-decoration">v2</div><div id="tag2584" onclick="CopyToClipboard('tag2584');return false;" class="tag-decoration">v2-06f5ad2</div><div id="tag16230" onclick="CopyToClipboard('tag16230');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag11960" onclick="CopyToClipboard('tag11960');return false;" class="tag-decoration">v2-v2</div><div id="tag4991" onclick="CopyToClipboard('tag4991');return false;" class="tag-decoration">v2-v2.2</div><div id="tag2001" onclick="CopyToClipboard('tag2001');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/06f5ad26a83ad9c108c84fbf0471bafb8565ce08" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507612909" target="_blank">2026-10-27 12:55:15</a></td></tr>
<tr><td><div id="tag16083" onclick="CopyToClipboard('tag16083');return false;" class="tag-decoration">v2-develop</div><div id="tag22285" onclick="CopyToClipboard('tag22285');return false;" class="tag-decoration">v2-develop-6fec5d3</div><div id="tag7637" onclick="CopyToClipboard('tag7637');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag12548" onclick="CopyToClipboard('tag12548');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag13683" onclick="CopyToClipboard('tag13683');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag29617" onclick="CopyToClipboard('tag29617');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6fec5d389a8513e41448989d2316fbe100736675" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229561180" target="_blank">2026-10-25 20:11:01</a></td></tr>
<tr><td><div id="tag4547" onclick="CopyToClipboard('tag4547');return false;" class="tag-decoration">v3</div><div id="tag9931" onclick="CopyToClipboard('tag9931');return false;" class="tag-decoration">v3-442ad67</div><div id="tag19609" onclick="CopyToClipboard('tag19609');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag14221" onclick="CopyToClipboard('tag14221');return false;" class="tag-decoration">v3-v3</div><div id="tag4581" onclick="CopyToClipboard('tag4581');return false;" class="tag-decoration">v3-v3.6</div><div id="tag5498" onclick="CopyToClipboard('tag5498');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/442ad67ffbb7c57cf22609adf248489cb81855bf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507610640" target="_blank">2026-10-27 12:55:14</a></td></tr>
<tr><td><div id="tag28142" onclick="CopyToClipboard('tag28142');return false;" class="tag-decoration">v3-develop</div><div id="tag865" onclick="CopyToClipboard('tag865');return false;" class="tag-decoration">v3-develop-3f2ac30</div><div id="tag10512" onclick="CopyToClipboard('tag10512');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag14772" onclick="CopyToClipboard('tag14772');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag18352" onclick="CopyToClipboard('tag18352');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag5310" onclick="CopyToClipboard('tag5310');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3f2ac305a9b1a656f0c4762519d3b0bc1af31617" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507610455" target="_blank">2026-10-27 12:55:14</a></td></tr>
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
