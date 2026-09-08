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
<tr><td><div id="tag4103" onclick="CopyToClipboard('tag4103');return false;" class="tag-decoration">nightly</div><div id="tag16570" onclick="CopyToClipboard('tag16570');return false;" class="tag-decoration">nightly-7f6a912</div><div id="tag29302" onclick="CopyToClipboard('tag29302');return false;" class="tag-decoration">nightly-2026090709</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/7f6a9129090f483d5d5fb056d7802a6fbe521029" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/34116087073" target="_blank">2026-09-07 11:20:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12280" onclick="CopyToClipboard('tag12280');return false;" class="tag-decoration">release</div><div id="tag11983" onclick="CopyToClipboard('tag11983');return false;" class="tag-decoration">release-6c44610</div><div id="tag29549" onclick="CopyToClipboard('tag29549');return false;" class="tag-decoration">release-10.11.11</div><div id="tag822" onclick="CopyToClipboard('tag822');return false;" class="tag-decoration">release-v10</div><div id="tag26081" onclick="CopyToClipboard('tag26081');return false;" class="tag-decoration">release-v10.11</div><div id="tag8201" onclick="CopyToClipboard('tag8201');return false;" class="tag-decoration">release-v10.11.11</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/6c4461050d52e527b29760d48f75a405d8fa098a" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/34180608775" target="_blank">2026-09-08 02:35:52</a></td></tr>
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
