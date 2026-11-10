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
<tr><td><div id="tag20059" onclick="CopyToClipboard('tag20059');return false;" class="tag-decoration">nightly</div><div id="tag6579" onclick="CopyToClipboard('tag6579');return false;" class="tag-decoration">nightly-32d04ec</div><div id="tag19211" onclick="CopyToClipboard('tag19211');return false;" class="tag-decoration">nightly-58cf92c820388fc79de9b24583c97fd9419bc0d8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/32d04ec6e37abc0086f0e7374aa4a9bf35a6fba4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/42787823548" target="_blank">2026-11-10 09:05:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5965" onclick="CopyToClipboard('tag5965');return false;" class="tag-decoration">release</div><div id="tag17507" onclick="CopyToClipboard('tag17507');return false;" class="tag-decoration">release-eeb6a39</div><div id="tag31974" onclick="CopyToClipboard('tag31974');return false;" class="tag-decoration">release-4.15.0</div><div id="tag24524" onclick="CopyToClipboard('tag24524');return false;" class="tag-decoration">release-v4</div><div id="tag30422" onclick="CopyToClipboard('tag30422');return false;" class="tag-decoration">release-v4.15</div><div id="tag11018" onclick="CopyToClipboard('tag11018');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/eeb6a393e910ab298faac7b51f99dc3a9bacc13e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/42324503909" target="_blank">2026-11-07 01:31:14</a></td></tr>
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
