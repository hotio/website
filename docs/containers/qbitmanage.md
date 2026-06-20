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
<tr><td><div id="tag13227" onclick="CopyToClipboard('tag13227');return false;" class="tag-decoration">nightly</div><div id="tag26851" onclick="CopyToClipboard('tag26851');return false;" class="tag-decoration">nightly-bd682fa</div><div id="tag24806" onclick="CopyToClipboard('tag24806');return false;" class="tag-decoration">nightly-1ac5ecfd79040f33517ecc1bc250ba102520aa67</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/bd682face29e21077131c4c4ae0d1ee0ef22dc0a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27873109663" target="_blank">2026-06-20 13:49:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18930" onclick="CopyToClipboard('tag18930');return false;" class="tag-decoration">release</div><div id="tag470" onclick="CopyToClipboard('tag470');return false;" class="tag-decoration">release-388a119</div><div id="tag32553" onclick="CopyToClipboard('tag32553');return false;" class="tag-decoration">release-4.8.1</div><div id="tag6994" onclick="CopyToClipboard('tag6994');return false;" class="tag-decoration">release-v4</div><div id="tag1985" onclick="CopyToClipboard('tag1985');return false;" class="tag-decoration">release-v4.8</div><div id="tag5291" onclick="CopyToClipboard('tag5291');return false;" class="tag-decoration">release-v4.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/388a119eb91cb1565f2e536ea21c386693a9b794" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27277532537" target="_blank">2026-06-10 12:51:46</a></td></tr>
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
