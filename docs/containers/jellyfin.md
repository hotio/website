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
<tr><td><div id="tag29268" onclick="CopyToClipboard('tag29268');return false;" class="tag-decoration">nightly</div><div id="tag25148" onclick="CopyToClipboard('tag25148');return false;" class="tag-decoration">nightly-93a7e36</div><div id="tag9006" onclick="CopyToClipboard('tag9006');return false;" class="tag-decoration">nightly-2026062206</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/93a7e36dfc844b1675f102011c89bba4e1559c5f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/28206356283" target="_blank">2026-06-25 23:12:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28715" onclick="CopyToClipboard('tag28715');return false;" class="tag-decoration">release</div><div id="tag16281" onclick="CopyToClipboard('tag16281');return false;" class="tag-decoration">release-13553a7</div><div id="tag24664" onclick="CopyToClipboard('tag24664');return false;" class="tag-decoration">release-10.11.11</div><div id="tag1882" onclick="CopyToClipboard('tag1882');return false;" class="tag-decoration">release-v10</div><div id="tag6049" onclick="CopyToClipboard('tag6049');return false;" class="tag-decoration">release-v10.11</div><div id="tag18932" onclick="CopyToClipboard('tag18932');return false;" class="tag-decoration">release-v10.11.11</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/13553a7097400126b26dc1f67bfc57bb59e12822" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/28121831200" target="_blank">2026-06-24 18:48:02</a></td></tr>
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
