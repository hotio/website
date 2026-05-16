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
<tr><td><div id="tag1953" onclick="CopyToClipboard('tag1953');return false;" class="tag-decoration">nightly</div><div id="tag6016" onclick="CopyToClipboard('tag6016');return false;" class="tag-decoration">nightly-28ca542</div><div id="tag28797" onclick="CopyToClipboard('tag28797');return false;" class="tag-decoration">nightly-1.5.7-beta.39</div><div id="tag3795" onclick="CopyToClipboard('tag3795');return false;" class="tag-decoration">nightly-v1</div><div id="tag30387" onclick="CopyToClipboard('tag30387');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag11306" onclick="CopyToClipboard('tag11306');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/28ca54223ff3a44a7af92630eb1e39aae74e36a5" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25955941470" target="_blank">2026-05-16 07:17:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11942" onclick="CopyToClipboard('tag11942');return false;" class="tag-decoration">release</div><div id="tag20456" onclick="CopyToClipboard('tag20456');return false;" class="tag-decoration">release-4f8729c</div><div id="tag30243" onclick="CopyToClipboard('tag30243');return false;" class="tag-decoration">release-1.5.6</div><div id="tag25292" onclick="CopyToClipboard('tag25292');return false;" class="tag-decoration">release-v1</div><div id="tag18219" onclick="CopyToClipboard('tag18219');return false;" class="tag-decoration">release-v1.5</div><div id="tag12127" onclick="CopyToClipboard('tag12127');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/4f8729c5f17d1d2048cb48256ae6ab277f2aa729" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25932452352" target="_blank">2026-05-15 17:42:16</a></td></tr>
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
