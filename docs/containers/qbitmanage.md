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
<tr><td><div id="tag1897" onclick="CopyToClipboard('tag1897');return false;" class="tag-decoration">nightly</div><div id="tag28135" onclick="CopyToClipboard('tag28135');return false;" class="tag-decoration">nightly-c303d11</div><div id="tag27912" onclick="CopyToClipboard('tag27912');return false;" class="tag-decoration">nightly-33dc9455f34429673bdea593fdc97255db9f1a76</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/c303d11ad38ddb1db7e47d3738e28137e17a7493" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/41404012004" target="_blank">2026-11-02 07:05:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27426" onclick="CopyToClipboard('tag27426');return false;" class="tag-decoration">release</div><div id="tag16091" onclick="CopyToClipboard('tag16091');return false;" class="tag-decoration">release-db7da57</div><div id="tag5487" onclick="CopyToClipboard('tag5487');return false;" class="tag-decoration">release-4.14.0</div><div id="tag14706" onclick="CopyToClipboard('tag14706');return false;" class="tag-decoration">release-v4</div><div id="tag23508" onclick="CopyToClipboard('tag23508');return false;" class="tag-decoration">release-v4.14</div><div id="tag29216" onclick="CopyToClipboard('tag29216');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/db7da57b3abb442b6a18cfb000a518ba54eda34c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40589007427" target="_blank">2026-10-27 21:42:23</a></td></tr>
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
