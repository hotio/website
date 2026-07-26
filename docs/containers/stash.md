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
<tr><td><div id="tag6608" onclick="CopyToClipboard('tag6608');return false;" class="tag-decoration">nightly</div><div id="tag20335" onclick="CopyToClipboard('tag20335');return false;" class="tag-decoration">nightly-1f474cc</div><div id="tag26726" onclick="CopyToClipboard('tag26726');return false;" class="tag-decoration">nightly-afdaa082b63708793d83312e692562aa36821f50</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/1f474ccca5d36e4af1362699385c92f056b42b50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30215647865" target="_blank">2026-07-26 18:52:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25062" onclick="CopyToClipboard('tag25062');return false;" class="tag-decoration">release</div><div id="tag12910" onclick="CopyToClipboard('tag12910');return false;" class="tag-decoration">release-ce64161</div><div id="tag21892" onclick="CopyToClipboard('tag21892');return false;" class="tag-decoration">release-0.31.1</div><div id="tag17589" onclick="CopyToClipboard('tag17589');return false;" class="tag-decoration">release-v0</div><div id="tag25154" onclick="CopyToClipboard('tag25154');return false;" class="tag-decoration">release-v0.31</div><div id="tag3428" onclick="CopyToClipboard('tag3428');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/ce64161beae8d90485bbc9e9e12f040ed82702e8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30032241699" target="_blank">2026-07-23 18:05:43</a></td></tr>
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
