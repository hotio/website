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
<tr><td><div id="tag28679" onclick="CopyToClipboard('tag28679');return false;" class="tag-decoration">nightly</div><div id="tag31825" onclick="CopyToClipboard('tag31825');return false;" class="tag-decoration">nightly-bd682fa</div><div id="tag12839" onclick="CopyToClipboard('tag12839');return false;" class="tag-decoration">nightly-1ac5ecfd79040f33517ecc1bc250ba102520aa67</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/bd682face29e21077131c4c4ae0d1ee0ef22dc0a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27873109663" target="_blank">2026-06-20 13:49:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28665" onclick="CopyToClipboard('tag28665');return false;" class="tag-decoration">release</div><div id="tag1383" onclick="CopyToClipboard('tag1383');return false;" class="tag-decoration">release-00e6a29</div><div id="tag20346" onclick="CopyToClipboard('tag20346');return false;" class="tag-decoration">release-4.8.1</div><div id="tag17705" onclick="CopyToClipboard('tag17705');return false;" class="tag-decoration">release-v4</div><div id="tag15271" onclick="CopyToClipboard('tag15271');return false;" class="tag-decoration">release-v4.8</div><div id="tag24865" onclick="CopyToClipboard('tag24865');return false;" class="tag-decoration">release-v4.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/00e6a298540498d229d5e33aff01b42b5b6f4ffc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27873109680" target="_blank">2026-06-20 13:49:50</a></td></tr>
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
