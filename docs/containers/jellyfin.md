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
<tr><td><div id="tag2643" onclick="CopyToClipboard('tag2643');return false;" class="tag-decoration">nightly</div><div id="tag10501" onclick="CopyToClipboard('tag10501');return false;" class="tag-decoration">nightly-6927e67</div><div id="tag26749" onclick="CopyToClipboard('tag26749');return false;" class="tag-decoration">nightly-2026052506</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/6927e67b8e8ced6b7dbc13b0d58d20e0cd1a5823" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/26524689282" target="_blank">2026-05-27 16:34:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32012" onclick="CopyToClipboard('tag32012');return false;" class="tag-decoration">release</div><div id="tag25225" onclick="CopyToClipboard('tag25225');return false;" class="tag-decoration">release-4a34bf3</div><div id="tag4552" onclick="CopyToClipboard('tag4552');return false;" class="tag-decoration">release-10.11.10</div><div id="tag16079" onclick="CopyToClipboard('tag16079');return false;" class="tag-decoration">release-v10</div><div id="tag28900" onclick="CopyToClipboard('tag28900');return false;" class="tag-decoration">release-v10.11</div><div id="tag11295" onclick="CopyToClipboard('tag11295');return false;" class="tag-decoration">release-v10.11.10</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/4a34bf310d38dd6cae75b7471ea3073c3720b68b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/26524692044" target="_blank">2026-05-27 16:34:47</a></td></tr>
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
