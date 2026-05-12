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
<tr><td><div id="tag30133" onclick="CopyToClipboard('tag30133');return false;" class="tag-decoration">nightly</div><div id="tag29777" onclick="CopyToClipboard('tag29777');return false;" class="tag-decoration">nightly-6ab8018</div><div id="tag11428" onclick="CopyToClipboard('tag11428');return false;" class="tag-decoration">nightly-80df250e36036fa351307a7eefd912ff0e431b5b</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/6ab80181d832e14e3bfa4064be400368913dd868" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25715042295" target="_blank">2026-05-12 05:19:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13018" onclick="CopyToClipboard('tag13018');return false;" class="tag-decoration">release</div><div id="tag5740" onclick="CopyToClipboard('tag5740');return false;" class="tag-decoration">release-edd1fdd</div><div id="tag19536" onclick="CopyToClipboard('tag19536');return false;" class="tag-decoration">release-0.31.1</div><div id="tag1432" onclick="CopyToClipboard('tag1432');return false;" class="tag-decoration">release-v0</div><div id="tag31396" onclick="CopyToClipboard('tag31396');return false;" class="tag-decoration">release-v0.31</div><div id="tag9692" onclick="CopyToClipboard('tag9692');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/edd1fdd6fa06d38c6a11e810fdceb6fc27901b80" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25700663159" target="_blank">2026-05-11 22:19:20</a></td></tr>
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
