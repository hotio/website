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
<tr><td><div id="tag12658" onclick="CopyToClipboard('tag12658');return false;" class="tag-decoration">nightly</div><div id="tag9793" onclick="CopyToClipboard('tag9793');return false;" class="tag-decoration">nightly-0c8da3e</div><div id="tag3342" onclick="CopyToClipboard('tag3342');return false;" class="tag-decoration">nightly-22d2dbc46b17d23d34b1381c04c5e51115ee3632</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/0c8da3e698bf6e0ec7c273e64d6d0b939e88ae75" target="_blank">Version update: 2c8a0ad1924d95ccb00954ddc360005735017699 => 22d2dbc46b17d23d34b1381c04c5e51115ee3632</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24758347447" target="_blank">2026-04-22 03:17:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21730" onclick="CopyToClipboard('tag21730');return false;" class="tag-decoration">release</div><div id="tag6600" onclick="CopyToClipboard('tag6600');return false;" class="tag-decoration">release-2cfa3ca</div><div id="tag25285" onclick="CopyToClipboard('tag25285');return false;" class="tag-decoration">release-0.31.1</div><div id="tag10184" onclick="CopyToClipboard('tag10184');return false;" class="tag-decoration">release-v0</div><div id="tag28899" onclick="CopyToClipboard('tag28899');return false;" class="tag-decoration">release-v0.31</div><div id="tag1847" onclick="CopyToClipboard('tag1847');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/2cfa3caf080c34572a6b0a3606135961f5e0e45a" target="_blank">Version update: 0.31.1 => 0.31.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24656406068" target="_blank">2026-04-20 08:28:37</a></td></tr>
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
