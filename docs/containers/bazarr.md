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
<tr><td><div id="tag17853" onclick="CopyToClipboard('tag17853');return false;" class="tag-decoration">nightly</div><div id="tag31781" onclick="CopyToClipboard('tag31781');return false;" class="tag-decoration">nightly-798eb2a</div><div id="tag20158" onclick="CopyToClipboard('tag20158');return false;" class="tag-decoration">nightly-1.6.1-beta.9</div><div id="tag7303" onclick="CopyToClipboard('tag7303');return false;" class="tag-decoration">nightly-v1</div><div id="tag24558" onclick="CopyToClipboard('tag24558');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag14889" onclick="CopyToClipboard('tag14889');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/798eb2accfae3d429a08f961d129fd0c87ca4c4b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/30379464726" target="_blank">2026-07-28 16:41:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24934" onclick="CopyToClipboard('tag24934');return false;" class="tag-decoration">release</div><div id="tag1065" onclick="CopyToClipboard('tag1065');return false;" class="tag-decoration">release-7120114</div><div id="tag26624" onclick="CopyToClipboard('tag26624');return false;" class="tag-decoration">release-1.6.0</div><div id="tag22416" onclick="CopyToClipboard('tag22416');return false;" class="tag-decoration">release-v1</div><div id="tag5098" onclick="CopyToClipboard('tag5098');return false;" class="tag-decoration">release-v1.6</div><div id="tag32062" onclick="CopyToClipboard('tag32062');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/71201143906eefebb2e76a51047810d776a4fd03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/30379470005" target="_blank">2026-07-28 16:41:56</a></td></tr>
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
