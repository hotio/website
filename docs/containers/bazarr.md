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
<tr><td><div id="tag9916" onclick="CopyToClipboard('tag9916');return false;" class="tag-decoration">nightly</div><div id="tag1091" onclick="CopyToClipboard('tag1091');return false;" class="tag-decoration">nightly-f0c50e9</div><div id="tag3178" onclick="CopyToClipboard('tag3178');return false;" class="tag-decoration">nightly-1.5.7-beta.36</div><div id="tag29223" onclick="CopyToClipboard('tag29223');return false;" class="tag-decoration">nightly-v1</div><div id="tag4120" onclick="CopyToClipboard('tag4120');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag2360" onclick="CopyToClipboard('tag2360');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/f0c50e96ee78c3beb79128f5962f8a69ce598905" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25707111074" target="_blank">2026-05-12 01:13:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14211" onclick="CopyToClipboard('tag14211');return false;" class="tag-decoration">release</div><div id="tag15106" onclick="CopyToClipboard('tag15106');return false;" class="tag-decoration">release-62c9036</div><div id="tag31450" onclick="CopyToClipboard('tag31450');return false;" class="tag-decoration">release-1.5.6</div><div id="tag21838" onclick="CopyToClipboard('tag21838');return false;" class="tag-decoration">release-v1</div><div id="tag9060" onclick="CopyToClipboard('tag9060');return false;" class="tag-decoration">release-v1.5</div><div id="tag3397" onclick="CopyToClipboard('tag3397');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/62c903653b67b419eacc051eb52aa5d91139eedf" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25707115112" target="_blank">2026-05-12 01:13:30</a></td></tr>
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
