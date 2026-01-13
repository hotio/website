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
<tr><td><div id="tag29939" onclick="CopyToClipboard('tag29939');return false;" class="tag-decoration">nightly</div><div id="tag8522" onclick="CopyToClipboard('tag8522');return false;" class="tag-decoration">nightly-73cb3a7</div><div id="tag4924" onclick="CopyToClipboard('tag4924');return false;" class="tag-decoration">nightly-3.1.2.4902</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/73cb3a7e96885e881755374b020c2d62e654a4c1" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20949703577" target="_blank">2026-01-13 08:22:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5568" onclick="CopyToClipboard('tag5568');return false;" class="tag-decoration">release</div><div id="tag26594" onclick="CopyToClipboard('tag26594');return false;" class="tag-decoration">release-2c123b5</div><div id="tag28818" onclick="CopyToClipboard('tag28818');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/2c123b5fb8b22e3bb1fe65cf45fd120383ec91be" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20949705027" target="_blank">2026-01-13 08:22:04</a></td></tr>
<tr><td><div id="tag30637" onclick="CopyToClipboard('tag30637');return false;" class="tag-decoration">testing</div><div id="tag11228" onclick="CopyToClipboard('tag11228');return false;" class="tag-decoration">testing-25f7e5f</div><div id="tag2631" onclick="CopyToClipboard('tag2631');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/25f7e5f65091a53240d32b7f06c6a4dace090a3c" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20949705791" target="_blank">2026-01-13 08:22:06</a></td></tr>
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
