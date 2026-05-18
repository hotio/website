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
<tr><td><div id="tag791" onclick="CopyToClipboard('tag791');return false;" class="tag-decoration">nightly</div><div id="tag19986" onclick="CopyToClipboard('tag19986');return false;" class="tag-decoration">nightly-9857b82</div><div id="tag12082" onclick="CopyToClipboard('tag12082');return false;" class="tag-decoration">nightly-70437b48663d22904b63f6c12fb180aba06a3dbf</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/9857b8278fb5ebebcdadde54270756112ba9ba45" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26029125546" target="_blank">2026-05-18 10:54:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28311" onclick="CopyToClipboard('tag28311');return false;" class="tag-decoration">release</div><div id="tag7216" onclick="CopyToClipboard('tag7216');return false;" class="tag-decoration">release-a157e67</div><div id="tag19322" onclick="CopyToClipboard('tag19322');return false;" class="tag-decoration">release-0.31.1</div><div id="tag15245" onclick="CopyToClipboard('tag15245');return false;" class="tag-decoration">release-v0</div><div id="tag8275" onclick="CopyToClipboard('tag8275');return false;" class="tag-decoration">release-v0.31</div><div id="tag5739" onclick="CopyToClipboard('tag5739');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/a157e67da5bea96087de821c54f63717f6257cfd" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25988081820" target="_blank">2026-05-17 10:16:24</a></td></tr>
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
