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
<tr><td><div id="tag7403" onclick="CopyToClipboard('tag7403');return false;" class="tag-decoration">nightly</div><div id="tag28441" onclick="CopyToClipboard('tag28441');return false;" class="tag-decoration">nightly-f9e0a9e</div><div id="tag15411" onclick="CopyToClipboard('tag15411');return false;" class="tag-decoration">nightly-1.6.1-beta.28</div><div id="tag27546" onclick="CopyToClipboard('tag27546');return false;" class="tag-decoration">nightly-v1</div><div id="tag3978" onclick="CopyToClipboard('tag3978');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag28963" onclick="CopyToClipboard('tag28963');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/f9e0a9ec6afdeac0cad52a0c77f636d1b9cf82ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/32623662330" target="_blank">2026-08-23 06:43:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23550" onclick="CopyToClipboard('tag23550');return false;" class="tag-decoration">release</div><div id="tag11518" onclick="CopyToClipboard('tag11518');return false;" class="tag-decoration">release-bcb7c4d</div><div id="tag23469" onclick="CopyToClipboard('tag23469');return false;" class="tag-decoration">release-1.6.0</div><div id="tag10967" onclick="CopyToClipboard('tag10967');return false;" class="tag-decoration">release-v1</div><div id="tag5820" onclick="CopyToClipboard('tag5820');return false;" class="tag-decoration">release-v1.6</div><div id="tag19350" onclick="CopyToClipboard('tag19350');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/bcb7c4d88cc2c0106ce7012395763ed1ba397c53" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/32326568224" target="_blank">2026-08-20 02:58:45</a></td></tr>
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
