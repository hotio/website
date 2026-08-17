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
<tr><td><div id="tag13243" onclick="CopyToClipboard('tag13243');return false;" class="tag-decoration">nightly</div><div id="tag29991" onclick="CopyToClipboard('tag29991');return false;" class="tag-decoration">nightly-2d1162e</div><div id="tag26268" onclick="CopyToClipboard('tag26268');return false;" class="tag-decoration">nightly-3.1.3.5020</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/2d1162ee1546ea5aae7c1eede4a7b180d5242e53" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/31874894425" target="_blank">2026-08-15 08:36:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12118" onclick="CopyToClipboard('tag12118');return false;" class="tag-decoration">release</div><div id="tag3684" onclick="CopyToClipboard('tag3684');return false;" class="tag-decoration">release-d0dfe70</div><div id="tag17129" onclick="CopyToClipboard('tag17129');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/d0dfe7037e5c41f2cfb49d7560d62b34b8677895" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32046242289" target="_blank">2026-08-17 16:34:40</a></td></tr>
<tr><td><div id="tag21072" onclick="CopyToClipboard('tag21072');return false;" class="tag-decoration">testing</div><div id="tag19529" onclick="CopyToClipboard('tag19529');return false;" class="tag-decoration">testing-715a117</div><div id="tag2337" onclick="CopyToClipboard('tag2337');return false;" class="tag-decoration">testing-3.1.3.4987</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/715a117f07975ce1b57bfe62f748533d988cc26a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/31874894082" target="_blank">2026-08-15 08:36:20</a></td></tr>
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
