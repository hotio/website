---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag18099" onclick="CopyToClipboard('tag18099');return false;" class="tag-decoration">nightly</div><div id="tag26890" onclick="CopyToClipboard('tag26890');return false;" class="tag-decoration">nightly-009a465</div><div id="tag22547" onclick="CopyToClipboard('tag22547');return false;" class="tag-decoration">nightly-3.1.5.5066</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/009a465d3f27dfe5699678cd0efb02fec5bc1284" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/34419410332" target="_blank">2026-09-10 00:00:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26581" onclick="CopyToClipboard('tag26581');return false;" class="tag-decoration">release</div><div id="tag25492" onclick="CopyToClipboard('tag25492');return false;" class="tag-decoration">release-6fcd6c7</div><div id="tag16685" onclick="CopyToClipboard('tag16685');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/6fcd6c718f5f72c97139aa209db72a03c03c92da" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/34419418535" target="_blank">2026-09-10 00:00:54</a></td></tr>
<tr><td><div id="tag16249" onclick="CopyToClipboard('tag16249');return false;" class="tag-decoration">testing</div><div id="tag6622" onclick="CopyToClipboard('tag6622');return false;" class="tag-decoration">testing-846c14f</div><div id="tag15930" onclick="CopyToClipboard('tag15930');return false;" class="tag-decoration">testing-3.1.5.5066</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/846c14f562da42fba5740c8d39ee81f86f28ba86" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/34419409778" target="_blank">2026-09-10 00:00:48</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
