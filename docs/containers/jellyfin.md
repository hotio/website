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
<tr><td><div id="tag3096" onclick="CopyToClipboard('tag3096');return false;" class="tag-decoration">nightly</div><div id="tag26001" onclick="CopyToClipboard('tag26001');return false;" class="tag-decoration">nightly-97e4ba5</div><div id="tag11076" onclick="CopyToClipboard('tag11076');return false;" class="tag-decoration">nightly-2026011205</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/97e4ba55267d3727dcd758d7f88e023bf1a3e7ed" target="_blank">Upstream update: noblevpn-db01928 => noblevpn-a3516fa</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21124037753" target="_blank">2026-01-19 03:13:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15735" onclick="CopyToClipboard('tag15735');return false;" class="tag-decoration">release</div><div id="tag12080" onclick="CopyToClipboard('tag12080');return false;" class="tag-decoration">release-78b0f81</div><div id="tag8203" onclick="CopyToClipboard('tag8203');return false;" class="tag-decoration">release-10.11.6</div><div id="tag27205" onclick="CopyToClipboard('tag27205');return false;" class="tag-decoration">release-v10</div><div id="tag7507" onclick="CopyToClipboard('tag7507');return false;" class="tag-decoration">release-v10.11</div><div id="tag22524" onclick="CopyToClipboard('tag22524');return false;" class="tag-decoration">release-v10.11.6</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/78b0f819ecf2c4ea19c56f006dac56b94df33838" target="_blank">Version update: 10.11.5 => 10.11.6</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21125941830" target="_blank">2026-01-19 05:03:08</a></td></tr>
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
