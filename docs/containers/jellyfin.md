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
<tr><td><div id="tag7458" onclick="CopyToClipboard('tag7458');return false;" class="tag-decoration">nightly</div><div id="tag32729" onclick="CopyToClipboard('tag32729');return false;" class="tag-decoration">nightly-2c6972b</div><div id="tag7796" onclick="CopyToClipboard('tag7796');return false;" class="tag-decoration">nightly-2026050406</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/2c6972b87d05bcb96c4b1fefcd7ecfc9ece82050" target="_blank">Version update: 2026042706 => 2026050406</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/25306464232" target="_blank">2026-05-04 07:25:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4208" onclick="CopyToClipboard('tag4208');return false;" class="tag-decoration">release</div><div id="tag18226" onclick="CopyToClipboard('tag18226');return false;" class="tag-decoration">release-62dd3d7</div><div id="tag8391" onclick="CopyToClipboard('tag8391');return false;" class="tag-decoration">release-10.11.8</div><div id="tag24777" onclick="CopyToClipboard('tag24777');return false;" class="tag-decoration">release-v10</div><div id="tag9695" onclick="CopyToClipboard('tag9695');return false;" class="tag-decoration">release-v10.11</div><div id="tag799" onclick="CopyToClipboard('tag799');return false;" class="tag-decoration">release-v10.11.8</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/62dd3d790c03cd4a22313b12ce1b95ffc0f3c245" target="_blank">Upstream update: noblevpn-441eaee => noblevpn-72951af</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/25605048164" target="_blank">2026-05-09 15:43:26</a></td></tr>
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
