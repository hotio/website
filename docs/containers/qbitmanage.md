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
<tr><td><div id="tag4918" onclick="CopyToClipboard('tag4918');return false;" class="tag-decoration">nightly</div><div id="tag23549" onclick="CopyToClipboard('tag23549');return false;" class="tag-decoration">nightly-1ce9c14</div><div id="tag17811" onclick="CopyToClipboard('tag17811');return false;" class="tag-decoration">nightly-4cc4403d36a066a5d32d462041b3ce6f1a8cabee</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/1ce9c144186632d615215cf962238651c82cd7ae" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25707203899" target="_blank">2026-05-12 01:16:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25056" onclick="CopyToClipboard('tag25056');return false;" class="tag-decoration">release</div><div id="tag30461" onclick="CopyToClipboard('tag30461');return false;" class="tag-decoration">release-a9c79fb</div><div id="tag19610" onclick="CopyToClipboard('tag19610');return false;" class="tag-decoration">release-4.7.0</div><div id="tag5086" onclick="CopyToClipboard('tag5086');return false;" class="tag-decoration">release-v4</div><div id="tag20366" onclick="CopyToClipboard('tag20366');return false;" class="tag-decoration">release-v4.7</div><div id="tag1247" onclick="CopyToClipboard('tag1247');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/a9c79fb8549abd4f3ba8fd74b9780c75d0ee9e3d" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25706866859" target="_blank">2026-05-12 01:06:22</a></td></tr>
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
