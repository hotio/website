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
<tr><td><div id="tag15504" onclick="CopyToClipboard('tag15504');return false;" class="tag-decoration">nightly</div><div id="tag10989" onclick="CopyToClipboard('tag10989');return false;" class="tag-decoration">nightly-e19d331</div><div id="tag27226" onclick="CopyToClipboard('tag27226');return false;" class="tag-decoration">nightly-c39e1657aeb87bcde4fdcafc5cef96dcca3c4316</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e19d331baada5388b927ed755db9363be41c1cd1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27160907272" target="_blank">2026-06-08 19:13:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17500" onclick="CopyToClipboard('tag17500');return false;" class="tag-decoration">release</div><div id="tag29068" onclick="CopyToClipboard('tag29068');return false;" class="tag-decoration">release-5ed75c5</div><div id="tag2063" onclick="CopyToClipboard('tag2063');return false;" class="tag-decoration">release-0.31.1</div><div id="tag6268" onclick="CopyToClipboard('tag6268');return false;" class="tag-decoration">release-v0</div><div id="tag6035" onclick="CopyToClipboard('tag6035');return false;" class="tag-decoration">release-v0.31</div><div id="tag21248" onclick="CopyToClipboard('tag21248');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/5ed75c5e62a1999ba7058a6cd8701178863b0603" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27160908009" target="_blank">2026-06-08 19:13:17</a></td></tr>
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
