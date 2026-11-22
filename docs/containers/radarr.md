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
<tr><td><div id="tag19755" onclick="CopyToClipboard('tag19755');return false;" class="tag-decoration">nightly</div><div id="tag21927" onclick="CopyToClipboard('tag21927');return false;" class="tag-decoration">nightly-80d4c1b</div><div id="tag5131" onclick="CopyToClipboard('tag5131');return false;" class="tag-decoration">nightly-7.1.0.10948</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/80d4c1bebf8c31ca4936b6f733c557b41bc274e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45072306731" target="_blank">2026-11-22 21:28:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4203" onclick="CopyToClipboard('tag4203');return false;" class="tag-decoration">release</div><div id="tag30084" onclick="CopyToClipboard('tag30084');return false;" class="tag-decoration">release-01f8d80</div><div id="tag21843" onclick="CopyToClipboard('tag21843');return false;" class="tag-decoration">release-7.0.3.10918</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/01f8d80dc246a8ce07d3b210a064cf262e8d294d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/43824920933" target="_blank">2026-11-16 07:35:21</a></td></tr>
<tr><td><div id="tag23879" onclick="CopyToClipboard('tag23879');return false;" class="tag-decoration">testing</div><div id="tag5239" onclick="CopyToClipboard('tag5239');return false;" class="tag-decoration">testing-97dafc4</div><div id="tag28522" onclick="CopyToClipboard('tag28522');return false;" class="tag-decoration">testing-7.0.3.10918</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/97dafc49b835b7773187d0b8fef2d642d60b3ca7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/43824914760" target="_blank">2026-11-16 07:35:17</a></td></tr>
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
