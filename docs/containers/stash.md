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
<tr><td><div id="tag11295" onclick="CopyToClipboard('tag11295');return false;" class="tag-decoration">nightly</div><div id="tag30031" onclick="CopyToClipboard('tag30031');return false;" class="tag-decoration">nightly-3eccb56</div><div id="tag14694" onclick="CopyToClipboard('tag14694');return false;" class="tag-decoration">nightly-9e9ad972643320e737c711884f10e4285f0f3a88</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/3eccb56c71b0c05b5dd26c820d8bf623b68207d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/40560052205" target="_blank">2026-10-27 18:26:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4272" onclick="CopyToClipboard('tag4272');return false;" class="tag-decoration">release</div><div id="tag19701" onclick="CopyToClipboard('tag19701');return false;" class="tag-decoration">release-59c92f5</div><div id="tag20809" onclick="CopyToClipboard('tag20809');return false;" class="tag-decoration">release-0.32.0</div><div id="tag11483" onclick="CopyToClipboard('tag11483');return false;" class="tag-decoration">release-v0</div><div id="tag10248" onclick="CopyToClipboard('tag10248');return false;" class="tag-decoration">release-v0.32</div><div id="tag24638" onclick="CopyToClipboard('tag24638');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/59c92f5288ae3d46b649606b6295f75f3ea32ba3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/41505115569" target="_blank">2026-11-02 18:55:25</a></td></tr>
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
