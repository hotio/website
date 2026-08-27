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
<tr><td><div id="tag28329" onclick="CopyToClipboard('tag28329');return false;" class="tag-decoration">nightly</div><div id="tag14600" onclick="CopyToClipboard('tag14600');return false;" class="tag-decoration">nightly-3ac33e0</div><div id="tag32656" onclick="CopyToClipboard('tag32656');return false;" class="tag-decoration">nightly-2026082405</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/3ac33e0e77bce6519b3c9633200600d0a3b38657" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/33077724603" target="_blank">2026-08-27 13:36:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29518" onclick="CopyToClipboard('tag29518');return false;" class="tag-decoration">release</div><div id="tag9589" onclick="CopyToClipboard('tag9589');return false;" class="tag-decoration">release-f25861e</div><div id="tag11547" onclick="CopyToClipboard('tag11547');return false;" class="tag-decoration">release-10.11.11</div><div id="tag27737" onclick="CopyToClipboard('tag27737');return false;" class="tag-decoration">release-v10</div><div id="tag6421" onclick="CopyToClipboard('tag6421');return false;" class="tag-decoration">release-v10.11</div><div id="tag12896" onclick="CopyToClipboard('tag12896');return false;" class="tag-decoration">release-v10.11.11</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/f25861ef9ed7d2b0a876218b6030937bbc8e9c93" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/32976563323" target="_blank">2026-08-26 13:49:58</a></td></tr>
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
