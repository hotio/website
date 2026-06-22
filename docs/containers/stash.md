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
<tr><td><div id="tag2066" onclick="CopyToClipboard('tag2066');return false;" class="tag-decoration">nightly</div><div id="tag8542" onclick="CopyToClipboard('tag8542');return false;" class="tag-decoration">nightly-09475c5</div><div id="tag14811" onclick="CopyToClipboard('tag14811');return false;" class="tag-decoration">nightly-405c67de7edc0c59c14b4f1faf21141e5039a3e8</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/09475c58f3e7b17a9a21dcda6b9437d2adeffadc" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27971162607" target="_blank">2026-06-22 17:23:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21428" onclick="CopyToClipboard('tag21428');return false;" class="tag-decoration">release</div><div id="tag7749" onclick="CopyToClipboard('tag7749');return false;" class="tag-decoration">release-e9279b1</div><div id="tag27446" onclick="CopyToClipboard('tag27446');return false;" class="tag-decoration">release-0.31.1</div><div id="tag11679" onclick="CopyToClipboard('tag11679');return false;" class="tag-decoration">release-v0</div><div id="tag3504" onclick="CopyToClipboard('tag3504');return false;" class="tag-decoration">release-v0.31</div><div id="tag3127" onclick="CopyToClipboard('tag3127');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e9279b1da34841eff0213bb9f660366691bf88b5" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27971157089" target="_blank">2026-06-22 17:23:36</a></td></tr>
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
