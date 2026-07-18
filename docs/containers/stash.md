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
<tr><td><div id="tag6857" onclick="CopyToClipboard('tag6857');return false;" class="tag-decoration">nightly</div><div id="tag12113" onclick="CopyToClipboard('tag12113');return false;" class="tag-decoration">nightly-0f64629</div><div id="tag8383" onclick="CopyToClipboard('tag8383');return false;" class="tag-decoration">nightly-8a3eae1a208e4894b4d96640bd647daa6cee457d</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/0f6462964f2b2968bb61df0de9d5de44a64c29f8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29624865347" target="_blank">2026-07-18 01:15:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28852" onclick="CopyToClipboard('tag28852');return false;" class="tag-decoration">release</div><div id="tag24127" onclick="CopyToClipboard('tag24127');return false;" class="tag-decoration">release-367b741</div><div id="tag7138" onclick="CopyToClipboard('tag7138');return false;" class="tag-decoration">release-0.31.1</div><div id="tag29780" onclick="CopyToClipboard('tag29780');return false;" class="tag-decoration">release-v0</div><div id="tag14887" onclick="CopyToClipboard('tag14887');return false;" class="tag-decoration">release-v0.31</div><div id="tag18137" onclick="CopyToClipboard('tag18137');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/367b741747684e63fadb641562782ea0655de610" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29537643839" target="_blank">2026-07-16 21:53:34</a></td></tr>
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
