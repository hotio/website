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
<tr><td><div id="tag23056" onclick="CopyToClipboard('tag23056');return false;" class="tag-decoration">nightly</div><div id="tag2321" onclick="CopyToClipboard('tag2321');return false;" class="tag-decoration">nightly-9093e0f</div><div id="tag3357" onclick="CopyToClipboard('tag3357');return false;" class="tag-decoration">nightly-79212c402823f40066ce3e9ff757cacb44269443</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/9093e0ff8e39ab0e0d776ebd2f60ea3d500d7b46" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45906235534" target="_blank">2026-11-26 22:40:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24604" onclick="CopyToClipboard('tag24604');return false;" class="tag-decoration">release</div><div id="tag23485" onclick="CopyToClipboard('tag23485');return false;" class="tag-decoration">release-14448d6</div><div id="tag13526" onclick="CopyToClipboard('tag13526');return false;" class="tag-decoration">release-0.32.0</div><div id="tag6345" onclick="CopyToClipboard('tag6345');return false;" class="tag-decoration">release-v0</div><div id="tag21797" onclick="CopyToClipboard('tag21797');return false;" class="tag-decoration">release-v0.32</div><div id="tag12171" onclick="CopyToClipboard('tag12171');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/14448d654fb2c9553518465d5db3414b33b5e97c" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45827804931" target="_blank">2026-11-26 13:18:01</a></td></tr>
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
