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
<tr><td><div id="tag26269" onclick="CopyToClipboard('tag26269');return false;" class="tag-decoration">nightly</div><div id="tag14230" onclick="CopyToClipboard('tag14230');return false;" class="tag-decoration">nightly-6cae401</div><div id="tag1504" onclick="CopyToClipboard('tag1504');return false;" class="tag-decoration">nightly-2026101910</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/6cae40143f129c05b52cbb4afe56f5c62fd38362" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/39854464003" target="_blank">2026-10-22 21:06:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26771" onclick="CopyToClipboard('tag26771');return false;" class="tag-decoration">release</div><div id="tag29438" onclick="CopyToClipboard('tag29438');return false;" class="tag-decoration">release-b32ba3b</div><div id="tag11766" onclick="CopyToClipboard('tag11766');return false;" class="tag-decoration">release-12.2</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/b32ba3b94061746174893563192eb433bc07fa8e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/39497907593" target="_blank">2026-10-20 21:08:18</a></td></tr>
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
