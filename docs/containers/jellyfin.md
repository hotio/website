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
<tr><td><div id="tag11873" onclick="CopyToClipboard('tag11873');return false;" class="tag-decoration">nightly</div><div id="tag20151" onclick="CopyToClipboard('tag20151');return false;" class="tag-decoration">nightly-2026010505</div><div id="tag14970" onclick="CopyToClipboard('tag14970');return false;" class="tag-decoration">nightly-81f6a96</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/81f6a965c2cb237eb11af65386f4651f863e0f0f" target="_blank">Upstream update: null => noblevpn-d461e72</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20842470086" target="_blank">2026-01-09 05:40:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10197" onclick="CopyToClipboard('tag10197');return false;" class="tag-decoration">release</div><div id="tag3580" onclick="CopyToClipboard('tag3580');return false;" class="tag-decoration">release-10.11.5</div><div id="tag10360" onclick="CopyToClipboard('tag10360');return false;" class="tag-decoration">release-a668fe9</div><div id="tag21624" onclick="CopyToClipboard('tag21624');return false;" class="tag-decoration">release-v10</div><div id="tag19976" onclick="CopyToClipboard('tag19976');return false;" class="tag-decoration">release-v10.11</div><div id="tag22832" onclick="CopyToClipboard('tag22832');return false;" class="tag-decoration">release-v10.11.5</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/a668fe9b1571c33e402bf1f90727da0f90c76244" target="_blank">Upstream update: null => noblevpn-d461e72</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/20842470210" target="_blank">2026-01-09 05:40:40</a></td></tr>
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
