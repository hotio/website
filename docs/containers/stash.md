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
<tr><td><div id="tag10551" onclick="CopyToClipboard('tag10551');return false;" class="tag-decoration">nightly</div><div id="tag17145" onclick="CopyToClipboard('tag17145');return false;" class="tag-decoration">nightly-b3d9fc5</div><div id="tag10703" onclick="CopyToClipboard('tag10703');return false;" class="tag-decoration">nightly-b6b09dd5fd9b6be6e36deb3d20bc5c4cf52450a6</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/b3d9fc5c01ff99369cf111eb060626dcd76affe3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/36069412492" target="_blank">2026-09-24 22:47:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23018" onclick="CopyToClipboard('tag23018');return false;" class="tag-decoration">release</div><div id="tag4661" onclick="CopyToClipboard('tag4661');return false;" class="tag-decoration">release-6004067</div><div id="tag4190" onclick="CopyToClipboard('tag4190');return false;" class="tag-decoration">release-0.31.1</div><div id="tag27119" onclick="CopyToClipboard('tag27119');return false;" class="tag-decoration">release-v0</div><div id="tag3859" onclick="CopyToClipboard('tag3859');return false;" class="tag-decoration">release-v0.31</div><div id="tag21003" onclick="CopyToClipboard('tag21003');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/6004067d16671e2dfbcbfb83ca5053ec0f650dd7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/36069367449" target="_blank">2026-09-24 22:47:18</a></td></tr>
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
