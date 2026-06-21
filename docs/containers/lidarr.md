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
<tr><td><div id="tag28148" onclick="CopyToClipboard('tag28148');return false;" class="tag-decoration">nightly</div><div id="tag23576" onclick="CopyToClipboard('tag23576');return false;" class="tag-decoration">nightly-f4e6518</div><div id="tag5298" onclick="CopyToClipboard('tag5298');return false;" class="tag-decoration">nightly-3.1.3.4970</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/f4e65181fa971ba84b83b6b827bb02fc03ae88f6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/27915671629" target="_blank">2026-06-21 19:54:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3096" onclick="CopyToClipboard('tag3096');return false;" class="tag-decoration">release</div><div id="tag12540" onclick="CopyToClipboard('tag12540');return false;" class="tag-decoration">release-66aa6b5</div><div id="tag14041" onclick="CopyToClipboard('tag14041');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/66aa6b5587ef60b35711fd56c75611b9236d0c6d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/27873847556" target="_blank">2026-06-20 14:20:18</a></td></tr>
<tr><td><div id="tag17040" onclick="CopyToClipboard('tag17040');return false;" class="tag-decoration">testing</div><div id="tag5691" onclick="CopyToClipboard('tag5691');return false;" class="tag-decoration">testing-1c844b4</div><div id="tag28697" onclick="CopyToClipboard('tag28697');return false;" class="tag-decoration">testing-3.1.3.4968</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/1c844b47d587802d1c012359f22befac4dac9c7b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/27915670591" target="_blank">2026-06-21 19:54:07</a></td></tr>
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
