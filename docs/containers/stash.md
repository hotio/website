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
<tr><td><div id="tag30353" onclick="CopyToClipboard('tag30353');return false;" class="tag-decoration">nightly</div><div id="tag1840" onclick="CopyToClipboard('tag1840');return false;" class="tag-decoration">nightly-7a030bf</div><div id="tag10867" onclick="CopyToClipboard('tag10867');return false;" class="tag-decoration">nightly-631abda07aaf16078c479325e446014b8211ff9b</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/7a030bfed633f6d75cac9889d31588fdbb42e63e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27523222400" target="_blank">2026-06-15 04:03:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag675" onclick="CopyToClipboard('tag675');return false;" class="tag-decoration">release</div><div id="tag15965" onclick="CopyToClipboard('tag15965');return false;" class="tag-decoration">release-556929b</div><div id="tag4342" onclick="CopyToClipboard('tag4342');return false;" class="tag-decoration">release-0.31.1</div><div id="tag21386" onclick="CopyToClipboard('tag21386');return false;" class="tag-decoration">release-v0</div><div id="tag25326" onclick="CopyToClipboard('tag25326');return false;" class="tag-decoration">release-v0.31</div><div id="tag23731" onclick="CopyToClipboard('tag23731');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/556929bbba5b653994d0bd1e050eeb7356897042" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27241685151" target="_blank">2026-06-09 23:08:34</a></td></tr>
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
