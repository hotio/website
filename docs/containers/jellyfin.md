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
<tr><td><div id="tag7228" onclick="CopyToClipboard('tag7228');return false;" class="tag-decoration">nightly</div><div id="tag27612" onclick="CopyToClipboard('tag27612');return false;" class="tag-decoration">nightly-dbe9d3c</div><div id="tag13042" onclick="CopyToClipboard('tag13042');return false;" class="tag-decoration">nightly-2026020205</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/dbe9d3c0466a9d364614f0559ec4e0c6754119e8" target="_blank">Version update: 2026011205 => 2026020205</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21579468786" target="_blank">2026-02-02 06:15:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26910" onclick="CopyToClipboard('tag26910');return false;" class="tag-decoration">release</div><div id="tag27257" onclick="CopyToClipboard('tag27257');return false;" class="tag-decoration">release-64e2517</div><div id="tag6186" onclick="CopyToClipboard('tag6186');return false;" class="tag-decoration">release-10.11.6</div><div id="tag6499" onclick="CopyToClipboard('tag6499');return false;" class="tag-decoration">release-v10</div><div id="tag24801" onclick="CopyToClipboard('tag24801');return false;" class="tag-decoration">release-v10.11</div><div id="tag24088" onclick="CopyToClipboard('tag24088');return false;" class="tag-decoration">release-v10.11.6</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/64e2517688330415d9b6b5f8e09b12273d17f0df" target="_blank">Upstream update: noblevpn-8ba830a => noblevpn-b1148ef</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21428844236" target="_blank">2026-01-28 07:14:30</a></td></tr>
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
