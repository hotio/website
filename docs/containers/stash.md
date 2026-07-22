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
<tr><td><div id="tag21668" onclick="CopyToClipboard('tag21668');return false;" class="tag-decoration">nightly</div><div id="tag24203" onclick="CopyToClipboard('tag24203');return false;" class="tag-decoration">nightly-56b7088</div><div id="tag30060" onclick="CopyToClipboard('tag30060');return false;" class="tag-decoration">nightly-0821d2c02bfce9b0cf51f66678506c8a10c8849a</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/56b7088eefc54182aab947da02b0b97fe3c2cca6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29944787347" target="_blank">2026-07-22 18:00:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4279" onclick="CopyToClipboard('tag4279');return false;" class="tag-decoration">release</div><div id="tag7499" onclick="CopyToClipboard('tag7499');return false;" class="tag-decoration">release-ea13b07</div><div id="tag32330" onclick="CopyToClipboard('tag32330');return false;" class="tag-decoration">release-0.31.1</div><div id="tag16940" onclick="CopyToClipboard('tag16940');return false;" class="tag-decoration">release-v0</div><div id="tag6674" onclick="CopyToClipboard('tag6674');return false;" class="tag-decoration">release-v0.31</div><div id="tag9257" onclick="CopyToClipboard('tag9257');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/ea13b071122823f2eec4e0b4ecad4d60b314a346" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29944792234" target="_blank">2026-07-22 18:00:16</a></td></tr>
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
