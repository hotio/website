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
<tr><td><div id="tag15021" onclick="CopyToClipboard('tag15021');return false;" class="tag-decoration">nightly</div><div id="tag21924" onclick="CopyToClipboard('tag21924');return false;" class="tag-decoration">nightly-675ec71</div><div id="tag8331" onclick="CopyToClipboard('tag8331');return false;" class="tag-decoration">nightly-b6b09dd5fd9b6be6e36deb3d20bc5c4cf52450a6</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/675ec714f9112eeb46a038e3178234930cd2e594" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/36049059363" target="_blank">2026-09-24 19:34:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4388" onclick="CopyToClipboard('tag4388');return false;" class="tag-decoration">release</div><div id="tag31172" onclick="CopyToClipboard('tag31172');return false;" class="tag-decoration">release-5602253</div><div id="tag11722" onclick="CopyToClipboard('tag11722');return false;" class="tag-decoration">release-0.31.1</div><div id="tag27346" onclick="CopyToClipboard('tag27346');return false;" class="tag-decoration">release-v0</div><div id="tag18643" onclick="CopyToClipboard('tag18643');return false;" class="tag-decoration">release-v0.31</div><div id="tag16242" onclick="CopyToClipboard('tag16242');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/5602253a2c876b118d5a2f5f4a327eaf148e6c80" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/36049055119" target="_blank">2026-09-24 19:34:18</a></td></tr>
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
