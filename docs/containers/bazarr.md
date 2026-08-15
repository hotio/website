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
<tr><td><div id="tag32235" onclick="CopyToClipboard('tag32235');return false;" class="tag-decoration">nightly</div><div id="tag4397" onclick="CopyToClipboard('tag4397');return false;" class="tag-decoration">nightly-47a3b50</div><div id="tag2434" onclick="CopyToClipboard('tag2434');return false;" class="tag-decoration">nightly-1.6.1-beta.23</div><div id="tag20834" onclick="CopyToClipboard('tag20834');return false;" class="tag-decoration">nightly-v1</div><div id="tag13591" onclick="CopyToClipboard('tag13591');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag17295" onclick="CopyToClipboard('tag17295');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/47a3b50dc4409dad86f88c838daa01a672f94ced" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/31874687895" target="_blank">2026-08-15 08:31:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22316" onclick="CopyToClipboard('tag22316');return false;" class="tag-decoration">release</div><div id="tag24075" onclick="CopyToClipboard('tag24075');return false;" class="tag-decoration">release-d23de95</div><div id="tag100" onclick="CopyToClipboard('tag100');return false;" class="tag-decoration">release-1.6.0</div><div id="tag15913" onclick="CopyToClipboard('tag15913');return false;" class="tag-decoration">release-v1</div><div id="tag19674" onclick="CopyToClipboard('tag19674');return false;" class="tag-decoration">release-v1.6</div><div id="tag25752" onclick="CopyToClipboard('tag25752');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/d23de950feefcb27eac23c08ca80b1812db7fbbd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/31874689911" target="_blank">2026-08-15 08:31:18</a></td></tr>
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
