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
<tr><td><div id="tag11615" onclick="CopyToClipboard('tag11615');return false;" class="tag-decoration">nightly</div><div id="tag32593" onclick="CopyToClipboard('tag32593');return false;" class="tag-decoration">nightly-a5779da</div><div id="tag16252" onclick="CopyToClipboard('tag16252');return false;" class="tag-decoration">nightly-e28ab14c6e2117c44b2ad9f82fe499187be0943c</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/a5779dae791de25328718ac22f4a645681d4ef65" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27241671027" target="_blank">2026-06-09 23:08:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14249" onclick="CopyToClipboard('tag14249');return false;" class="tag-decoration">release</div><div id="tag9370" onclick="CopyToClipboard('tag9370');return false;" class="tag-decoration">release-556929b</div><div id="tag239" onclick="CopyToClipboard('tag239');return false;" class="tag-decoration">release-0.31.1</div><div id="tag20083" onclick="CopyToClipboard('tag20083');return false;" class="tag-decoration">release-v0</div><div id="tag22521" onclick="CopyToClipboard('tag22521');return false;" class="tag-decoration">release-v0.31</div><div id="tag6687" onclick="CopyToClipboard('tag6687');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/556929bbba5b653994d0bd1e050eeb7356897042" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27241685151" target="_blank">2026-06-09 23:08:34</a></td></tr>
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
