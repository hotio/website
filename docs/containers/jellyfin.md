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
<tr><td><div id="tag2069" onclick="CopyToClipboard('tag2069');return false;" class="tag-decoration">nightly</div><div id="tag2515" onclick="CopyToClipboard('tag2515');return false;" class="tag-decoration">nightly-a8100d4</div><div id="tag8243" onclick="CopyToClipboard('tag8243');return false;" class="tag-decoration">nightly-2026011205</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/a8100d4f8df2d50dcb8fb44ed92df730c21e9fd3" target="_blank">Upstream update: noblevpn-6a934c2 => noblevpn-f45b9a9</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21054524198" target="_blank">2026-01-16 03:24:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15011" onclick="CopyToClipboard('tag15011');return false;" class="tag-decoration">release</div><div id="tag20996" onclick="CopyToClipboard('tag20996');return false;" class="tag-decoration">release-4dd5b6f</div><div id="tag15797" onclick="CopyToClipboard('tag15797');return false;" class="tag-decoration">release-10.11.5</div><div id="tag3565" onclick="CopyToClipboard('tag3565');return false;" class="tag-decoration">release-v10</div><div id="tag28141" onclick="CopyToClipboard('tag28141');return false;" class="tag-decoration">release-v10.11</div><div id="tag9556" onclick="CopyToClipboard('tag9556');return false;" class="tag-decoration">release-v10.11.5</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/4dd5b6fb71df751556ea447e1dfb46203dcd29f7" target="_blank">Upstream update: noblevpn-6a934c2 => noblevpn-f45b9a9</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21054524630" target="_blank">2026-01-16 03:24:45</a></td></tr>
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
