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
<tr><td><div id="tag23053" onclick="CopyToClipboard('tag23053');return false;" class="tag-decoration">nightly</div><div id="tag24423" onclick="CopyToClipboard('tag24423');return false;" class="tag-decoration">nightly-8505820</div><div id="tag22587" onclick="CopyToClipboard('tag22587');return false;" class="tag-decoration">nightly-afdaa082b63708793d83312e692562aa36821f50</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/850582038093a5d22bbac6b3d61e211244e8f8ac" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30497259585" target="_blank">2026-07-29 22:45:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28270" onclick="CopyToClipboard('tag28270');return false;" class="tag-decoration">release</div><div id="tag26983" onclick="CopyToClipboard('tag26983');return false;" class="tag-decoration">release-5b9c8b8</div><div id="tag4227" onclick="CopyToClipboard('tag4227');return false;" class="tag-decoration">release-0.31.1</div><div id="tag15853" onclick="CopyToClipboard('tag15853');return false;" class="tag-decoration">release-v0</div><div id="tag17917" onclick="CopyToClipboard('tag17917');return false;" class="tag-decoration">release-v0.31</div><div id="tag24500" onclick="CopyToClipboard('tag24500');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/5b9c8b80825ec27267aec2b6fb79e648b39e96a9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30289320499" target="_blank">2026-07-27 17:27:24</a></td></tr>
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
