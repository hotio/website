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
<tr><td><div id="tag25166" onclick="CopyToClipboard('tag25166');return false;" class="tag-decoration">nightly</div><div id="tag25978" onclick="CopyToClipboard('tag25978');return false;" class="tag-decoration">nightly-2026010505</div><div id="tag2104" onclick="CopyToClipboard('tag2104');return false;" class="tag-decoration">nightly-de001f5</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/de001f53e6e239675c65a7167b4283711029ed64" target="_blank">Upstream update: noblevpn-c55f8d5 => noblevpn-b820b9e</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20895140249" target="_blank">2026-01-11 12:28:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14593" onclick="CopyToClipboard('tag14593');return false;" class="tag-decoration">release</div><div id="tag26358" onclick="CopyToClipboard('tag26358');return false;" class="tag-decoration">release-10.11.5</div><div id="tag14705" onclick="CopyToClipboard('tag14705');return false;" class="tag-decoration">release-b66f71e</div><div id="tag159" onclick="CopyToClipboard('tag159');return false;" class="tag-decoration">release-v10</div><div id="tag26059" onclick="CopyToClipboard('tag26059');return false;" class="tag-decoration">release-v10.11</div><div id="tag28659" onclick="CopyToClipboard('tag28659');return false;" class="tag-decoration">release-v10.11.5</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/b66f71e5b9e0bd2a882246548cda4e5bbffc97f6" target="_blank">Upstream update: noblevpn-d932ed0 => noblevpn-c55f8d5</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20892084903" target="_blank">2026-01-11 08:19:29</a></td></tr>
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
