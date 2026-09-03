---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag268" onclick="CopyToClipboard('tag268');return false;" class="tag-decoration">nightly</div><div id="tag15173" onclick="CopyToClipboard('tag15173');return false;" class="tag-decoration">nightly-0cb6599</div><div id="tag13994" onclick="CopyToClipboard('tag13994');return false;" class="tag-decoration">nightly-4cb5b661749810e99b73f9969d06b1c36401af6b</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/0cb65995f88cf1650ffe2e38b445d02c04d80f41" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/33793570131" target="_blank">2026-09-03 18:57:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19233" onclick="CopyToClipboard('tag19233');return false;" class="tag-decoration">release</div><div id="tag30934" onclick="CopyToClipboard('tag30934');return false;" class="tag-decoration">release-cbeae6b</div><div id="tag22388" onclick="CopyToClipboard('tag22388');return false;" class="tag-decoration">release-0.31.1</div><div id="tag29629" onclick="CopyToClipboard('tag29629');return false;" class="tag-decoration">release-v0</div><div id="tag30543" onclick="CopyToClipboard('tag30543');return false;" class="tag-decoration">release-v0.31</div><div id="tag24807" onclick="CopyToClipboard('tag24807');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/cbeae6b8c01494466cd2c297d97c16fc1685d7dd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/33554141182" target="_blank">2026-09-01 20:14:23</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
