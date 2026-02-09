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
<tr><td><div id="tag4463" onclick="CopyToClipboard('tag4463');return false;" class="tag-decoration">nightly</div><div id="tag1677" onclick="CopyToClipboard('tag1677');return false;" class="tag-decoration">nightly-cf5bce8</div><div id="tag25106" onclick="CopyToClipboard('tag25106');return false;" class="tag-decoration">nightly-2026020905</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/cf5bce8296797cd6b2aefe8ec44bad2e5c197cdb" target="_blank">Version update: 2026020205 => 2026020905</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21815079093" target="_blank">2026-02-09 06:42:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21331" onclick="CopyToClipboard('tag21331');return false;" class="tag-decoration">release</div><div id="tag10492" onclick="CopyToClipboard('tag10492');return false;" class="tag-decoration">release-64e2517</div><div id="tag478" onclick="CopyToClipboard('tag478');return false;" class="tag-decoration">release-10.11.6</div><div id="tag9181" onclick="CopyToClipboard('tag9181');return false;" class="tag-decoration">release-v10</div><div id="tag6372" onclick="CopyToClipboard('tag6372');return false;" class="tag-decoration">release-v10.11</div><div id="tag884" onclick="CopyToClipboard('tag884');return false;" class="tag-decoration">release-v10.11.6</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/64e2517688330415d9b6b5f8e09b12273d17f0df" target="_blank">Upstream update: noblevpn-8ba830a => noblevpn-b1148ef</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21428844236" target="_blank">2026-01-28 07:14:30</a></td></tr>
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
