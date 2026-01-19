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
<tr><td><div id="tag4606" onclick="CopyToClipboard('tag4606');return false;" class="tag-decoration">nightly</div><div id="tag13693" onclick="CopyToClipboard('tag13693');return false;" class="tag-decoration">nightly-b81ac6a</div><div id="tag29214" onclick="CopyToClipboard('tag29214');return false;" class="tag-decoration">nightly-1.5.5-beta.8</div><div id="tag14980" onclick="CopyToClipboard('tag14980');return false;" class="tag-decoration">nightly-v1</div><div id="tag11284" onclick="CopyToClipboard('tag11284');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag2916" onclick="CopyToClipboard('tag2916');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/b81ac6abae724cd2d4ae9626585e2a8b195d9ba0" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21132213258" target="_blank">2026-01-19 09:30:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1986" onclick="CopyToClipboard('tag1986');return false;" class="tag-decoration">release</div><div id="tag5853" onclick="CopyToClipboard('tag5853');return false;" class="tag-decoration">release-a31fa50</div><div id="tag17290" onclick="CopyToClipboard('tag17290');return false;" class="tag-decoration">release-1.5.4</div><div id="tag25047" onclick="CopyToClipboard('tag25047');return false;" class="tag-decoration">release-v1</div><div id="tag14465" onclick="CopyToClipboard('tag14465');return false;" class="tag-decoration">release-v1.5</div><div id="tag28757" onclick="CopyToClipboard('tag28757');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a31fa503f28f49f1567d20ab37cea52aa9e0464a" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21132213857" target="_blank">2026-01-19 09:30:25</a></td></tr>
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
