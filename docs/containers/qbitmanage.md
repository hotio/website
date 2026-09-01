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
<tr><td><div id="tag31508" onclick="CopyToClipboard('tag31508');return false;" class="tag-decoration">nightly</div><div id="tag6408" onclick="CopyToClipboard('tag6408');return false;" class="tag-decoration">nightly-607cbed</div><div id="tag2681" onclick="CopyToClipboard('tag2681');return false;" class="tag-decoration">nightly-ff1ec31137d0106330ef1e4e3f3fa4c7841ed4c8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/607cbed2f3d35767990b3a1e04edc087087dd25e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/33510649389" target="_blank">2026-09-01 12:58:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9772" onclick="CopyToClipboard('tag9772');return false;" class="tag-decoration">release</div><div id="tag30970" onclick="CopyToClipboard('tag30970');return false;" class="tag-decoration">release-d9fb001</div><div id="tag13100" onclick="CopyToClipboard('tag13100');return false;" class="tag-decoration">release-4.12.0</div><div id="tag24588" onclick="CopyToClipboard('tag24588');return false;" class="tag-decoration">release-v4</div><div id="tag19386" onclick="CopyToClipboard('tag19386');return false;" class="tag-decoration">release-v4.12</div><div id="tag8033" onclick="CopyToClipboard('tag8033');return false;" class="tag-decoration">release-v4.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/d9fb0018e1ee458bc492237172214c62854b6935" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/33480555587" target="_blank">2026-09-01 07:06:20</a></td></tr>
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
