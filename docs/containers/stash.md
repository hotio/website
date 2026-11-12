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
<tr><td><div id="tag31357" onclick="CopyToClipboard('tag31357');return false;" class="tag-decoration">nightly</div><div id="tag22725" onclick="CopyToClipboard('tag22725');return false;" class="tag-decoration">nightly-9fa3c8b</div><div id="tag27852" onclick="CopyToClipboard('tag27852');return false;" class="tag-decoration">nightly-47057616fe9da0cf38cfa8c39ab160e5441eeafc</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/9fa3c8b2e5448fb1c1c73a93152edefff7cd5d55" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/43307880339" target="_blank">2026-11-12 21:12:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26341" onclick="CopyToClipboard('tag26341');return false;" class="tag-decoration">release</div><div id="tag20673" onclick="CopyToClipboard('tag20673');return false;" class="tag-decoration">release-1453dd6</div><div id="tag2058" onclick="CopyToClipboard('tag2058');return false;" class="tag-decoration">release-0.32.0</div><div id="tag16467" onclick="CopyToClipboard('tag16467');return false;" class="tag-decoration">release-v0</div><div id="tag1961" onclick="CopyToClipboard('tag1961');return false;" class="tag-decoration">release-v0.32</div><div id="tag24317" onclick="CopyToClipboard('tag24317');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/1453dd6efe8809f3848373019acccb7fa7ca916a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/43226785725" target="_blank">2026-11-12 13:23:07</a></td></tr>
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
