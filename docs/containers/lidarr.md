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
<tr><td><div id="tag22719" onclick="CopyToClipboard('tag22719');return false;" class="tag-decoration">nightly</div><div id="tag20108" onclick="CopyToClipboard('tag20108');return false;" class="tag-decoration">nightly-05ddeee</div><div id="tag30100" onclick="CopyToClipboard('tag30100');return false;" class="tag-decoration">nightly-3.1.2.4902</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/05ddeee26cf4555748efe86986c7edab5de49f29" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21113695052" target="_blank">2026-01-18 14:56:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3541" onclick="CopyToClipboard('tag3541');return false;" class="tag-decoration">release</div><div id="tag10014" onclick="CopyToClipboard('tag10014');return false;" class="tag-decoration">release-d996573</div><div id="tag11375" onclick="CopyToClipboard('tag11375');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/d996573c7d3ae827b871affa76cab0d661a2023c" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21090391203" target="_blank">2026-01-17 07:01:18</a></td></tr>
<tr><td><div id="tag11186" onclick="CopyToClipboard('tag11186');return false;" class="tag-decoration">testing</div><div id="tag14881" onclick="CopyToClipboard('tag14881');return false;" class="tag-decoration">testing-727eb0f</div><div id="tag29672" onclick="CopyToClipboard('tag29672');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/727eb0fbe33ddabd27796700afca205dbc7115a8" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21090391424" target="_blank">2026-01-17 07:01:19</a></td></tr>
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
