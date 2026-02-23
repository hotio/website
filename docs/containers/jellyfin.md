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
<tr><td><div id="tag32031" onclick="CopyToClipboard('tag32031');return false;" class="tag-decoration">nightly</div><div id="tag7963" onclick="CopyToClipboard('tag7963');return false;" class="tag-decoration">nightly-417e1af</div><div id="tag7635" onclick="CopyToClipboard('tag7635');return false;" class="tag-decoration">nightly-2026021605</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/417e1afd5b5205ebff733cf6131c2230deec6b77" target="_blank">Upstream update: noblevpn-f921142 => noblevpn-c3daa84</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/22292122782" target="_blank">2026-02-23 03:43:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10896" onclick="CopyToClipboard('tag10896');return false;" class="tag-decoration">release</div><div id="tag19804" onclick="CopyToClipboard('tag19804');return false;" class="tag-decoration">release-4a6b94b</div><div id="tag3454" onclick="CopyToClipboard('tag3454');return false;" class="tag-decoration">release-10.11.6</div><div id="tag21987" onclick="CopyToClipboard('tag21987');return false;" class="tag-decoration">release-v10</div><div id="tag17230" onclick="CopyToClipboard('tag17230');return false;" class="tag-decoration">release-v10.11</div><div id="tag25155" onclick="CopyToClipboard('tag25155');return false;" class="tag-decoration">release-v10.11.6</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/4a6b94bbde8d348adfef4bfd6135dd5a6b512342" target="_blank">Upstream update: noblevpn-b1148ef => noblevpn-f921142</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/22118115623" target="_blank">2026-02-17 22:23:59</a></td></tr>
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
