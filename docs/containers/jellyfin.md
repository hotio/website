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
<tr><td><div id="tag2673" onclick="CopyToClipboard('tag2673');return false;" class="tag-decoration">nightly</div><div id="tag5673" onclick="CopyToClipboard('tag5673');return false;" class="tag-decoration">nightly-88d5768</div><div id="tag19081" onclick="CopyToClipboard('tag19081');return false;" class="tag-decoration">nightly-2026051106</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/88d57684a5ad1ac05531abf7abd32c99c6b81cf1" target="_blank">Version update: 2026051106 => 2026051106</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/25756969979" target="_blank">2026-05-12 19:22:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5740" onclick="CopyToClipboard('tag5740');return false;" class="tag-decoration">release</div><div id="tag22330" onclick="CopyToClipboard('tag22330');return false;" class="tag-decoration">release-476db55</div><div id="tag23970" onclick="CopyToClipboard('tag23970');return false;" class="tag-decoration">release-10.11.8</div><div id="tag10520" onclick="CopyToClipboard('tag10520');return false;" class="tag-decoration">release-v10</div><div id="tag18923" onclick="CopyToClipboard('tag18923');return false;" class="tag-decoration">release-v10.11</div><div id="tag7525" onclick="CopyToClipboard('tag7525');return false;" class="tag-decoration">release-v10.11.8</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/476db550bb902e4d62b03c9e45ca53a38cf10026" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/25714929707" target="_blank">2026-05-12 05:15:51</a></td></tr>
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
