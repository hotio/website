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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3679" onclick="CopyToClipboard('tag3679');return false;" class="tag-decoration">v2</div><div id="tag19460" onclick="CopyToClipboard('tag19460');return false;" class="tag-decoration">v2-63e7882</div><div id="tag6064" onclick="CopyToClipboard('tag6064');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7672" onclick="CopyToClipboard('tag7672');return false;" class="tag-decoration">v2-v2</div><div id="tag24791" onclick="CopyToClipboard('tag24791');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32236" onclick="CopyToClipboard('tag32236');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/63e78821aa43dd5e648edc9335d6ca0684243dff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114583596" target="_blank">2026-11-05 21:39:11</a></td></tr>
<tr><td><div id="tag30387" onclick="CopyToClipboard('tag30387');return false;" class="tag-decoration">v2-develop</div><div id="tag16572" onclick="CopyToClipboard('tag16572');return false;" class="tag-decoration">v2-develop-417c370</div><div id="tag21117" onclick="CopyToClipboard('tag21117');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag16824" onclick="CopyToClipboard('tag16824');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag31949" onclick="CopyToClipboard('tag31949');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15870" onclick="CopyToClipboard('tag15870');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/417c37059b745c3376e20feefd819494aee4acc8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114578605" target="_blank">2026-11-05 21:39:09</a></td></tr>
<tr><td><div id="tag1875" onclick="CopyToClipboard('tag1875');return false;" class="tag-decoration">v3</div><div id="tag25693" onclick="CopyToClipboard('tag25693');return false;" class="tag-decoration">v3-206249f</div><div id="tag27091" onclick="CopyToClipboard('tag27091');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag24814" onclick="CopyToClipboard('tag24814');return false;" class="tag-decoration">v3-v3</div><div id="tag15487" onclick="CopyToClipboard('tag15487');return false;" class="tag-decoration">v3-v3.6</div><div id="tag18588" onclick="CopyToClipboard('tag18588');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/206249f5c5ee02c72b2ebc2cf78d5c56d4d6152e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059423143" target="_blank">2026-11-05 15:52:40</a></td></tr>
<tr><td><div id="tag17910" onclick="CopyToClipboard('tag17910');return false;" class="tag-decoration">v3-develop</div><div id="tag18488" onclick="CopyToClipboard('tag18488');return false;" class="tag-decoration">v3-develop-3eaacb6</div><div id="tag31299" onclick="CopyToClipboard('tag31299');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag17247" onclick="CopyToClipboard('tag17247');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag16821" onclick="CopyToClipboard('tag16821');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag4166" onclick="CopyToClipboard('tag4166');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3eaacb6a0c480bcada289dd5e4daaf6d9095048e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059447392" target="_blank">2026-11-05 15:52:48</a></td></tr>
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
