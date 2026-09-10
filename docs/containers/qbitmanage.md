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
<tr><td><div id="tag24782" onclick="CopyToClipboard('tag24782');return false;" class="tag-decoration">nightly</div><div id="tag12322" onclick="CopyToClipboard('tag12322');return false;" class="tag-decoration">nightly-ef471e4</div><div id="tag30578" onclick="CopyToClipboard('tag30578');return false;" class="tag-decoration">nightly-aee93b588c458ffc6723ea21518de54cfd45b6f9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/ef471e43c791507950754d89fe2b3d04bdaf230e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/34477777354" target="_blank">2026-09-10 12:37:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17749" onclick="CopyToClipboard('tag17749');return false;" class="tag-decoration">release</div><div id="tag14274" onclick="CopyToClipboard('tag14274');return false;" class="tag-decoration">release-7f84844</div><div id="tag7835" onclick="CopyToClipboard('tag7835');return false;" class="tag-decoration">release-4.13.0</div><div id="tag20992" onclick="CopyToClipboard('tag20992');return false;" class="tag-decoration">release-v4</div><div id="tag789" onclick="CopyToClipboard('tag789');return false;" class="tag-decoration">release-v4.13</div><div id="tag28383" onclick="CopyToClipboard('tag28383');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/7f84844232dc05c487ab7069dc438211104b9f5e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/34418349702" target="_blank">2026-09-09 23:45:53</a></td></tr>
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
