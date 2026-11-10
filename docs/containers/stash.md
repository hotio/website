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
<tr><td><div id="tag25537" onclick="CopyToClipboard('tag25537');return false;" class="tag-decoration">nightly</div><div id="tag6112" onclick="CopyToClipboard('tag6112');return false;" class="tag-decoration">nightly-6ce48df</div><div id="tag15369" onclick="CopyToClipboard('tag15369');return false;" class="tag-decoration">nightly-aefc9373fe57e5cb32fbbb7215fd508ed799743f</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/6ce48df02b15f35d641fcb3a93650ae767b9097b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/42424028875" target="_blank">2026-11-07 23:10:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13645" onclick="CopyToClipboard('tag13645');return false;" class="tag-decoration">release</div><div id="tag23167" onclick="CopyToClipboard('tag23167');return false;" class="tag-decoration">release-21f6d85</div><div id="tag19154" onclick="CopyToClipboard('tag19154');return false;" class="tag-decoration">release-0.32.0</div><div id="tag16127" onclick="CopyToClipboard('tag16127');return false;" class="tag-decoration">release-v0</div><div id="tag5291" onclick="CopyToClipboard('tag5291');return false;" class="tag-decoration">release-v0.32</div><div id="tag5507" onclick="CopyToClipboard('tag5507');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/21f6d85f3e72557707d553a58a425b8129f35dc7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/42849038872" target="_blank">2026-11-10 15:53:07</a></td></tr>
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
