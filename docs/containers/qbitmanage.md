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
<tr><td><div id="tag15843" onclick="CopyToClipboard('tag15843');return false;" class="tag-decoration">nightly</div><div id="tag5449" onclick="CopyToClipboard('tag5449');return false;" class="tag-decoration">nightly-cbbacb2</div><div id="tag29530" onclick="CopyToClipboard('tag29530');return false;" class="tag-decoration">nightly-1e82c99890389641677b170173226ccd6adf4ca9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/cbbacb22cf20ea90859e11c1d2606521335a92a5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39205413239" target="_blank">2026-10-19 05:36:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1434" onclick="CopyToClipboard('tag1434');return false;" class="tag-decoration">release</div><div id="tag25990" onclick="CopyToClipboard('tag25990');return false;" class="tag-decoration">release-668d514</div><div id="tag6176" onclick="CopyToClipboard('tag6176');return false;" class="tag-decoration">release-4.14.0</div><div id="tag22620" onclick="CopyToClipboard('tag22620');return false;" class="tag-decoration">release-v4</div><div id="tag23980" onclick="CopyToClipboard('tag23980');return false;" class="tag-decoration">release-v4.14</div><div id="tag16604" onclick="CopyToClipboard('tag16604');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/668d5145c7ed1d0eea9ae4c8387eca3de71c78f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39135032543" target="_blank">2026-10-18 14:13:30</a></td></tr>
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
