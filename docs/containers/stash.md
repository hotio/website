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
<tr><td><div id="tag10204" onclick="CopyToClipboard('tag10204');return false;" class="tag-decoration">nightly</div><div id="tag3782" onclick="CopyToClipboard('tag3782');return false;" class="tag-decoration">nightly-31be5e3</div><div id="tag29898" onclick="CopyToClipboard('tag29898');return false;" class="tag-decoration">nightly-b6b09dd5fd9b6be6e36deb3d20bc5c4cf52450a6</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/31be5e3ec987e24ed03345b63a8e4ad6539ea2ea" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/36615780316" target="_blank">2026-09-29 18:57:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22876" onclick="CopyToClipboard('tag22876');return false;" class="tag-decoration">release</div><div id="tag8265" onclick="CopyToClipboard('tag8265');return false;" class="tag-decoration">release-9f45c66</div><div id="tag28601" onclick="CopyToClipboard('tag28601');return false;" class="tag-decoration">release-0.31.1</div><div id="tag2205" onclick="CopyToClipboard('tag2205');return false;" class="tag-decoration">release-v0</div><div id="tag12643" onclick="CopyToClipboard('tag12643');return false;" class="tag-decoration">release-v0.31</div><div id="tag13422" onclick="CopyToClipboard('tag13422');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/9f45c669f0fdcd9fa52ad59e8f5ef572e3fe8071" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/36504310494" target="_blank">2026-09-29 00:41:20</a></td></tr>
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
