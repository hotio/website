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
<tr><td><div id="tag14781" onclick="CopyToClipboard('tag14781');return false;" class="tag-decoration">nightly</div><div id="tag23518" onclick="CopyToClipboard('tag23518');return false;" class="tag-decoration">nightly-7761338</div><div id="tag11609" onclick="CopyToClipboard('tag11609');return false;" class="tag-decoration">nightly-2026083111</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/7761338af24aa5ccd60540c5e0ccd08bbee59572" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/33404507999" target="_blank">2026-08-31 14:45:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag357" onclick="CopyToClipboard('tag357');return false;" class="tag-decoration">release</div><div id="tag26604" onclick="CopyToClipboard('tag26604');return false;" class="tag-decoration">release-0bc7d40</div><div id="tag23755" onclick="CopyToClipboard('tag23755');return false;" class="tag-decoration">release-10.11.11</div><div id="tag30575" onclick="CopyToClipboard('tag30575');return false;" class="tag-decoration">release-v10</div><div id="tag15420" onclick="CopyToClipboard('tag15420');return false;" class="tag-decoration">release-v10.11</div><div id="tag20068" onclick="CopyToClipboard('tag20068');return false;" class="tag-decoration">release-v10.11.11</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/0bc7d406de184ae24f766e904007c0d13e262f24" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/33126391069" target="_blank">2026-08-27 23:28:15</a></td></tr>
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
