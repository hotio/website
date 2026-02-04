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
<tr><td><div id="tag5186" onclick="CopyToClipboard('tag5186');return false;" class="tag-decoration">nightly</div><div id="tag284" onclick="CopyToClipboard('tag284');return false;" class="tag-decoration">nightly-c552ccf</div><div id="tag4859" onclick="CopyToClipboard('tag4859');return false;" class="tag-decoration">nightly-7f9be7d0a01613e23d466ae64dcc4eca9a6fc66c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/c552ccf61bb37e4684ef2f543eb14fc870554c96" target="_blank">Version update: 83d6da3ae1833c4231cf0bdbaf07948eebf5b7d3 => 7f9be7d0a01613e23d466ae64dcc4eca9a6fc66c</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21672919871" target="_blank">2026-02-04 13:16:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26824" onclick="CopyToClipboard('tag26824');return false;" class="tag-decoration">release</div><div id="tag542" onclick="CopyToClipboard('tag542');return false;" class="tag-decoration">release-9040906</div><div id="tag17698" onclick="CopyToClipboard('tag17698');return false;" class="tag-decoration">release-4.6.5</div><div id="tag13137" onclick="CopyToClipboard('tag13137');return false;" class="tag-decoration">release-v4</div><div id="tag22221" onclick="CopyToClipboard('tag22221');return false;" class="tag-decoration">release-v4.6</div><div id="tag9774" onclick="CopyToClipboard('tag9774');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/9040906c023e50655892f51dd11e4c0d18bec71c" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21428858541" target="_blank">2026-01-28 07:15:02</a></td></tr>
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
