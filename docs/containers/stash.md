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
<tr><td><div id="tag8780" onclick="CopyToClipboard('tag8780');return false;" class="tag-decoration">nightly</div><div id="tag482" onclick="CopyToClipboard('tag482');return false;" class="tag-decoration">nightly-7fb433e</div><div id="tag25361" onclick="CopyToClipboard('tag25361');return false;" class="tag-decoration">nightly-7c2428e6825eb8cf2eb21270d8bc13090a37188c</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/7fb433e8362e4f3797639adb10b90eb3495ccac2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/40371691200" target="_blank">2026-10-26 17:46:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19134" onclick="CopyToClipboard('tag19134');return false;" class="tag-decoration">release</div><div id="tag10838" onclick="CopyToClipboard('tag10838');return false;" class="tag-decoration">release-757d51c</div><div id="tag3511" onclick="CopyToClipboard('tag3511');return false;" class="tag-decoration">release-0.31.1</div><div id="tag967" onclick="CopyToClipboard('tag967');return false;" class="tag-decoration">release-v0</div><div id="tag26017" onclick="CopyToClipboard('tag26017');return false;" class="tag-decoration">release-v0.31</div><div id="tag2545" onclick="CopyToClipboard('tag2545');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/757d51c275360d7bc033f3bbf657e4b254676295" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/40408941132" target="_blank">2026-10-26 21:59:45</a></td></tr>
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
