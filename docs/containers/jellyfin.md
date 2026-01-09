---
hide:
  - toc
title: hotio/jellyfin
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jellyfin){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jellyfin){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/jellyfin/tags){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19657" onclick="CopyToClipboard('tag19657');return false;" class="tag-decoration">nightly</div><div id="tag11296" onclick="CopyToClipboard('tag11296');return false;" class="tag-decoration">nightly-2026010505</div><div id="tag11904" onclick="CopyToClipboard('tag11904');return false;" class="tag-decoration">nightly-514651e</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/514651e814dd434317f8a78dfe09dc22215ead1a" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20844899305" target="_blank">2026-01-09 07:44:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23843" onclick="CopyToClipboard('tag23843');return false;" class="tag-decoration">release</div><div id="tag13090" onclick="CopyToClipboard('tag13090');return false;" class="tag-decoration">release-10.11.5</div><div id="tag24728" onclick="CopyToClipboard('tag24728');return false;" class="tag-decoration">release-d041df0</div><div id="tag24590" onclick="CopyToClipboard('tag24590');return false;" class="tag-decoration">release-v10</div><div id="tag9310" onclick="CopyToClipboard('tag9310');return false;" class="tag-decoration">release-v10.11</div><div id="tag24350" onclick="CopyToClipboard('tag24350');return false;" class="tag-decoration">release-v10.11.5</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/d041df0dc9aea942063e400578c3cc48a11ac158" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20844919766" target="_blank">2026-01-09 07:45:00</a></td></tr>
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
