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
<tr><td><div id="tag7802" onclick="CopyToClipboard('tag7802');return false;" class="tag-decoration">nightly</div><div id="tag30367" onclick="CopyToClipboard('tag30367');return false;" class="tag-decoration">nightly-449e8ce</div><div id="tag21671" onclick="CopyToClipboard('tag21671');return false;" class="tag-decoration">nightly-1.5.7-beta.38</div><div id="tag31345" onclick="CopyToClipboard('tag31345');return false;" class="tag-decoration">nightly-v1</div><div id="tag26446" onclick="CopyToClipboard('tag26446');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag9032" onclick="CopyToClipboard('tag9032');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/449e8ce617746ab79c0b0a0bc0ce7029c8d179f6" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25925822651" target="_blank">2026-05-15 15:20:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12369" onclick="CopyToClipboard('tag12369');return false;" class="tag-decoration">release</div><div id="tag2606" onclick="CopyToClipboard('tag2606');return false;" class="tag-decoration">release-4f8729c</div><div id="tag10845" onclick="CopyToClipboard('tag10845');return false;" class="tag-decoration">release-1.5.6</div><div id="tag11388" onclick="CopyToClipboard('tag11388');return false;" class="tag-decoration">release-v1</div><div id="tag17401" onclick="CopyToClipboard('tag17401');return false;" class="tag-decoration">release-v1.5</div><div id="tag10416" onclick="CopyToClipboard('tag10416');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/4f8729c5f17d1d2048cb48256ae6ab277f2aa729" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25932452352" target="_blank">2026-05-15 17:42:16</a></td></tr>
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
