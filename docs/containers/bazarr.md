---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7895" onclick="CopyToClipboard('tag7895');return false;" class="tag-decoration">nightly</div><div id="tag14176" onclick="CopyToClipboard('tag14176');return false;" class="tag-decoration">nightly-937650d</div><div id="tag4435" onclick="CopyToClipboard('tag4435');return false;" class="tag-decoration">nightly-1.6.1-beta.25</div><div id="tag11075" onclick="CopyToClipboard('tag11075');return false;" class="tag-decoration">nightly-v1</div><div id="tag21821" onclick="CopyToClipboard('tag21821');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag21295" onclick="CopyToClipboard('tag21295');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/937650d7af3bd70b9694554b2b3f9b5107749bab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/32144015605" target="_blank">2026-08-18 13:43:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32257" onclick="CopyToClipboard('tag32257');return false;" class="tag-decoration">release</div><div id="tag17872" onclick="CopyToClipboard('tag17872');return false;" class="tag-decoration">release-fccf061</div><div id="tag29567" onclick="CopyToClipboard('tag29567');return false;" class="tag-decoration">release-1.6.0</div><div id="tag6198" onclick="CopyToClipboard('tag6198');return false;" class="tag-decoration">release-v1</div><div id="tag6986" onclick="CopyToClipboard('tag6986');return false;" class="tag-decoration">release-v1.6</div><div id="tag26681" onclick="CopyToClipboard('tag26681');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/fccf061722cc6f2540f81e539cb3bc1d32b43f3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/32144017284" target="_blank">2026-08-18 13:43:23</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
