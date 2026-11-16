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
<tr><td><div id="tag16229" onclick="CopyToClipboard('tag16229');return false;" class="tag-decoration">nightly</div><div id="tag28597" onclick="CopyToClipboard('tag28597');return false;" class="tag-decoration">nightly-42cca08</div><div id="tag29211" onclick="CopyToClipboard('tag29211');return false;" class="tag-decoration">nightly-a2cd186bb35682e6c539528c2e9eb50d1ce719ee</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/42cca08b7a5db5bc9dfc30ef54d2faf7d858d896" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/43824666150" target="_blank">2026-11-16 07:33:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18661" onclick="CopyToClipboard('tag18661');return false;" class="tag-decoration">release</div><div id="tag9413" onclick="CopyToClipboard('tag9413');return false;" class="tag-decoration">release-eeb6a39</div><div id="tag27620" onclick="CopyToClipboard('tag27620');return false;" class="tag-decoration">release-4.15.0</div><div id="tag1183" onclick="CopyToClipboard('tag1183');return false;" class="tag-decoration">release-v4</div><div id="tag971" onclick="CopyToClipboard('tag971');return false;" class="tag-decoration">release-v4.15</div><div id="tag11846" onclick="CopyToClipboard('tag11846');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/eeb6a393e910ab298faac7b51f99dc3a9bacc13e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/42324503909" target="_blank">2026-11-07 01:31:14</a></td></tr>
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
