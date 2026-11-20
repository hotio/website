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
<tr><td><div id="tag9784" onclick="CopyToClipboard('tag9784');return false;" class="tag-decoration">nightly</div><div id="tag21700" onclick="CopyToClipboard('tag21700');return false;" class="tag-decoration">nightly-88f5cf6</div><div id="tag31138" onclick="CopyToClipboard('tag31138');return false;" class="tag-decoration">nightly-987c211ca4acf4c62c2b77850b01d97c8b987755</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/88f5cf63652121706f4e9fc95000fe39bd92eea3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/44753979323" target="_blank">2026-11-20 14:29:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19949" onclick="CopyToClipboard('tag19949');return false;" class="tag-decoration">release</div><div id="tag24098" onclick="CopyToClipboard('tag24098');return false;" class="tag-decoration">release-3d96e9e</div><div id="tag3358" onclick="CopyToClipboard('tag3358');return false;" class="tag-decoration">release-0.32.0</div><div id="tag13734" onclick="CopyToClipboard('tag13734');return false;" class="tag-decoration">release-v0</div><div id="tag20021" onclick="CopyToClipboard('tag20021');return false;" class="tag-decoration">release-v0.32</div><div id="tag4943" onclick="CopyToClipboard('tag4943');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/3d96e9ef0a358cb3fc8fdf0bd676997bbc2a6302" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/44754007660" target="_blank">2026-11-20 14:29:50</a></td></tr>
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
