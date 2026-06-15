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
<tr><td><div id="tag32447" onclick="CopyToClipboard('tag32447');return false;" class="tag-decoration">nightly</div><div id="tag2008" onclick="CopyToClipboard('tag2008');return false;" class="tag-decoration">nightly-34957e4</div><div id="tag25550" onclick="CopyToClipboard('tag25550');return false;" class="tag-decoration">nightly-3e40b900b3022c2a2d31ecb5bb41f4ed4d6fcffb</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/34957e488a23bd64d67c4a3c06be648956d7fe60" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27581721267" target="_blank">2026-06-15 22:53:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23682" onclick="CopyToClipboard('tag23682');return false;" class="tag-decoration">release</div><div id="tag15943" onclick="CopyToClipboard('tag15943');return false;" class="tag-decoration">release-556929b</div><div id="tag5997" onclick="CopyToClipboard('tag5997');return false;" class="tag-decoration">release-0.31.1</div><div id="tag23784" onclick="CopyToClipboard('tag23784');return false;" class="tag-decoration">release-v0</div><div id="tag14745" onclick="CopyToClipboard('tag14745');return false;" class="tag-decoration">release-v0.31</div><div id="tag17011" onclick="CopyToClipboard('tag17011');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/556929bbba5b653994d0bd1e050eeb7356897042" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27241685151" target="_blank">2026-06-09 23:08:34</a></td></tr>
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
