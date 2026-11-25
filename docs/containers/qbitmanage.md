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
<tr><td><div id="tag4879" onclick="CopyToClipboard('tag4879');return false;" class="tag-decoration">nightly</div><div id="tag15037" onclick="CopyToClipboard('tag15037');return false;" class="tag-decoration">nightly-fe708f9</div><div id="tag25730" onclick="CopyToClipboard('tag25730');return false;" class="tag-decoration">nightly-3954eabbd64c049d387cac1a49dabfdf83f396f1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/fe708f9318cc2b5f81685fa8716c425c67ee1880" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/45536215021" target="_blank">2026-11-25 02:54:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17216" onclick="CopyToClipboard('tag17216');return false;" class="tag-decoration">release</div><div id="tag32652" onclick="CopyToClipboard('tag32652');return false;" class="tag-decoration">release-bbb03f6</div><div id="tag28628" onclick="CopyToClipboard('tag28628');return false;" class="tag-decoration">release-4.15.0</div><div id="tag25396" onclick="CopyToClipboard('tag25396');return false;" class="tag-decoration">release-v4</div><div id="tag3368" onclick="CopyToClipboard('tag3368');return false;" class="tag-decoration">release-v4.15</div><div id="tag15609" onclick="CopyToClipboard('tag15609');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/bbb03f6be38a644fa1e895b156654c418bd2d50d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/45460852149" target="_blank">2026-11-24 18:33:39</a></td></tr>
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
