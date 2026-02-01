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
<tr><td><div id="tag10403" onclick="CopyToClipboard('tag10403');return false;" class="tag-decoration">nightly</div><div id="tag23319" onclick="CopyToClipboard('tag23319');return false;" class="tag-decoration">nightly-4bfe9f9</div><div id="tag25472" onclick="CopyToClipboard('tag25472');return false;" class="tag-decoration">nightly-1.5.5</div><div id="tag20390" onclick="CopyToClipboard('tag20390');return false;" class="tag-decoration">nightly-v1</div><div id="tag29217" onclick="CopyToClipboard('tag29217');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag6140" onclick="CopyToClipboard('tag6140');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/4bfe9f93462576a36591cc46ffbe379a35c617b0" target="_blank">Version update: 1.5.5-beta.17 => 1.5.5</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21568319632" target="_blank">2026-02-01 18:51:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11244" onclick="CopyToClipboard('tag11244');return false;" class="tag-decoration">release</div><div id="tag10171" onclick="CopyToClipboard('tag10171');return false;" class="tag-decoration">release-c06938f</div><div id="tag2316" onclick="CopyToClipboard('tag2316');return false;" class="tag-decoration">release-1.5.5</div><div id="tag1242" onclick="CopyToClipboard('tag1242');return false;" class="tag-decoration">release-v1</div><div id="tag10847" onclick="CopyToClipboard('tag10847');return false;" class="tag-decoration">release-v1.5</div><div id="tag7057" onclick="CopyToClipboard('tag7057');return false;" class="tag-decoration">release-v1.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c06938f0ad30d6084ac6d8605513ea7ab7bc40d6" target="_blank">Version update: 1.5.4 => 1.5.5</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21568319983" target="_blank">2026-02-01 18:51:09</a></td></tr>
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
