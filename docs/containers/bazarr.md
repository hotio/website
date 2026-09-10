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
<tr><td><div id="tag26277" onclick="CopyToClipboard('tag26277');return false;" class="tag-decoration">nightly</div><div id="tag10125" onclick="CopyToClipboard('tag10125');return false;" class="tag-decoration">nightly-ae4f198</div><div id="tag28891" onclick="CopyToClipboard('tag28891');return false;" class="tag-decoration">nightly-1.6.1-beta.40</div><div id="tag4336" onclick="CopyToClipboard('tag4336');return false;" class="tag-decoration">nightly-v1</div><div id="tag6378" onclick="CopyToClipboard('tag6378');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag17419" onclick="CopyToClipboard('tag17419');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/ae4f198c450d6f4bbc4b5d75e8c8347a852e0de7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34482306340" target="_blank">2026-09-10 13:23:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25715" onclick="CopyToClipboard('tag25715');return false;" class="tag-decoration">release</div><div id="tag3593" onclick="CopyToClipboard('tag3593');return false;" class="tag-decoration">release-3693717</div><div id="tag24897" onclick="CopyToClipboard('tag24897');return false;" class="tag-decoration">release-1.6.0</div><div id="tag22489" onclick="CopyToClipboard('tag22489');return false;" class="tag-decoration">release-v1</div><div id="tag27705" onclick="CopyToClipboard('tag27705');return false;" class="tag-decoration">release-v1.6</div><div id="tag19101" onclick="CopyToClipboard('tag19101');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/369371710f7b75a7749e6f8cccf8f501f4d61a93" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34434247112" target="_blank">2026-09-10 03:40:49</a></td></tr>
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
