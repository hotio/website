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
<tr><td><div id="tag8634" onclick="CopyToClipboard('tag8634');return false;" class="tag-decoration">nightly</div><div id="tag26038" onclick="CopyToClipboard('tag26038');return false;" class="tag-decoration">nightly-9748d36</div><div id="tag8670" onclick="CopyToClipboard('tag8670');return false;" class="tag-decoration">nightly-2026011205</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/9748d36fe00510e1742eac6c5e659a90b61e200c" target="_blank">Upstream update: noblevpn-4c01d7f => noblevpn-6fa044b</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21237941243" target="_blank">2026-01-22 06:02:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4428" onclick="CopyToClipboard('tag4428');return false;" class="tag-decoration">release</div><div id="tag22756" onclick="CopyToClipboard('tag22756');return false;" class="tag-decoration">release-37ac716</div><div id="tag16320" onclick="CopyToClipboard('tag16320');return false;" class="tag-decoration">release-10.11.6</div><div id="tag12960" onclick="CopyToClipboard('tag12960');return false;" class="tag-decoration">release-v10</div><div id="tag32518" onclick="CopyToClipboard('tag32518');return false;" class="tag-decoration">release-v10.11</div><div id="tag20551" onclick="CopyToClipboard('tag20551');return false;" class="tag-decoration">release-v10.11.6</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/37ac7160deab4f1b59a1cc655234f384152d9bab" target="_blank">Upstream update: noblevpn-4c01d7f => noblevpn-6fa044b</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21237941612" target="_blank">2026-01-22 06:02:52</a></td></tr>
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
