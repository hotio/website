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
<tr><td><div id="tag30391" onclick="CopyToClipboard('tag30391');return false;" class="tag-decoration">nightly</div><div id="tag3701" onclick="CopyToClipboard('tag3701');return false;" class="tag-decoration">nightly-8e37ac3</div><div id="tag21245" onclick="CopyToClipboard('tag21245');return false;" class="tag-decoration">nightly-6.3.0.10496</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/8e37ac3e11021cbde1af21d572a5e91ecbd3fe46" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28366638834" target="_blank">2026-06-29 10:49:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3069" onclick="CopyToClipboard('tag3069');return false;" class="tag-decoration">release</div><div id="tag4064" onclick="CopyToClipboard('tag4064');return false;" class="tag-decoration">release-c26dc8e</div><div id="tag124" onclick="CopyToClipboard('tag124');return false;" class="tag-decoration">release-6.2.1.10461</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/c26dc8efd4159b4abdc35469ee3410641c6e2968" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/27982522327" target="_blank">2026-06-22 20:40:23</a></td></tr>
<tr><td><div id="tag22902" onclick="CopyToClipboard('tag22902');return false;" class="tag-decoration">testing</div><div id="tag23853" onclick="CopyToClipboard('tag23853');return false;" class="tag-decoration">testing-e10da3f</div><div id="tag11914" onclick="CopyToClipboard('tag11914');return false;" class="tag-decoration">testing-6.2.1.10461</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/e10da3f025baba77c5c259cfc52235a423069cdf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/27982518892" target="_blank">2026-06-22 20:40:19</a></td></tr>
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
