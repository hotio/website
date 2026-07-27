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
<tr><td><div id="tag10128" onclick="CopyToClipboard('tag10128');return false;" class="tag-decoration">nightly</div><div id="tag32415" onclick="CopyToClipboard('tag32415');return false;" class="tag-decoration">nightly-77c508d</div><div id="tag6177" onclick="CopyToClipboard('tag6177');return false;" class="tag-decoration">nightly-2026072708</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/77c508d53e73f19d1aabe25a111d7c9b328753b8" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/30258784945" target="_blank">2026-07-27 10:37:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20767" onclick="CopyToClipboard('tag20767');return false;" class="tag-decoration">release</div><div id="tag24985" onclick="CopyToClipboard('tag24985');return false;" class="tag-decoration">release-9f99889</div><div id="tag12410" onclick="CopyToClipboard('tag12410');return false;" class="tag-decoration">release-10.11.11</div><div id="tag26196" onclick="CopyToClipboard('tag26196');return false;" class="tag-decoration">release-v10</div><div id="tag10887" onclick="CopyToClipboard('tag10887');return false;" class="tag-decoration">release-v10.11</div><div id="tag30746" onclick="CopyToClipboard('tag30746');return false;" class="tag-decoration">release-v10.11.11</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/9f998890e14944cef4ad4ac788edd631d2708a88" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/30028538089" target="_blank">2026-07-23 17:14:00</a></td></tr>
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
