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
<tr><td><div id="tag696" onclick="CopyToClipboard('tag696');return false;" class="tag-decoration">nightly</div><div id="tag14845" onclick="CopyToClipboard('tag14845');return false;" class="tag-decoration">nightly-2026010505</div><div id="tag17744" onclick="CopyToClipboard('tag17744');return false;" class="tag-decoration">nightly-dd97d7c</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/dd97d7c0fc4728fad62cbedf2c5d8288862f5314" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20770099213" target="_blank">2026-01-07 03:57:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14302" onclick="CopyToClipboard('tag14302');return false;" class="tag-decoration">release</div><div id="tag5127" onclick="CopyToClipboard('tag5127');return false;" class="tag-decoration">release-10.11.5</div><div id="tag22475" onclick="CopyToClipboard('tag22475');return false;" class="tag-decoration">release-9a2b097</div><div id="tag6024" onclick="CopyToClipboard('tag6024');return false;" class="tag-decoration">release-v10</div><div id="tag32753" onclick="CopyToClipboard('tag32753');return false;" class="tag-decoration">release-v10.11</div><div id="tag9538" onclick="CopyToClipboard('tag9538');return false;" class="tag-decoration">release-v10.11.5</div></td><td>Stable</td><td>Upstream image update</td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20690824264" target="_blank">2026-01-04 09:25:48</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name jellyfin \
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
