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
<tr><td><div id="tag31464" onclick="CopyToClipboard('tag31464');return false;" class="tag-decoration">nightly</div><div id="tag15033" onclick="CopyToClipboard('tag15033');return false;" class="tag-decoration">nightly-397b4a9</div><div id="tag19527" onclick="CopyToClipboard('tag19527');return false;" class="tag-decoration">nightly-2026100512</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/397b4a9a4e0d1fd14c28960e7cb4552dea3b6057" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/37748881590" target="_blank">2026-10-08 08:17:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31066" onclick="CopyToClipboard('tag31066');return false;" class="tag-decoration">release</div><div id="tag28110" onclick="CopyToClipboard('tag28110');return false;" class="tag-decoration">release-fb7fa66</div><div id="tag19532" onclick="CopyToClipboard('tag19532');return false;" class="tag-decoration">release-12.2</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/fb7fa665b75db3617ad42dd5cf9b4a1607979c29" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/37506045275" target="_blank">2026-10-06 17:45:41</a></td></tr>
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
