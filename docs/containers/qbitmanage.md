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
<tr><td><div id="tag28" onclick="CopyToClipboard('tag28');return false;" class="tag-decoration">nightly</div><div id="tag679" onclick="CopyToClipboard('tag679');return false;" class="tag-decoration">nightly-ef471e4</div><div id="tag16786" onclick="CopyToClipboard('tag16786');return false;" class="tag-decoration">nightly-aee93b588c458ffc6723ea21518de54cfd45b6f9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/ef471e43c791507950754d89fe2b3d04bdaf230e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/34477777354" target="_blank">2026-09-10 12:37:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6002" onclick="CopyToClipboard('tag6002');return false;" class="tag-decoration">release</div><div id="tag11651" onclick="CopyToClipboard('tag11651');return false;" class="tag-decoration">release-aa4fd79</div><div id="tag31221" onclick="CopyToClipboard('tag31221');return false;" class="tag-decoration">release-4.13.0</div><div id="tag17325" onclick="CopyToClipboard('tag17325');return false;" class="tag-decoration">release-v4</div><div id="tag13370" onclick="CopyToClipboard('tag13370');return false;" class="tag-decoration">release-v4.13</div><div id="tag18144" onclick="CopyToClipboard('tag18144');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/aa4fd79aff781838ef0eaadac8ac14b8cc6a99d8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/34477781374" target="_blank">2026-09-10 12:37:34</a></td></tr>
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
