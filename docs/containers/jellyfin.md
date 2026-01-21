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
<tr><td><div id="tag30369" onclick="CopyToClipboard('tag30369');return false;" class="tag-decoration">nightly</div><div id="tag16784" onclick="CopyToClipboard('tag16784');return false;" class="tag-decoration">nightly-501ced9</div><div id="tag22637" onclick="CopyToClipboard('tag22637');return false;" class="tag-decoration">nightly-2026011205</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/501ced9be37c7865dee49ef9c9d939f101653602" target="_blank">Upstream update: noblevpn-6eb9503 => noblevpn-4c01d7f</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21200257613" target="_blank">2026-01-21 06:57:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3686" onclick="CopyToClipboard('tag3686');return false;" class="tag-decoration">release</div><div id="tag15018" onclick="CopyToClipboard('tag15018');return false;" class="tag-decoration">release-f37d9de</div><div id="tag14970" onclick="CopyToClipboard('tag14970');return false;" class="tag-decoration">release-10.11.6</div><div id="tag4071" onclick="CopyToClipboard('tag4071');return false;" class="tag-decoration">release-v10</div><div id="tag27628" onclick="CopyToClipboard('tag27628');return false;" class="tag-decoration">release-v10.11</div><div id="tag20972" onclick="CopyToClipboard('tag20972');return false;" class="tag-decoration">release-v10.11.6</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/f37d9de7b37f50689c8c0883d770e5955e0ba71f" target="_blank">Upstream update: noblevpn-130f95b => noblevpn-6eb9503</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21198330057" target="_blank">2026-01-21 05:24:14</a></td></tr>
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
