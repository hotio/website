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
<tr><td><div id="tag17586" onclick="CopyToClipboard('tag17586');return false;" class="tag-decoration">nightly</div><div id="tag31593" onclick="CopyToClipboard('tag31593');return false;" class="tag-decoration">nightly-06309f0</div><div id="tag15663" onclick="CopyToClipboard('tag15663');return false;" class="tag-decoration">nightly-e7d33c9bd131f1f5d781b850de30735943fa1195</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/06309f039933ae1029eefd732cfcac9e72a65c9f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/37546368062" target="_blank">2026-10-06 23:24:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18576" onclick="CopyToClipboard('tag18576');return false;" class="tag-decoration">release</div><div id="tag10200" onclick="CopyToClipboard('tag10200');return false;" class="tag-decoration">release-b464363</div><div id="tag13400" onclick="CopyToClipboard('tag13400');return false;" class="tag-decoration">release-0.31.1</div><div id="tag12075" onclick="CopyToClipboard('tag12075');return false;" class="tag-decoration">release-v0</div><div id="tag21566" onclick="CopyToClipboard('tag21566');return false;" class="tag-decoration">release-v0.31</div><div id="tag30254" onclick="CopyToClipboard('tag30254');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/b464363568527f9b59d484eb30d2b06cb4a2231f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/37656070527" target="_blank">2026-10-07 17:03:34</a></td></tr>
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
