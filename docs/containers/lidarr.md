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
<tr><td><div id="tag1222" onclick="CopyToClipboard('tag1222');return false;" class="tag-decoration">nightly</div><div id="tag29323" onclick="CopyToClipboard('tag29323');return false;" class="tag-decoration">nightly-ea3cd1f</div><div id="tag23415" onclick="CopyToClipboard('tag23415');return false;" class="tag-decoration">nightly-3.1.5.5066</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/ea3cd1fc6a05e33b3ccb3c9c475dd643416bc543" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33920600212" target="_blank">2026-09-04 21:19:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27315" onclick="CopyToClipboard('tag27315');return false;" class="tag-decoration">release</div><div id="tag31157" onclick="CopyToClipboard('tag31157');return false;" class="tag-decoration">release-571dea4</div><div id="tag30175" onclick="CopyToClipboard('tag30175');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/571dea481f32deb2fa125f598b90fca13852ac6b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33920593973" target="_blank">2026-09-04 21:19:53</a></td></tr>
<tr><td><div id="tag11857" onclick="CopyToClipboard('tag11857');return false;" class="tag-decoration">testing</div><div id="tag897" onclick="CopyToClipboard('tag897');return false;" class="tag-decoration">testing-42c6714</div><div id="tag18275" onclick="CopyToClipboard('tag18275');return false;" class="tag-decoration">testing-3.1.5.5066</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/42c6714505428cbaa306f898bd0509e1b7c89b31" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/34036345305" target="_blank">2026-09-06 13:31:17</a></td></tr>
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
