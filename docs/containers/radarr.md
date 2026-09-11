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
<tr><td><div id="tag19597" onclick="CopyToClipboard('tag19597');return false;" class="tag-decoration">nightly</div><div id="tag26565" onclick="CopyToClipboard('tag26565');return false;" class="tag-decoration">nightly-7797fd8</div><div id="tag24183" onclick="CopyToClipboard('tag24183');return false;" class="tag-decoration">nightly-6.4.4.10681</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/7797fd8322f20b83fa363201020a9e11a4d74daa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34652870599" target="_blank">2026-09-11 22:11:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8427" onclick="CopyToClipboard('tag8427');return false;" class="tag-decoration">release</div><div id="tag3494" onclick="CopyToClipboard('tag3494');return false;" class="tag-decoration">release-07d6183</div><div id="tag24103" onclick="CopyToClipboard('tag24103');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/07d61835f9b0b97351ce00f96fee311c9ba83add" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34491153829" target="_blank">2026-09-10 14:45:22</a></td></tr>
<tr><td><div id="tag6387" onclick="CopyToClipboard('tag6387');return false;" class="tag-decoration">testing</div><div id="tag23921" onclick="CopyToClipboard('tag23921');return false;" class="tag-decoration">testing-c7e36b5</div><div id="tag29783" onclick="CopyToClipboard('tag29783');return false;" class="tag-decoration">testing-6.4.3.10645</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/c7e36b56be9006003ff98b33b51477c27f3f614e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34491155114" target="_blank">2026-09-10 14:45:23</a></td></tr>
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
