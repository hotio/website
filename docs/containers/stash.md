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
<tr><td><div id="tag21670" onclick="CopyToClipboard('tag21670');return false;" class="tag-decoration">nightly</div><div id="tag5654" onclick="CopyToClipboard('tag5654');return false;" class="tag-decoration">nightly-7ba99d8</div><div id="tag25690" onclick="CopyToClipboard('tag25690');return false;" class="tag-decoration">nightly-e27f68168e5fc2c82a69a7ad0c4dca3a5238ab03</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/7ba99d81601eb90998060c5de1f88eb5815a461e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/33444714310" target="_blank">2026-08-31 22:07:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17937" onclick="CopyToClipboard('tag17937');return false;" class="tag-decoration">release</div><div id="tag28673" onclick="CopyToClipboard('tag28673');return false;" class="tag-decoration">release-4afddd6</div><div id="tag16490" onclick="CopyToClipboard('tag16490');return false;" class="tag-decoration">release-0.31.1</div><div id="tag2612" onclick="CopyToClipboard('tag2612');return false;" class="tag-decoration">release-v0</div><div id="tag30300" onclick="CopyToClipboard('tag30300');return false;" class="tag-decoration">release-v0.31</div><div id="tag6926" onclick="CopyToClipboard('tag6926');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/4afddd6d9bdffa8eaae3137f301293180d7c745d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/33444729257" target="_blank">2026-08-31 22:07:33</a></td></tr>
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
