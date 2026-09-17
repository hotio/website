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
<tr><td><div id="tag20251" onclick="CopyToClipboard('tag20251');return false;" class="tag-decoration">nightly</div><div id="tag30300" onclick="CopyToClipboard('tag30300');return false;" class="tag-decoration">nightly-2702a96</div><div id="tag22358" onclick="CopyToClipboard('tag22358');return false;" class="tag-decoration">nightly-9a623a4be4152dd5308c2d725299d27fa4bf0187</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/2702a96c8cc1f0ee8ba0034d70e9c3ab739b44ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/35253106492" target="_blank">2026-09-17 17:29:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30941" onclick="CopyToClipboard('tag30941');return false;" class="tag-decoration">release</div><div id="tag17696" onclick="CopyToClipboard('tag17696');return false;" class="tag-decoration">release-1fa6f5f</div><div id="tag27040" onclick="CopyToClipboard('tag27040');return false;" class="tag-decoration">release-4.13.0</div><div id="tag18291" onclick="CopyToClipboard('tag18291');return false;" class="tag-decoration">release-v4</div><div id="tag28090" onclick="CopyToClipboard('tag28090');return false;" class="tag-decoration">release-v4.13</div><div id="tag19535" onclick="CopyToClipboard('tag19535');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/1fa6f5f5403fdbe14e044568331bbb4acb09301c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/34960235329" target="_blank">2026-09-15 10:52:01</a></td></tr>
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
