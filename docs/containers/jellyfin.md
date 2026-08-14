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
<tr><td><div id="tag7604" onclick="CopyToClipboard('tag7604');return false;" class="tag-decoration">nightly</div><div id="tag1986" onclick="CopyToClipboard('tag1986');return false;" class="tag-decoration">nightly-6235750</div><div id="tag17780" onclick="CopyToClipboard('tag17780');return false;" class="tag-decoration">nightly-2026081006</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/623575045bdba949a7b1c04b1fc70b7093fa1911" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/31406139699" target="_blank">2026-08-10 15:54:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4655" onclick="CopyToClipboard('tag4655');return false;" class="tag-decoration">release</div><div id="tag25033" onclick="CopyToClipboard('tag25033');return false;" class="tag-decoration">release-8c4199d</div><div id="tag30389" onclick="CopyToClipboard('tag30389');return false;" class="tag-decoration">release-10.11.11</div><div id="tag10320" onclick="CopyToClipboard('tag10320');return false;" class="tag-decoration">release-v10</div><div id="tag28433" onclick="CopyToClipboard('tag28433');return false;" class="tag-decoration">release-v10.11</div><div id="tag17380" onclick="CopyToClipboard('tag17380');return false;" class="tag-decoration">release-v10.11.11</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/8c4199db410551869ddbb6d1c6445e9198209f14" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/31768580007" target="_blank">2026-08-14 04:01:39</a></td></tr>
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
