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
<tr><td><div id="tag10209" onclick="CopyToClipboard('tag10209');return false;" class="tag-decoration">nightly</div><div id="tag22124" onclick="CopyToClipboard('tag22124');return false;" class="tag-decoration">nightly-73a238b</div><div id="tag30258" onclick="CopyToClipboard('tag30258');return false;" class="tag-decoration">nightly-7.0.0.10788</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/73a238b58e24a63ee939efc2cf295dc5ac195b62" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39676680579" target="_blank">2026-10-21 21:10:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20668" onclick="CopyToClipboard('tag20668');return false;" class="tag-decoration">release</div><div id="tag22394" onclick="CopyToClipboard('tag22394');return false;" class="tag-decoration">release-ce4a51d</div><div id="tag31108" onclick="CopyToClipboard('tag31108');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/ce4a51d0a0e11208363db2b017754d9f32ace41d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39699428475" target="_blank">2026-10-22 00:23:44</a></td></tr>
<tr><td><div id="tag14011" onclick="CopyToClipboard('tag14011');return false;" class="tag-decoration">testing</div><div id="tag15871" onclick="CopyToClipboard('tag15871');return false;" class="tag-decoration">testing-bd446b0</div><div id="tag24530" onclick="CopyToClipboard('tag24530');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/bd446b00c50a040353db2182c03459b96f539e38" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39676648239" target="_blank">2026-10-21 21:10:45</a></td></tr>
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
