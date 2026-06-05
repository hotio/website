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
<tr><td><div id="tag30650" onclick="CopyToClipboard('tag30650');return false;" class="tag-decoration">nightly</div><div id="tag1908" onclick="CopyToClipboard('tag1908');return false;" class="tag-decoration">nightly-1f1d547</div><div id="tag24986" onclick="CopyToClipboard('tag24986');return false;" class="tag-decoration">nightly-58f8b1719621f6e1bd71bd29cd5d536e04372e71</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/1f1d5475cc4aaa14398c4ded0afec1d0cbeda83a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27030732017" target="_blank">2026-06-05 17:45:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31660" onclick="CopyToClipboard('tag31660');return false;" class="tag-decoration">release</div><div id="tag28972" onclick="CopyToClipboard('tag28972');return false;" class="tag-decoration">release-14d1a31</div><div id="tag6312" onclick="CopyToClipboard('tag6312');return false;" class="tag-decoration">release-0.31.1</div><div id="tag7118" onclick="CopyToClipboard('tag7118');return false;" class="tag-decoration">release-v0</div><div id="tag30705" onclick="CopyToClipboard('tag30705');return false;" class="tag-decoration">release-v0.31</div><div id="tag17422" onclick="CopyToClipboard('tag17422');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/14d1a31f0dcb8224abcaccf7e45b602a599bf160" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27024882395" target="_blank">2026-06-05 15:46:35</a></td></tr>
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
