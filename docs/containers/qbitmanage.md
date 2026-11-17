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
<tr><td><div id="tag1829" onclick="CopyToClipboard('tag1829');return false;" class="tag-decoration">nightly</div><div id="tag16662" onclick="CopyToClipboard('tag16662');return false;" class="tag-decoration">nightly-c2cca5e</div><div id="tag14600" onclick="CopyToClipboard('tag14600');return false;" class="tag-decoration">nightly-66b700bd9237dbe459e856d19e9064e6177eca9a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/c2cca5e7e943dd76a9ab7c85713076d5277fab88" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/44060757761" target="_blank">2026-11-17 10:00:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag542" onclick="CopyToClipboard('tag542');return false;" class="tag-decoration">release</div><div id="tag24987" onclick="CopyToClipboard('tag24987');return false;" class="tag-decoration">release-eeb6a39</div><div id="tag23092" onclick="CopyToClipboard('tag23092');return false;" class="tag-decoration">release-4.15.0</div><div id="tag5055" onclick="CopyToClipboard('tag5055');return false;" class="tag-decoration">release-v4</div><div id="tag26086" onclick="CopyToClipboard('tag26086');return false;" class="tag-decoration">release-v4.15</div><div id="tag26202" onclick="CopyToClipboard('tag26202');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/eeb6a393e910ab298faac7b51f99dc3a9bacc13e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/42324503909" target="_blank">2026-11-07 01:31:14</a></td></tr>
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
