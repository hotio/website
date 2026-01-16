---
hide:
  - toc
title: hotio/jellyfin
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jellyfin){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jellyfin){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jellyfin/jellyfin){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27939" onclick="CopyToClipboard('tag27939');return false;" class="tag-decoration">nightly</div><div id="tag21461" onclick="CopyToClipboard('tag21461');return false;" class="tag-decoration">nightly-3fd9bd0</div><div id="tag4448" onclick="CopyToClipboard('tag4448');return false;" class="tag-decoration">nightly-2026011205</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/3fd9bd045b08e4e7ae519897603cdfc4bd1a9272" target="_blank">Upstream update: noblevpn-ea653c4 => noblevpn-311995b</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21063278378" target="_blank">2026-01-16 10:17:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11497" onclick="CopyToClipboard('tag11497');return false;" class="tag-decoration">release</div><div id="tag20724" onclick="CopyToClipboard('tag20724');return false;" class="tag-decoration">release-4383176</div><div id="tag17014" onclick="CopyToClipboard('tag17014');return false;" class="tag-decoration">release-10.11.5</div><div id="tag7060" onclick="CopyToClipboard('tag7060');return false;" class="tag-decoration">release-v10</div><div id="tag18352" onclick="CopyToClipboard('tag18352');return false;" class="tag-decoration">release-v10.11</div><div id="tag17160" onclick="CopyToClipboard('tag17160');return false;" class="tag-decoration">release-v10.11.5</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/43831762d04acfb8ed7b4a0f7242e2bc5861e16f" target="_blank">Upstream update: noblevpn-23d46d5 => noblevpn-ea653c4</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21060538438" target="_blank">2026-01-16 08:33:30</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jellyfin" \
        -p 8096:8096 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8096/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/jellyfin
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jellyfin:
        container_name: jellyfin
        image: ghcr.io/hotio/jellyfin
        ports:
          - "8096:8096"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8096/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

## Configuration

The following jellyfin path locations are used by default.

```shell
JELLYFIN_CONFIG_DIR="/config"
JELLYFIN_DATA_DIR="/config/data"
JELLYFIN_LOG_DIR="/config/log"
JELLYFIN_CACHE_DIR="/config/cache"
```

You can override these locations by setting them to a different value with a docker environment variable.

--8<-- "includes/wireguard.md"
