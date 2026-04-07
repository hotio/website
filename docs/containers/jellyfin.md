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
<tr><td><div id="tag17701" onclick="CopyToClipboard('tag17701');return false;" class="tag-decoration">nightly</div><div id="tag29691" onclick="CopyToClipboard('tag29691');return false;" class="tag-decoration">nightly-e042665</div><div id="tag7563" onclick="CopyToClipboard('tag7563');return false;" class="tag-decoration">nightly-2026040605</div></td><td>Unstable</td><td><a href="https://github.com/hotio/jellyfin/commit/e042665eb592a4c85b1896a5dec056e319e01803" target="_blank">Version update: 2026032305 => 2026040605</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/24023813104" target="_blank">2026-04-06 07:51:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9779" onclick="CopyToClipboard('tag9779');return false;" class="tag-decoration">release</div><div id="tag18091" onclick="CopyToClipboard('tag18091');return false;" class="tag-decoration">release-e011546</div><div id="tag22107" onclick="CopyToClipboard('tag22107');return false;" class="tag-decoration">release-10.11.8</div><div id="tag11024" onclick="CopyToClipboard('tag11024');return false;" class="tag-decoration">release-v10</div><div id="tag13215" onclick="CopyToClipboard('tag13215');return false;" class="tag-decoration">release-v10.11</div><div id="tag32046" onclick="CopyToClipboard('tag32046');return false;" class="tag-decoration">release-v10.11.8</div></td><td>Stable</td><td><a href="https://github.com/hotio/jellyfin/commit/e0115467266543d77d4d82db7a76be4ea4d07be0" target="_blank">Upstream update: noblevpn-3867c07 => noblevpn-cba64e8</a></td><td><a href="https://github.com/hotio/jellyfin/actions/runs/24067320336" target="_blank">2026-04-07 06:15:44</a></td></tr>
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
