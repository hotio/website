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
<tr><td><div id="tag6361" onclick="CopyToClipboard('tag6361');return false;" class="tag-decoration">nightly</div><div id="tag14781" onclick="CopyToClipboard('tag14781');return false;" class="tag-decoration">nightly-563e8eb</div><div id="tag26359" onclick="CopyToClipboard('tag26359');return false;" class="tag-decoration">nightly-d04ecc4f8e197c4f16023cb518b3fe9ec7bf0ed1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/563e8eb53f545a91845a73713685aef24c329aeb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26800118357" target="_blank">2026-06-02 05:20:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5543" onclick="CopyToClipboard('tag5543');return false;" class="tag-decoration">release</div><div id="tag29911" onclick="CopyToClipboard('tag29911');return false;" class="tag-decoration">release-d2bdd1e</div><div id="tag428" onclick="CopyToClipboard('tag428');return false;" class="tag-decoration">release-0.31.1</div><div id="tag26406" onclick="CopyToClipboard('tag26406');return false;" class="tag-decoration">release-v0</div><div id="tag17897" onclick="CopyToClipboard('tag17897');return false;" class="tag-decoration">release-v0.31</div><div id="tag2661" onclick="CopyToClipboard('tag2661');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/d2bdd1e1525e38d2316bcd4c741578a06a6f96cc" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26557644321" target="_blank">2026-05-28 05:59:43</a></td></tr>
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
