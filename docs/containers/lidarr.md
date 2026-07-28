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
<tr><td><div id="tag32023" onclick="CopyToClipboard('tag32023');return false;" class="tag-decoration">nightly</div><div id="tag18275" onclick="CopyToClipboard('tag18275');return false;" class="tag-decoration">nightly-758abb4</div><div id="tag24355" onclick="CopyToClipboard('tag24355');return false;" class="tag-decoration">nightly-3.1.3.4987</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/758abb489e46b2775de0eb11be547d95d0b3f566" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/30099169420" target="_blank">2026-07-24 14:00:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7988" onclick="CopyToClipboard('tag7988');return false;" class="tag-decoration">release</div><div id="tag10277" onclick="CopyToClipboard('tag10277');return false;" class="tag-decoration">release-6ea9c6e</div><div id="tag12402" onclick="CopyToClipboard('tag12402');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/6ea9c6e7b40e9cf43c96d4f7784c96c95be6e9eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/30373363475" target="_blank">2026-07-28 15:26:12</a></td></tr>
<tr><td><div id="tag3394" onclick="CopyToClipboard('tag3394');return false;" class="tag-decoration">testing</div><div id="tag23554" onclick="CopyToClipboard('tag23554');return false;" class="tag-decoration">testing-efbd890</div><div id="tag22142" onclick="CopyToClipboard('tag22142');return false;" class="tag-decoration">testing-3.1.3.4975</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/efbd890479c270bf3c4cf3516c676f6bdb7b36ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/30373372410" target="_blank">2026-07-28 15:26:18</a></td></tr>
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
