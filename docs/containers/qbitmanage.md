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
<tr><td><div id="tag5135" onclick="CopyToClipboard('tag5135');return false;" class="tag-decoration">nightly</div><div id="tag21761" onclick="CopyToClipboard('tag21761');return false;" class="tag-decoration">nightly-36de51f</div><div id="tag23493" onclick="CopyToClipboard('tag23493');return false;" class="tag-decoration">nightly-77daad37810e7e2572c5b45fb42a19f1ff62196d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/36de51f55db2397392b3ff827eff5a4e2eae7b3a" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/44862492175" target="_blank">2026-11-21 03:42:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17869" onclick="CopyToClipboard('tag17869');return false;" class="tag-decoration">release</div><div id="tag13584" onclick="CopyToClipboard('tag13584');return false;" class="tag-decoration">release-a123d8c</div><div id="tag4695" onclick="CopyToClipboard('tag4695');return false;" class="tag-decoration">release-4.15.0</div><div id="tag5336" onclick="CopyToClipboard('tag5336');return false;" class="tag-decoration">release-v4</div><div id="tag11113" onclick="CopyToClipboard('tag11113');return false;" class="tag-decoration">release-v4.15</div><div id="tag17445" onclick="CopyToClipboard('tag17445');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/a123d8c283ec21eb06905bb5b549a0cfae849969" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/44862490502" target="_blank">2026-11-21 03:42:21</a></td></tr>
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
