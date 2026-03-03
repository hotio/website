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
<tr><td><div id="tag25681" onclick="CopyToClipboard('tag25681');return false;" class="tag-decoration">nightly</div><div id="tag325" onclick="CopyToClipboard('tag325');return false;" class="tag-decoration">nightly-c42722d</div><div id="tag8817" onclick="CopyToClipboard('tag8817');return false;" class="tag-decoration">nightly-1.5.7-beta.1</div><div id="tag24076" onclick="CopyToClipboard('tag24076');return false;" class="tag-decoration">nightly-v1</div><div id="tag6042" onclick="CopyToClipboard('tag6042');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag10440" onclick="CopyToClipboard('tag10440');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c42722dba9cb1a8fa86b2a7abb848f555d025a0b" target="_blank">Version update: 1.5.7-beta.0 => 1.5.7-beta.1</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22612170942" target="_blank">2026-03-03 07:05:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17558" onclick="CopyToClipboard('tag17558');return false;" class="tag-decoration">release</div><div id="tag16763" onclick="CopyToClipboard('tag16763');return false;" class="tag-decoration">release-0c89459</div><div id="tag4670" onclick="CopyToClipboard('tag4670');return false;" class="tag-decoration">release-1.5.6</div><div id="tag4969" onclick="CopyToClipboard('tag4969');return false;" class="tag-decoration">release-v1</div><div id="tag15285" onclick="CopyToClipboard('tag15285');return false;" class="tag-decoration">release-v1.5</div><div id="tag12342" onclick="CopyToClipboard('tag12342');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/0c89459871881bc574debbd13c1260cc338f4b19" target="_blank">Version update: 1.5.5 => 1.5.6</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22441008453" target="_blank">2026-02-26 11:56:07</a></td></tr>
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
