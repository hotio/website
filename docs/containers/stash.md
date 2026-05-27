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
<tr><td><div id="tag1763" onclick="CopyToClipboard('tag1763');return false;" class="tag-decoration">nightly</div><div id="tag14523" onclick="CopyToClipboard('tag14523');return false;" class="tag-decoration">nightly-e14d57e</div><div id="tag5334" onclick="CopyToClipboard('tag5334');return false;" class="tag-decoration">nightly-4187d164b349f8442a4f31c72bb477302590a9a4</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e14d57e3e02a2c70a18605dba24ae1f87e5cf720" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26532959572" target="_blank">2026-05-27 19:12:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22096" onclick="CopyToClipboard('tag22096');return false;" class="tag-decoration">release</div><div id="tag18762" onclick="CopyToClipboard('tag18762');return false;" class="tag-decoration">release-6c349fc</div><div id="tag17702" onclick="CopyToClipboard('tag17702');return false;" class="tag-decoration">release-0.31.1</div><div id="tag22509" onclick="CopyToClipboard('tag22509');return false;" class="tag-decoration">release-v0</div><div id="tag25187" onclick="CopyToClipboard('tag25187');return false;" class="tag-decoration">release-v0.31</div><div id="tag26753" onclick="CopyToClipboard('tag26753');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/6c349fca69ac9f990b7d0bf621b0db514e66a417" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26532955831" target="_blank">2026-05-27 19:12:13</a></td></tr>
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
