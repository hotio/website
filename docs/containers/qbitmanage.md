---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag21500" onclick="CopyToClipboard('tag21500');return false;" class="tag-decoration">nightly</div><div id="tag28656" onclick="CopyToClipboard('tag28656');return false;" class="tag-decoration">nightly-6bad523</div><div id="tag23631" onclick="CopyToClipboard('tag23631');return false;" class="tag-decoration">nightly-bb71b5373b8f792a3ed1ee83c44f1df737e8bfc8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/6bad5239390973e6d7ca2b37d4185fcfa5b6343a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27090719122" target="_blank">2026-06-07 11:05:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26703" onclick="CopyToClipboard('tag26703');return false;" class="tag-decoration">release</div><div id="tag17281" onclick="CopyToClipboard('tag17281');return false;" class="tag-decoration">release-fdffdcb</div><div id="tag20624" onclick="CopyToClipboard('tag20624');return false;" class="tag-decoration">release-4.8.0</div><div id="tag8153" onclick="CopyToClipboard('tag8153');return false;" class="tag-decoration">release-v4</div><div id="tag26342" onclick="CopyToClipboard('tag26342');return false;" class="tag-decoration">release-v4.8</div><div id="tag30790" onclick="CopyToClipboard('tag30790');return false;" class="tag-decoration">release-v4.8.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/fdffdcb54515fff2447846b3cc33735bbe3bba1b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26687060841" target="_blank">2026-05-30 15:02:22</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
