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
<tr><td><div id="tag13726" onclick="CopyToClipboard('tag13726');return false;" class="tag-decoration">nightly</div><div id="tag26321" onclick="CopyToClipboard('tag26321');return false;" class="tag-decoration">nightly-7ff4eb5</div><div id="tag5863" onclick="CopyToClipboard('tag5863');return false;" class="tag-decoration">nightly-34f8a384a11a45bd8eeb8fea15d163db643236bc</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/7ff4eb56e417685a07b307d4329b339738596a4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/42142454869" target="_blank">2026-11-06 01:14:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2309" onclick="CopyToClipboard('tag2309');return false;" class="tag-decoration">release</div><div id="tag11772" onclick="CopyToClipboard('tag11772');return false;" class="tag-decoration">release-3a8b760</div><div id="tag30803" onclick="CopyToClipboard('tag30803');return false;" class="tag-decoration">release-0.32.0</div><div id="tag31088" onclick="CopyToClipboard('tag31088');return false;" class="tag-decoration">release-v0</div><div id="tag19762" onclick="CopyToClipboard('tag19762');return false;" class="tag-decoration">release-v0.32</div><div id="tag15072" onclick="CopyToClipboard('tag15072');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/3a8b760d189801f9139a076031c68d39e330efd9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/41974566927" target="_blank">2026-11-05 05:31:41</a></td></tr>
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
