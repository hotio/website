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
<tr><td><div id="tag17974" onclick="CopyToClipboard('tag17974');return false;" class="tag-decoration">nightly</div><div id="tag12633" onclick="CopyToClipboard('tag12633');return false;" class="tag-decoration">nightly-feb7c15</div><div id="tag11295" onclick="CopyToClipboard('tag11295');return false;" class="tag-decoration">nightly-a115a2f9575041189d33568b0b7f5529e42a8b8b</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/feb7c150cafb105a79027b3823015c0cacb412b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/40430872111" target="_blank">2026-10-27 01:09:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29791" onclick="CopyToClipboard('tag29791');return false;" class="tag-decoration">release</div><div id="tag17852" onclick="CopyToClipboard('tag17852');return false;" class="tag-decoration">release-757d51c</div><div id="tag27354" onclick="CopyToClipboard('tag27354');return false;" class="tag-decoration">release-0.31.1</div><div id="tag16834" onclick="CopyToClipboard('tag16834');return false;" class="tag-decoration">release-v0</div><div id="tag31160" onclick="CopyToClipboard('tag31160');return false;" class="tag-decoration">release-v0.31</div><div id="tag196" onclick="CopyToClipboard('tag196');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/757d51c275360d7bc033f3bbf657e4b254676295" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/40408941132" target="_blank">2026-10-26 21:59:45</a></td></tr>
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
