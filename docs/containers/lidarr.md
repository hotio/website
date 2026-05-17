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
<tr><td><div id="tag21168" onclick="CopyToClipboard('tag21168');return false;" class="tag-decoration">nightly</div><div id="tag2160" onclick="CopyToClipboard('tag2160');return false;" class="tag-decoration">nightly-804c007</div><div id="tag26167" onclick="CopyToClipboard('tag26167');return false;" class="tag-decoration">nightly-3.1.2.4939</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/804c007a8b7ba17a0fbc79b7138a9d1571b17c24" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25987634860" target="_blank">2026-05-17 09:54:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20032" onclick="CopyToClipboard('tag20032');return false;" class="tag-decoration">release</div><div id="tag26367" onclick="CopyToClipboard('tag26367');return false;" class="tag-decoration">release-634da4a</div><div id="tag8361" onclick="CopyToClipboard('tag8361');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/634da4ad3239b6c38812a84d2a045682e88fe05a" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25987635284" target="_blank">2026-05-17 09:54:12</a></td></tr>
<tr><td><div id="tag11514" onclick="CopyToClipboard('tag11514');return false;" class="tag-decoration">testing</div><div id="tag14829" onclick="CopyToClipboard('tag14829');return false;" class="tag-decoration">testing-7497982</div><div id="tag30953" onclick="CopyToClipboard('tag30953');return false;" class="tag-decoration">testing-3.1.2.4938</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/749798207553566cf67c1bd84930ac33c08c8390" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25987635900" target="_blank">2026-05-17 09:54:14</a></td></tr>
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
