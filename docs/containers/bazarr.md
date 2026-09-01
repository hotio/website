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
<tr><td><div id="tag21340" onclick="CopyToClipboard('tag21340');return false;" class="tag-decoration">nightly</div><div id="tag1301" onclick="CopyToClipboard('tag1301');return false;" class="tag-decoration">nightly-35b92c3</div><div id="tag23907" onclick="CopyToClipboard('tag23907');return false;" class="tag-decoration">nightly-1.6.1-beta.35</div><div id="tag11346" onclick="CopyToClipboard('tag11346');return false;" class="tag-decoration">nightly-v1</div><div id="tag21062" onclick="CopyToClipboard('tag21062');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag15563" onclick="CopyToClipboard('tag15563');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/35b92c32e96b6ba80071eac7767aae201c674396" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33512147287" target="_blank">2026-09-01 13:13:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25706" onclick="CopyToClipboard('tag25706');return false;" class="tag-decoration">release</div><div id="tag24263" onclick="CopyToClipboard('tag24263');return false;" class="tag-decoration">release-a430827</div><div id="tag8297" onclick="CopyToClipboard('tag8297');return false;" class="tag-decoration">release-1.6.0</div><div id="tag8376" onclick="CopyToClipboard('tag8376');return false;" class="tag-decoration">release-v1</div><div id="tag27751" onclick="CopyToClipboard('tag27751');return false;" class="tag-decoration">release-v1.6</div><div id="tag1958" onclick="CopyToClipboard('tag1958');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a43082712d49823e54c3965be2658e04e2c564a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33512136039" target="_blank">2026-09-01 13:13:47</a></td></tr>
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
