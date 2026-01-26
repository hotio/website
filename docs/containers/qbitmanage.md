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
<tr><td><div id="tag32402" onclick="CopyToClipboard('tag32402');return false;" class="tag-decoration">nightly</div><div id="tag3615" onclick="CopyToClipboard('tag3615');return false;" class="tag-decoration">nightly-d776424</div><div id="tag4242" onclick="CopyToClipboard('tag4242');return false;" class="tag-decoration">nightly-83d6da3ae1833c4231cf0bdbaf07948eebf5b7d3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/d7764245a88c6156bee12bdc52ae8e496e8fb115" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21354174102" target="_blank">2026-01-26 10:20:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11170" onclick="CopyToClipboard('tag11170');return false;" class="tag-decoration">release</div><div id="tag25899" onclick="CopyToClipboard('tag25899');return false;" class="tag-decoration">release-dca7963</div><div id="tag29550" onclick="CopyToClipboard('tag29550');return false;" class="tag-decoration">release-4.6.5</div><div id="tag2989" onclick="CopyToClipboard('tag2989');return false;" class="tag-decoration">release-v4</div><div id="tag16458" onclick="CopyToClipboard('tag16458');return false;" class="tag-decoration">release-v4.6</div><div id="tag31117" onclick="CopyToClipboard('tag31117');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/dca7963f282ba64b7c007e26776c9b1cc7a2d126" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21325102732" target="_blank">2026-01-25 01:55:28</a></td></tr>
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
