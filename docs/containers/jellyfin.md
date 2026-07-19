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
<tr><td><div id="tag11887" onclick="CopyToClipboard('tag11887');return false;" class="tag-decoration">nightly</div><div id="tag22704" onclick="CopyToClipboard('tag22704');return false;" class="tag-decoration">nightly-60a7c4f</div><div id="tag9118" onclick="CopyToClipboard('tag9118');return false;" class="tag-decoration">nightly-2026071308</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/60a7c4fa2725f07cb212d21e3d1bdbed49195d9a" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/29681120212" target="_blank">2026-07-19 09:10:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21813" onclick="CopyToClipboard('tag21813');return false;" class="tag-decoration">release</div><div id="tag16435" onclick="CopyToClipboard('tag16435');return false;" class="tag-decoration">release-e986742</div><div id="tag3079" onclick="CopyToClipboard('tag3079');return false;" class="tag-decoration">release-10.11.11</div><div id="tag30379" onclick="CopyToClipboard('tag30379');return false;" class="tag-decoration">release-v10</div><div id="tag3923" onclick="CopyToClipboard('tag3923');return false;" class="tag-decoration">release-v10.11</div><div id="tag12508" onclick="CopyToClipboard('tag12508');return false;" class="tag-decoration">release-v10.11.11</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/e9867422f8f4b0d40f25667974680aae865878ee" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/29681155161" target="_blank">2026-07-19 09:12:03</a></td></tr>
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
