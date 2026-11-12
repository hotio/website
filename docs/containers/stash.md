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
<tr><td><div id="tag23979" onclick="CopyToClipboard('tag23979');return false;" class="tag-decoration">nightly</div><div id="tag30975" onclick="CopyToClipboard('tag30975');return false;" class="tag-decoration">nightly-d5edb59</div><div id="tag29204" onclick="CopyToClipboard('tag29204');return false;" class="tag-decoration">nightly-a68d6e55e30855013f1e4f9c6aca59a68b7f46ee</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/d5edb593282aa63a52c87dbd0b6cec5d650f0a2d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/43226792884" target="_blank">2026-11-12 13:23:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6387" onclick="CopyToClipboard('tag6387');return false;" class="tag-decoration">release</div><div id="tag27733" onclick="CopyToClipboard('tag27733');return false;" class="tag-decoration">release-1453dd6</div><div id="tag13672" onclick="CopyToClipboard('tag13672');return false;" class="tag-decoration">release-0.32.0</div><div id="tag11669" onclick="CopyToClipboard('tag11669');return false;" class="tag-decoration">release-v0</div><div id="tag21360" onclick="CopyToClipboard('tag21360');return false;" class="tag-decoration">release-v0.32</div><div id="tag27874" onclick="CopyToClipboard('tag27874');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/1453dd6efe8809f3848373019acccb7fa7ca916a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/43226785725" target="_blank">2026-11-12 13:23:07</a></td></tr>
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
