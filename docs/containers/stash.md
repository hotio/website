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
<tr><td><div id="tag6955" onclick="CopyToClipboard('tag6955');return false;" class="tag-decoration">nightly</div><div id="tag3887" onclick="CopyToClipboard('tag3887');return false;" class="tag-decoration">nightly-680d95c</div><div id="tag8577" onclick="CopyToClipboard('tag8577');return false;" class="tag-decoration">nightly-28c2b52dcb3e749d90c5f3a3d382e99d4a8294b4</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/680d95c408de20e9567db996b9f39c12240664c8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28446289120" target="_blank">2026-06-30 13:01:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5463" onclick="CopyToClipboard('tag5463');return false;" class="tag-decoration">release</div><div id="tag4530" onclick="CopyToClipboard('tag4530');return false;" class="tag-decoration">release-4446556</div><div id="tag14444" onclick="CopyToClipboard('tag14444');return false;" class="tag-decoration">release-0.31.1</div><div id="tag7685" onclick="CopyToClipboard('tag7685');return false;" class="tag-decoration">release-v0</div><div id="tag9902" onclick="CopyToClipboard('tag9902');return false;" class="tag-decoration">release-v0.31</div><div id="tag857" onclick="CopyToClipboard('tag857');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/4446556095afa89d0be6284696649bb648739c97" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28401578067" target="_blank">2026-06-29 20:46:15</a></td></tr>
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
