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
<tr><td><div id="tag15922" onclick="CopyToClipboard('tag15922');return false;" class="tag-decoration">nightly</div><div id="tag27659" onclick="CopyToClipboard('tag27659');return false;" class="tag-decoration">nightly-518b715</div><div id="tag10518" onclick="CopyToClipboard('tag10518');return false;" class="tag-decoration">nightly-3.1.3.4987</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/518b715b8bcafe549ddfcb37dd42cd3aa1c46e87" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/30373365188" target="_blank">2026-07-28 15:26:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag743" onclick="CopyToClipboard('tag743');return false;" class="tag-decoration">release</div><div id="tag18885" onclick="CopyToClipboard('tag18885');return false;" class="tag-decoration">release-6ea9c6e</div><div id="tag31646" onclick="CopyToClipboard('tag31646');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/6ea9c6e7b40e9cf43c96d4f7784c96c95be6e9eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/30373363475" target="_blank">2026-07-28 15:26:12</a></td></tr>
<tr><td><div id="tag3954" onclick="CopyToClipboard('tag3954');return false;" class="tag-decoration">testing</div><div id="tag5878" onclick="CopyToClipboard('tag5878');return false;" class="tag-decoration">testing-efbd890</div><div id="tag3322" onclick="CopyToClipboard('tag3322');return false;" class="tag-decoration">testing-3.1.3.4975</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/efbd890479c270bf3c4cf3516c676f6bdb7b36ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/30373372410" target="_blank">2026-07-28 15:26:18</a></td></tr>
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
