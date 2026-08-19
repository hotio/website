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
<tr><td><div id="tag26161" onclick="CopyToClipboard('tag26161');return false;" class="tag-decoration">nightly</div><div id="tag30816" onclick="CopyToClipboard('tag30816');return false;" class="tag-decoration">nightly-d0ad3bf</div><div id="tag13605" onclick="CopyToClipboard('tag13605');return false;" class="tag-decoration">nightly-4c3d3a90f35c1656b89c4f3f13fc3e03b8431800</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/d0ad3bf09b5ea08f3de91575e4ef889ca28cd329" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/32269293859" target="_blank">2026-08-19 15:18:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5451" onclick="CopyToClipboard('tag5451');return false;" class="tag-decoration">release</div><div id="tag9979" onclick="CopyToClipboard('tag9979');return false;" class="tag-decoration">release-5c101dc</div><div id="tag19515" onclick="CopyToClipboard('tag19515');return false;" class="tag-decoration">release-0.31.1</div><div id="tag3814" onclick="CopyToClipboard('tag3814');return false;" class="tag-decoration">release-v0</div><div id="tag16253" onclick="CopyToClipboard('tag16253');return false;" class="tag-decoration">release-v0.31</div><div id="tag30049" onclick="CopyToClipboard('tag30049');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/5c101dc87371d2916fbe4b2147dd8509ba697749" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/32286322031" target="_blank">2026-08-19 18:15:32</a></td></tr>
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
