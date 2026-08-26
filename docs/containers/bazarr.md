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
<tr><td><div id="tag7803" onclick="CopyToClipboard('tag7803');return false;" class="tag-decoration">nightly</div><div id="tag28087" onclick="CopyToClipboard('tag28087');return false;" class="tag-decoration">nightly-6cfc1d3</div><div id="tag2702" onclick="CopyToClipboard('tag2702');return false;" class="tag-decoration">nightly-1.6.1-beta.30</div><div id="tag4345" onclick="CopyToClipboard('tag4345');return false;" class="tag-decoration">nightly-v1</div><div id="tag18196" onclick="CopyToClipboard('tag18196');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag18406" onclick="CopyToClipboard('tag18406');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/6cfc1d3c413ce5291bcdc1845a448823fd31420b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/32918878197" target="_blank">2026-08-26 01:24:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13083" onclick="CopyToClipboard('tag13083');return false;" class="tag-decoration">release</div><div id="tag6377" onclick="CopyToClipboard('tag6377');return false;" class="tag-decoration">release-95439e8</div><div id="tag6549" onclick="CopyToClipboard('tag6549');return false;" class="tag-decoration">release-1.6.0</div><div id="tag23770" onclick="CopyToClipboard('tag23770');return false;" class="tag-decoration">release-v1</div><div id="tag20349" onclick="CopyToClipboard('tag20349');return false;" class="tag-decoration">release-v1.6</div><div id="tag27974" onclick="CopyToClipboard('tag27974');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/95439e8bdd27a4f893207dfb22b29c9dd10219a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/32918880327" target="_blank">2026-08-26 01:24:52</a></td></tr>
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
