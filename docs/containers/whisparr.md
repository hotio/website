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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13499" onclick="CopyToClipboard('tag13499');return false;" class="tag-decoration">v2</div><div id="tag26969" onclick="CopyToClipboard('tag26969');return false;" class="tag-decoration">v2-06f5ad2</div><div id="tag14055" onclick="CopyToClipboard('tag14055');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag12635" onclick="CopyToClipboard('tag12635');return false;" class="tag-decoration">v2-v2</div><div id="tag26173" onclick="CopyToClipboard('tag26173');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10152" onclick="CopyToClipboard('tag10152');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/06f5ad26a83ad9c108c84fbf0471bafb8565ce08" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507612909" target="_blank">2026-10-27 12:55:15</a></td></tr>
<tr><td><div id="tag5654" onclick="CopyToClipboard('tag5654');return false;" class="tag-decoration">v2-develop</div><div id="tag11835" onclick="CopyToClipboard('tag11835');return false;" class="tag-decoration">v2-develop-6fec5d3</div><div id="tag32682" onclick="CopyToClipboard('tag32682');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag2618" onclick="CopyToClipboard('tag2618');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag1885" onclick="CopyToClipboard('tag1885');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag6657" onclick="CopyToClipboard('tag6657');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6fec5d389a8513e41448989d2316fbe100736675" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229561180" target="_blank">2026-10-25 20:11:01</a></td></tr>
<tr><td><div id="tag13962" onclick="CopyToClipboard('tag13962');return false;" class="tag-decoration">v3</div><div id="tag11022" onclick="CopyToClipboard('tag11022');return false;" class="tag-decoration">v3-442ad67</div><div id="tag26599" onclick="CopyToClipboard('tag26599');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag28908" onclick="CopyToClipboard('tag28908');return false;" class="tag-decoration">v3-v3</div><div id="tag10915" onclick="CopyToClipboard('tag10915');return false;" class="tag-decoration">v3-v3.6</div><div id="tag1372" onclick="CopyToClipboard('tag1372');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/442ad67ffbb7c57cf22609adf248489cb81855bf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507610640" target="_blank">2026-10-27 12:55:14</a></td></tr>
<tr><td><div id="tag6088" onclick="CopyToClipboard('tag6088');return false;" class="tag-decoration">v3-develop</div><div id="tag30617" onclick="CopyToClipboard('tag30617');return false;" class="tag-decoration">v3-develop-6be2f44</div><div id="tag10316" onclick="CopyToClipboard('tag10316');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag23443" onclick="CopyToClipboard('tag23443');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag23266" onclick="CopyToClipboard('tag23266');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag30369" onclick="CopyToClipboard('tag30369');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6be2f4483b5d24df48894ac5a0eed2c79e734913" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229565433" target="_blank">2026-10-25 20:11:04</a></td></tr>
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
