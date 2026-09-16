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
<tr><td><div id="tag10049" onclick="CopyToClipboard('tag10049');return false;" class="tag-decoration">nightly</div><div id="tag12211" onclick="CopyToClipboard('tag12211');return false;" class="tag-decoration">nightly-9a96881</div><div id="tag20377" onclick="CopyToClipboard('tag20377');return false;" class="tag-decoration">nightly-2026091410</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/9a9688129aabe07d435d4d2b14cead715a2970e6" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/34960184586" target="_blank">2026-09-15 10:51:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2161" onclick="CopyToClipboard('tag2161');return false;" class="tag-decoration">release</div><div id="tag1446" onclick="CopyToClipboard('tag1446');return false;" class="tag-decoration">release-93e0adf</div><div id="tag6958" onclick="CopyToClipboard('tag6958');return false;" class="tag-decoration">release-12.1</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/93e0adf19d0a75f1520ac7a0ca00378d2a646344" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/35086256609" target="_blank">2026-09-16 10:40:30</a></td></tr>
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
