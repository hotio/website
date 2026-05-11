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
<tr><td><div id="tag30137" onclick="CopyToClipboard('tag30137');return false;" class="tag-decoration">nightly</div><div id="tag17497" onclick="CopyToClipboard('tag17497');return false;" class="tag-decoration">nightly-44b7ee5</div><div id="tag21763" onclick="CopyToClipboard('tag21763');return false;" class="tag-decoration">nightly-f1be2582a9bf3dd6be1b589591195d864f2a40ac</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/44b7ee50005077cb9155618b6f0bc14cf8a9c2b3" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25664488859" target="_blank">2026-05-11 10:24:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20465" onclick="CopyToClipboard('tag20465');return false;" class="tag-decoration">release</div><div id="tag28682" onclick="CopyToClipboard('tag28682');return false;" class="tag-decoration">release-26e3b64</div><div id="tag13058" onclick="CopyToClipboard('tag13058');return false;" class="tag-decoration">release-4.7.0</div><div id="tag23564" onclick="CopyToClipboard('tag23564');return false;" class="tag-decoration">release-v4</div><div id="tag3148" onclick="CopyToClipboard('tag3148');return false;" class="tag-decoration">release-v4.7</div><div id="tag19667" onclick="CopyToClipboard('tag19667');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/26e3b64d2eac2003b205775d21b6f4c9d03715ea" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25664490673" target="_blank">2026-05-11 10:24:12</a></td></tr>
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
