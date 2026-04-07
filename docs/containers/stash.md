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
<tr><td><div id="tag14509" onclick="CopyToClipboard('tag14509');return false;" class="tag-decoration">nightly</div><div id="tag12509" onclick="CopyToClipboard('tag12509');return false;" class="tag-decoration">nightly-e548dae</div><div id="tag26686" onclick="CopyToClipboard('tag26686');return false;" class="tag-decoration">nightly-672147deaf4fc04ebf0e00c1a0797487765b2896</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e548dae2590a5fe025a14f0dbdb52e64dfaa3cc3" target="_blank">Version update: 0ed2992a72c606e14c859737690bd8c06030a461 => 672147deaf4fc04ebf0e00c1a0797487765b2896</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24057284616" target="_blank">2026-04-07 00:00:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30398" onclick="CopyToClipboard('tag30398');return false;" class="tag-decoration">release</div><div id="tag9390" onclick="CopyToClipboard('tag9390');return false;" class="tag-decoration">release-1ddcca1</div><div id="tag12968" onclick="CopyToClipboard('tag12968');return false;" class="tag-decoration">release-0.31.0</div><div id="tag9827" onclick="CopyToClipboard('tag9827');return false;" class="tag-decoration">release-v0</div><div id="tag16238" onclick="CopyToClipboard('tag16238');return false;" class="tag-decoration">release-v0.31</div><div id="tag15547" onclick="CopyToClipboard('tag15547');return false;" class="tag-decoration">release-v0.31.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/1ddcca1d3e2d22d65ff7fa3eea03be6c9247058b" target="_blank">Version update: 0.30.1 => 0.31.0</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23726748967" target="_blank">2026-03-30 03:33:06</a></td></tr>
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
