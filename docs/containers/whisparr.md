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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31" onclick="CopyToClipboard('tag31');return false;" class="tag-decoration">v2</div><div id="tag19345" onclick="CopyToClipboard('tag19345');return false;" class="tag-decoration">v2-0c7568b</div><div id="tag13088" onclick="CopyToClipboard('tag13088');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag47" onclick="CopyToClipboard('tag47');return false;" class="tag-decoration">v2-v2</div><div id="tag5380" onclick="CopyToClipboard('tag5380');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21595" onclick="CopyToClipboard('tag21595');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0c7568ba6fd4d3584b9f419d4e6acc38b2487702" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059429907" target="_blank">2026-11-05 15:52:42</a></td></tr>
<tr><td><div id="tag24040" onclick="CopyToClipboard('tag24040');return false;" class="tag-decoration">v2-develop</div><div id="tag18397" onclick="CopyToClipboard('tag18397');return false;" class="tag-decoration">v2-develop-417c370</div><div id="tag5260" onclick="CopyToClipboard('tag5260');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag13736" onclick="CopyToClipboard('tag13736');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag28562" onclick="CopyToClipboard('tag28562');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag31816" onclick="CopyToClipboard('tag31816');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/417c37059b745c3376e20feefd819494aee4acc8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114578605" target="_blank">2026-11-05 21:39:09</a></td></tr>
<tr><td><div id="tag16328" onclick="CopyToClipboard('tag16328');return false;" class="tag-decoration">v3</div><div id="tag127" onclick="CopyToClipboard('tag127');return false;" class="tag-decoration">v3-206249f</div><div id="tag3863" onclick="CopyToClipboard('tag3863');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag8109" onclick="CopyToClipboard('tag8109');return false;" class="tag-decoration">v3-v3</div><div id="tag11152" onclick="CopyToClipboard('tag11152');return false;" class="tag-decoration">v3-v3.6</div><div id="tag9161" onclick="CopyToClipboard('tag9161');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/206249f5c5ee02c72b2ebc2cf78d5c56d4d6152e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059423143" target="_blank">2026-11-05 15:52:40</a></td></tr>
<tr><td><div id="tag23584" onclick="CopyToClipboard('tag23584');return false;" class="tag-decoration">v3-develop</div><div id="tag2900" onclick="CopyToClipboard('tag2900');return false;" class="tag-decoration">v3-develop-3eaacb6</div><div id="tag29124" onclick="CopyToClipboard('tag29124');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag18069" onclick="CopyToClipboard('tag18069');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8814" onclick="CopyToClipboard('tag8814');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag28691" onclick="CopyToClipboard('tag28691');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3eaacb6a0c480bcada289dd5e4daaf6d9095048e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059447392" target="_blank">2026-11-05 15:52:48</a></td></tr>
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
