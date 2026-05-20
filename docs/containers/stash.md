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
<tr><td><div id="tag30373" onclick="CopyToClipboard('tag30373');return false;" class="tag-decoration">nightly</div><div id="tag7008" onclick="CopyToClipboard('tag7008');return false;" class="tag-decoration">nightly-7c4e15b</div><div id="tag25646" onclick="CopyToClipboard('tag25646');return false;" class="tag-decoration">nightly-4a4cd1c5d1a2d9d1343abd10f5d1934ba8bf7352</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/7c4e15ba9f9203e7f4d2d8bb218d0fc41633f949" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26176660931" target="_blank">2026-05-20 16:43:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30444" onclick="CopyToClipboard('tag30444');return false;" class="tag-decoration">release</div><div id="tag30400" onclick="CopyToClipboard('tag30400');return false;" class="tag-decoration">release-28d8369</div><div id="tag15964" onclick="CopyToClipboard('tag15964');return false;" class="tag-decoration">release-0.31.1</div><div id="tag2933" onclick="CopyToClipboard('tag2933');return false;" class="tag-decoration">release-v0</div><div id="tag9114" onclick="CopyToClipboard('tag9114');return false;" class="tag-decoration">release-v0.31</div><div id="tag7136" onclick="CopyToClipboard('tag7136');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/28d836938e9c099ef0b0a1246aa1d6177d703042" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26176663937" target="_blank">2026-05-20 16:43:56</a></td></tr>
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
