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
<tr><td><div id="tag19770" onclick="CopyToClipboard('tag19770');return false;" class="tag-decoration">nightly</div><div id="tag28316" onclick="CopyToClipboard('tag28316');return false;" class="tag-decoration">nightly-9bf2b56</div><div id="tag30846" onclick="CopyToClipboard('tag30846');return false;" class="tag-decoration">nightly-1.5.5-beta.5</div><div id="tag30614" onclick="CopyToClipboard('tag30614');return false;" class="tag-decoration">nightly-v1</div><div id="tag14561" onclick="CopyToClipboard('tag14561');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag22750" onclick="CopyToClipboard('tag22750');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/9bf2b56e7d0b5237d66c5d7b976445e18b4778ea" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21064885513" target="_blank">2026-01-16 11:18:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20730" onclick="CopyToClipboard('tag20730');return false;" class="tag-decoration">release</div><div id="tag29116" onclick="CopyToClipboard('tag29116');return false;" class="tag-decoration">release-839ac5f</div><div id="tag20467" onclick="CopyToClipboard('tag20467');return false;" class="tag-decoration">release-1.5.4</div><div id="tag20604" onclick="CopyToClipboard('tag20604');return false;" class="tag-decoration">release-v1</div><div id="tag28690" onclick="CopyToClipboard('tag28690');return false;" class="tag-decoration">release-v1.5</div><div id="tag18608" onclick="CopyToClipboard('tag18608');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/839ac5fe5455b285031c4a78a5f6f4db36706fb8" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21065722906" target="_blank">2026-01-16 11:52:12</a></td></tr>
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
