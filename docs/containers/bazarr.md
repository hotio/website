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
<tr><td><div id="tag26377" onclick="CopyToClipboard('tag26377');return false;" class="tag-decoration">nightly</div><div id="tag11681" onclick="CopyToClipboard('tag11681');return false;" class="tag-decoration">nightly-c752e83</div><div id="tag32270" onclick="CopyToClipboard('tag32270');return false;" class="tag-decoration">nightly-1.5.6-beta.12</div><div id="tag17461" onclick="CopyToClipboard('tag17461');return false;" class="tag-decoration">nightly-v1</div><div id="tag30530" onclick="CopyToClipboard('tag30530');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag8133" onclick="CopyToClipboard('tag8133');return false;" class="tag-decoration">nightly-v1.5.6</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c752e83b2a18d5fe1ac17dbf12dff1c419524bca" target="_blank">Version update: 1.5.6-beta.11 => 1.5.6-beta.12</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22052767803" target="_blank">2026-02-16 06:41:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10897" onclick="CopyToClipboard('tag10897');return false;" class="tag-decoration">release</div><div id="tag20667" onclick="CopyToClipboard('tag20667');return false;" class="tag-decoration">release-c06938f</div><div id="tag4579" onclick="CopyToClipboard('tag4579');return false;" class="tag-decoration">release-1.5.5</div><div id="tag17094" onclick="CopyToClipboard('tag17094');return false;" class="tag-decoration">release-v1</div><div id="tag19295" onclick="CopyToClipboard('tag19295');return false;" class="tag-decoration">release-v1.5</div><div id="tag13812" onclick="CopyToClipboard('tag13812');return false;" class="tag-decoration">release-v1.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c06938f0ad30d6084ac6d8605513ea7ab7bc40d6" target="_blank">Version update: 1.5.4 => 1.5.5</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21568319983" target="_blank">2026-02-01 18:51:09</a></td></tr>
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
