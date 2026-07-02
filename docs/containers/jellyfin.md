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
<tr><td><div id="tag16002" onclick="CopyToClipboard('tag16002');return false;" class="tag-decoration">nightly</div><div id="tag276" onclick="CopyToClipboard('tag276');return false;" class="tag-decoration">nightly-49ee6f8</div><div id="tag7212" onclick="CopyToClipboard('tag7212');return false;" class="tag-decoration">nightly-2026062906</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/49ee6f8bd3d5a116b496cc1fd319a4ead4074c6b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/28581471049" target="_blank">2026-07-02 09:56:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30287" onclick="CopyToClipboard('tag30287');return false;" class="tag-decoration">release</div><div id="tag9496" onclick="CopyToClipboard('tag9496');return false;" class="tag-decoration">release-ee3d833</div><div id="tag4740" onclick="CopyToClipboard('tag4740');return false;" class="tag-decoration">release-10.11.11</div><div id="tag31705" onclick="CopyToClipboard('tag31705');return false;" class="tag-decoration">release-v10</div><div id="tag1253" onclick="CopyToClipboard('tag1253');return false;" class="tag-decoration">release-v10.11</div><div id="tag22629" onclick="CopyToClipboard('tag22629');return false;" class="tag-decoration">release-v10.11.11</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/ee3d833db1048a491ab819371656b5425785120e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/28495355313" target="_blank">2026-07-01 05:18:21</a></td></tr>
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
