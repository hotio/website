---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag9133" onclick="CopyToClipboard('tag9133');return false;" class="tag-decoration">nightly</div><div id="tag17571" onclick="CopyToClipboard('tag17571');return false;" class="tag-decoration">nightly-dae68d7</div><div id="tag30369" onclick="CopyToClipboard('tag30369');return false;" class="tag-decoration">nightly-6.2.0.10409</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/dae68d74a5b760b7d52d8ad6b4fc51f065328203" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25701879481" target="_blank">2026-05-11 22:48:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16064" onclick="CopyToClipboard('tag16064');return false;" class="tag-decoration">release</div><div id="tag20276" onclick="CopyToClipboard('tag20276');return false;" class="tag-decoration">release-11686f0</div><div id="tag27725" onclick="CopyToClipboard('tag27725');return false;" class="tag-decoration">release-6.1.1.10360</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/11686f05eb4dd661df0e209dd1608d74ba8d63fb" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25701885300" target="_blank">2026-05-11 22:48:24</a></td></tr>
<tr><td><div id="tag6034" onclick="CopyToClipboard('tag6034');return false;" class="tag-decoration">testing</div><div id="tag30118" onclick="CopyToClipboard('tag30118');return false;" class="tag-decoration">testing-7aff165</div><div id="tag22697" onclick="CopyToClipboard('tag22697');return false;" class="tag-decoration">testing-6.2.0.10390</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/7aff165ddc38b34f3446d75d6766e521ba08a43f" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25701890001" target="_blank">2026-05-11 22:48:30</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
