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
<tr><td><div id="tag27983" onclick="CopyToClipboard('tag27983');return false;" class="tag-decoration">nightly</div><div id="tag16154" onclick="CopyToClipboard('tag16154');return false;" class="tag-decoration">nightly-e74a32a</div><div id="tag5311" onclick="CopyToClipboard('tag5311');return false;" class="tag-decoration">nightly-2026052506</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/e74a32a4a695447387096044234d008c3e7fb0da" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/26388486483" target="_blank">2026-05-25 07:17:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3820" onclick="CopyToClipboard('tag3820');return false;" class="tag-decoration">release</div><div id="tag2961" onclick="CopyToClipboard('tag2961');return false;" class="tag-decoration">release-a32aa5b</div><div id="tag25068" onclick="CopyToClipboard('tag25068');return false;" class="tag-decoration">release-10.11.10</div><div id="tag24595" onclick="CopyToClipboard('tag24595');return false;" class="tag-decoration">release-v10</div><div id="tag2279" onclick="CopyToClipboard('tag2279');return false;" class="tag-decoration">release-v10.11</div><div id="tag124" onclick="CopyToClipboard('tag124');return false;" class="tag-decoration">release-v10.11.10</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/a32aa5b13032e4c489ee53a7790d85a46597f76d" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/26373738062" target="_blank">2026-05-24 21:52:04</a></td></tr>
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
