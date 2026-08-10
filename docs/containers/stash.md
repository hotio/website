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
<tr><td><div id="tag29049" onclick="CopyToClipboard('tag29049');return false;" class="tag-decoration">nightly</div><div id="tag7382" onclick="CopyToClipboard('tag7382');return false;" class="tag-decoration">nightly-4fa70fb</div><div id="tag5457" onclick="CopyToClipboard('tag5457');return false;" class="tag-decoration">nightly-48b1409c40db7f21c4b6162b76e8f955409bffa4</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/4fa70fb31cb71fbd110d3e296e640cd4557f780a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/31410142126" target="_blank">2026-08-10 16:40:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6922" onclick="CopyToClipboard('tag6922');return false;" class="tag-decoration">release</div><div id="tag32247" onclick="CopyToClipboard('tag32247');return false;" class="tag-decoration">release-bbf599f</div><div id="tag5920" onclick="CopyToClipboard('tag5920');return false;" class="tag-decoration">release-0.31.1</div><div id="tag28116" onclick="CopyToClipboard('tag28116');return false;" class="tag-decoration">release-v0</div><div id="tag5202" onclick="CopyToClipboard('tag5202');return false;" class="tag-decoration">release-v0.31</div><div id="tag24794" onclick="CopyToClipboard('tag24794');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/bbf599fc0f6c10d5812966adf738c88b30d1e207" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/31410148284" target="_blank">2026-08-10 16:40:08</a></td></tr>
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
