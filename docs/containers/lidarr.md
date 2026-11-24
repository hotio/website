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
<tr><td><div id="tag20394" onclick="CopyToClipboard('tag20394');return false;" class="tag-decoration">nightly</div><div id="tag22121" onclick="CopyToClipboard('tag22121');return false;" class="tag-decoration">nightly-6a38585</div><div id="tag24577" onclick="CopyToClipboard('tag24577');return false;" class="tag-decoration">nightly-4.0.0.5236</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/6a385850664d782562d2dbf8ea1aa24b3bbf1731" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45336176127" target="_blank">2026-11-24 05:50:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15581" onclick="CopyToClipboard('tag15581');return false;" class="tag-decoration">release</div><div id="tag25447" onclick="CopyToClipboard('tag25447');return false;" class="tag-decoration">release-e07b8a4</div><div id="tag23235" onclick="CopyToClipboard('tag23235');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/e07b8a4c0a4157c20a56c86feee5111ba6cf608f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/44011493361" target="_blank">2026-11-17 03:37:14</a></td></tr>
<tr><td><div id="tag15544" onclick="CopyToClipboard('tag15544');return false;" class="tag-decoration">testing</div><div id="tag11843" onclick="CopyToClipboard('tag11843');return false;" class="tag-decoration">testing-36a2c1e</div><div id="tag4891" onclick="CopyToClipboard('tag4891');return false;" class="tag-decoration">testing-3.2.1.5196</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/36a2c1e1eeadc8c47cb1f5758665ec451100feb1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45336183113" target="_blank">2026-11-24 05:51:02</a></td></tr>
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
