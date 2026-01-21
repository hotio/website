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
<tr><td><div id="tag7187" onclick="CopyToClipboard('tag7187');return false;" class="tag-decoration">nightly</div><div id="tag958" onclick="CopyToClipboard('tag958');return false;" class="tag-decoration">nightly-3f4d612</div><div id="tag1331" onclick="CopyToClipboard('tag1331');return false;" class="tag-decoration">nightly-2026011205</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/3f4d6120a71aac060b4016d827fae3b68d833473" target="_blank">Upstream update: noblevpn-130f95b => noblevpn-6eb9503</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21198329692" target="_blank">2026-01-21 05:24:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24707" onclick="CopyToClipboard('tag24707');return false;" class="tag-decoration">release</div><div id="tag22588" onclick="CopyToClipboard('tag22588');return false;" class="tag-decoration">release-82db21a</div><div id="tag15228" onclick="CopyToClipboard('tag15228');return false;" class="tag-decoration">release-10.11.6</div><div id="tag27669" onclick="CopyToClipboard('tag27669');return false;" class="tag-decoration">release-v10</div><div id="tag17479" onclick="CopyToClipboard('tag17479');return false;" class="tag-decoration">release-v10.11</div><div id="tag31594" onclick="CopyToClipboard('tag31594');return false;" class="tag-decoration">release-v10.11.6</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/82db21a27a1dedf333e76d0efcb85c166b69d9bd" target="_blank">Upstream update: noblevpn-a3516fa => noblevpn-130f95b</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/21132218609" target="_blank">2026-01-19 09:30:35</a></td></tr>
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
