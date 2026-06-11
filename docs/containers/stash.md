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
<tr><td><div id="tag28156" onclick="CopyToClipboard('tag28156');return false;" class="tag-decoration">nightly</div><div id="tag31745" onclick="CopyToClipboard('tag31745');return false;" class="tag-decoration">nightly-be3fa44</div><div id="tag31518" onclick="CopyToClipboard('tag31518');return false;" class="tag-decoration">nightly-db4b33f537bbcb091ea6375eccfc60b11d898f3d</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/be3fa443ee0cf3f8037498b53757eccf7f326e01" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27352353042" target="_blank">2026-06-11 14:01:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18373" onclick="CopyToClipboard('tag18373');return false;" class="tag-decoration">release</div><div id="tag29725" onclick="CopyToClipboard('tag29725');return false;" class="tag-decoration">release-556929b</div><div id="tag8787" onclick="CopyToClipboard('tag8787');return false;" class="tag-decoration">release-0.31.1</div><div id="tag1972" onclick="CopyToClipboard('tag1972');return false;" class="tag-decoration">release-v0</div><div id="tag26128" onclick="CopyToClipboard('tag26128');return false;" class="tag-decoration">release-v0.31</div><div id="tag32050" onclick="CopyToClipboard('tag32050');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/556929bbba5b653994d0bd1e050eeb7356897042" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27241685151" target="_blank">2026-06-09 23:08:34</a></td></tr>
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
