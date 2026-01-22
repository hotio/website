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
<tr><td><div id="tag13830" onclick="CopyToClipboard('tag13830');return false;" class="tag-decoration">nightly</div><div id="tag25430" onclick="CopyToClipboard('tag25430');return false;" class="tag-decoration">nightly-9748d36</div><div id="tag22949" onclick="CopyToClipboard('tag22949');return false;" class="tag-decoration">nightly-2026011205</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/9748d36fe00510e1742eac6c5e659a90b61e200c" target="_blank">Upstream update: noblevpn-4c01d7f => noblevpn-6fa044b</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21237941243" target="_blank">2026-01-22 06:02:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8631" onclick="CopyToClipboard('tag8631');return false;" class="tag-decoration">release</div><div id="tag14484" onclick="CopyToClipboard('tag14484');return false;" class="tag-decoration">release-9a4575e</div><div id="tag28748" onclick="CopyToClipboard('tag28748');return false;" class="tag-decoration">release-10.11.6</div><div id="tag852" onclick="CopyToClipboard('tag852');return false;" class="tag-decoration">release-v10</div><div id="tag15169" onclick="CopyToClipboard('tag15169');return false;" class="tag-decoration">release-v10.11</div><div id="tag2599" onclick="CopyToClipboard('tag2599');return false;" class="tag-decoration">release-v10.11.6</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/9a4575ecc63026ca5a2408b9b64b6e7e72529ea1" target="_blank">Upstream update: noblevpn-6eb9503 => noblevpn-4c01d7f</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21200258086" target="_blank">2026-01-21 06:57:20</a></td></tr>
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
