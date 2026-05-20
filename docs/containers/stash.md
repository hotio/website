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
<tr><td><div id="tag4891" onclick="CopyToClipboard('tag4891');return false;" class="tag-decoration">nightly</div><div id="tag12938" onclick="CopyToClipboard('tag12938');return false;" class="tag-decoration">nightly-4fe9f0f</div><div id="tag16507" onclick="CopyToClipboard('tag16507');return false;" class="tag-decoration">nightly-4a4cd1c5d1a2d9d1343abd10f5d1934ba8bf7352</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/4fe9f0f8ac47eb21ea72d1150905042e2f1a2c0e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26184206493" target="_blank">2026-05-20 19:11:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10566" onclick="CopyToClipboard('tag10566');return false;" class="tag-decoration">release</div><div id="tag6728" onclick="CopyToClipboard('tag6728');return false;" class="tag-decoration">release-7cb61dd</div><div id="tag26111" onclick="CopyToClipboard('tag26111');return false;" class="tag-decoration">release-0.31.1</div><div id="tag32478" onclick="CopyToClipboard('tag32478');return false;" class="tag-decoration">release-v0</div><div id="tag32248" onclick="CopyToClipboard('tag32248');return false;" class="tag-decoration">release-v0.31</div><div id="tag18829" onclick="CopyToClipboard('tag18829');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/7cb61ddb656914d71370b8b5a4b7ff9d2c6f3d2e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26184218767" target="_blank">2026-05-20 19:12:07</a></td></tr>
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
