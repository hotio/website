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
<tr><td><div id="tag21017" onclick="CopyToClipboard('tag21017');return false;" class="tag-decoration">nightly</div><div id="tag11257" onclick="CopyToClipboard('tag11257');return false;" class="tag-decoration">nightly-58be536</div><div id="tag30412" onclick="CopyToClipboard('tag30412');return false;" class="tag-decoration">nightly-9e9ad972643320e737c711884f10e4285f0f3a88</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/58be536b4e7df18499a8f8e106fc14258f644153" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/40464085385" target="_blank">2026-10-27 06:56:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2637" onclick="CopyToClipboard('tag2637');return false;" class="tag-decoration">release</div><div id="tag6517" onclick="CopyToClipboard('tag6517');return false;" class="tag-decoration">release-757d51c</div><div id="tag32595" onclick="CopyToClipboard('tag32595');return false;" class="tag-decoration">release-0.31.1</div><div id="tag3704" onclick="CopyToClipboard('tag3704');return false;" class="tag-decoration">release-v0</div><div id="tag7810" onclick="CopyToClipboard('tag7810');return false;" class="tag-decoration">release-v0.31</div><div id="tag8667" onclick="CopyToClipboard('tag8667');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/757d51c275360d7bc033f3bbf657e4b254676295" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/40408941132" target="_blank">2026-10-26 21:59:45</a></td></tr>
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
