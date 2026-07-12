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
<tr><td><div id="tag16866" onclick="CopyToClipboard('tag16866');return false;" class="tag-decoration">nightly</div><div id="tag5291" onclick="CopyToClipboard('tag5291');return false;" class="tag-decoration">nightly-712633d</div><div id="tag6135" onclick="CopyToClipboard('tag6135');return false;" class="tag-decoration">nightly-6.3.0.10513</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/712633d4fe36fe488357bba0757634994f43b61b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29191709800" target="_blank">2026-07-12 11:55:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1798" onclick="CopyToClipboard('tag1798');return false;" class="tag-decoration">release</div><div id="tag27326" onclick="CopyToClipboard('tag27326');return false;" class="tag-decoration">release-18c4fa2</div><div id="tag27001" onclick="CopyToClipboard('tag27001');return false;" class="tag-decoration">release-6.2.1.10461</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/18c4fa2cf9dd8a0abfa986547f78fc6f80700f63" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28975534720" target="_blank">2026-07-08 21:02:58</a></td></tr>
<tr><td><div id="tag29549" onclick="CopyToClipboard('tag29549');return false;" class="tag-decoration">testing</div><div id="tag29593" onclick="CopyToClipboard('tag29593');return false;" class="tag-decoration">testing-1e41736</div><div id="tag19450" onclick="CopyToClipboard('tag19450');return false;" class="tag-decoration">testing-6.3.0.10511</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/1e41736191446dcfe4c607c3f7f5d020fb10ebb2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29194053708" target="_blank">2026-07-12 13:14:42</a></td></tr>
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
