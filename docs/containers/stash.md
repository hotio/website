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
<tr><td><div id="tag11857" onclick="CopyToClipboard('tag11857');return false;" class="tag-decoration">nightly</div><div id="tag25654" onclick="CopyToClipboard('tag25654');return false;" class="tag-decoration">nightly-471d423</div><div id="tag7373" onclick="CopyToClipboard('tag7373');return false;" class="tag-decoration">nightly-e6e87d64d69ab62c5d8a61a5811abe0cff05d389</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/471d4239ebecb3583fcc4ea9cefa061eb86c6f14" target="_blank">Version update: 2da8074316f4f362eeb95bd7d33053e843a117e7 => e6e87d64d69ab62c5d8a61a5811abe0cff05d389</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23737349358" target="_blank">2026-03-30 09:19:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17658" onclick="CopyToClipboard('tag17658');return false;" class="tag-decoration">release</div><div id="tag6029" onclick="CopyToClipboard('tag6029');return false;" class="tag-decoration">release-1ddcca1</div><div id="tag12438" onclick="CopyToClipboard('tag12438');return false;" class="tag-decoration">release-0.31.0</div><div id="tag10126" onclick="CopyToClipboard('tag10126');return false;" class="tag-decoration">release-v0</div><div id="tag16717" onclick="CopyToClipboard('tag16717');return false;" class="tag-decoration">release-v0.31</div><div id="tag15873" onclick="CopyToClipboard('tag15873');return false;" class="tag-decoration">release-v0.31.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/1ddcca1d3e2d22d65ff7fa3eea03be6c9247058b" target="_blank">Version update: 0.30.1 => 0.31.0</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23726748967" target="_blank">2026-03-30 03:33:06</a></td></tr>
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
