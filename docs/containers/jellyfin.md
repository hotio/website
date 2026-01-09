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
<tr><td><div id="tag14452" onclick="CopyToClipboard('tag14452');return false;" class="tag-decoration">nightly</div><div id="tag17943" onclick="CopyToClipboard('tag17943');return false;" class="tag-decoration">nightly-2026010505</div><div id="tag11144" onclick="CopyToClipboard('tag11144');return false;" class="tag-decoration">nightly-7ede83b</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/7ede83b2c6568d7df03f75327bc40d1a2738e9b5" target="_blank">enable arm64 smoketest</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20838089493" target="_blank">2026-01-09 01:32:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2769" onclick="CopyToClipboard('tag2769');return false;" class="tag-decoration">release</div><div id="tag5668" onclick="CopyToClipboard('tag5668');return false;" class="tag-decoration">release-10.11.5</div><div id="tag25686" onclick="CopyToClipboard('tag25686');return false;" class="tag-decoration">release-bac0b3b</div><div id="tag23556" onclick="CopyToClipboard('tag23556');return false;" class="tag-decoration">release-v10</div><div id="tag28411" onclick="CopyToClipboard('tag28411');return false;" class="tag-decoration">release-v10.11</div><div id="tag27370" onclick="CopyToClipboard('tag27370');return false;" class="tag-decoration">release-v10.11.5</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/bac0b3b290ca9f31a9632a9af418f2103ffc3321" target="_blank">enable arm64 smoketest</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20838080367" target="_blank">2026-01-09 01:31:51</a></td></tr>
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
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/jellyfin
    ```

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
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

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
