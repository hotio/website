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
<tr><td><div id="tag21140" onclick="CopyToClipboard('tag21140');return false;" class="tag-decoration">nightly</div><div id="tag7207" onclick="CopyToClipboard('tag7207');return false;" class="tag-decoration">nightly-cb373ce</div><div id="tag11329" onclick="CopyToClipboard('tag11329');return false;" class="tag-decoration">nightly-28c2b52dcb3e749d90c5f3a3d382e99d4a8294b4</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/cb373ce9cfe0ef123c3defb0dffc9a336c6c97ac" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28287043369" target="_blank">2026-06-27 10:51:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11789" onclick="CopyToClipboard('tag11789');return false;" class="tag-decoration">release</div><div id="tag20176" onclick="CopyToClipboard('tag20176');return false;" class="tag-decoration">release-78c5e64</div><div id="tag20036" onclick="CopyToClipboard('tag20036');return false;" class="tag-decoration">release-0.31.1</div><div id="tag9862" onclick="CopyToClipboard('tag9862');return false;" class="tag-decoration">release-v0</div><div id="tag4384" onclick="CopyToClipboard('tag4384');return false;" class="tag-decoration">release-v0.31</div><div id="tag18244" onclick="CopyToClipboard('tag18244');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/78c5e6475f4e453d0d8f346e382270702fe6622d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28208269602" target="_blank">2026-06-26 00:02:36</a></td></tr>
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
