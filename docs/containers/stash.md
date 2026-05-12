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
<tr><td><div id="tag27608" onclick="CopyToClipboard('tag27608');return false;" class="tag-decoration">nightly</div><div id="tag11611" onclick="CopyToClipboard('tag11611');return false;" class="tag-decoration">nightly-6ab8018</div><div id="tag22342" onclick="CopyToClipboard('tag22342');return false;" class="tag-decoration">nightly-80df250e36036fa351307a7eefd912ff0e431b5b</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/6ab80181d832e14e3bfa4064be400368913dd868" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25715042295" target="_blank">2026-05-12 05:19:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22639" onclick="CopyToClipboard('tag22639');return false;" class="tag-decoration">release</div><div id="tag6981" onclick="CopyToClipboard('tag6981');return false;" class="tag-decoration">release-e9a1e8a</div><div id="tag31640" onclick="CopyToClipboard('tag31640');return false;" class="tag-decoration">release-0.31.1</div><div id="tag16970" onclick="CopyToClipboard('tag16970');return false;" class="tag-decoration">release-v0</div><div id="tag2601" onclick="CopyToClipboard('tag2601');return false;" class="tag-decoration">release-v0.31</div><div id="tag6576" onclick="CopyToClipboard('tag6576');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e9a1e8ab80ac8232aa57b54f4ad47bdcb95f9d3d" target="_blank">add auth for github api</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25715635776" target="_blank">2026-05-12 05:36:20</a></td></tr>
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
