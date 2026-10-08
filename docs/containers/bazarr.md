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
<tr><td><div id="tag23257" onclick="CopyToClipboard('tag23257');return false;" class="tag-decoration">nightly</div><div id="tag27065" onclick="CopyToClipboard('tag27065');return false;" class="tag-decoration">nightly-036ec8c</div><div id="tag27899" onclick="CopyToClipboard('tag27899');return false;" class="tag-decoration">nightly-1.6.3-beta.7</div><div id="tag22861" onclick="CopyToClipboard('tag22861');return false;" class="tag-decoration">nightly-v1</div><div id="tag13151" onclick="CopyToClipboard('tag13151');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag4120" onclick="CopyToClipboard('tag4120');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/036ec8cfb0bb4c4155cffc96b8f3aaedbd8deee6" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37844497895" target="_blank">2026-10-08 21:07:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2982" onclick="CopyToClipboard('tag2982');return false;" class="tag-decoration">release</div><div id="tag24247" onclick="CopyToClipboard('tag24247');return false;" class="tag-decoration">release-f9a5f7e</div><div id="tag22472" onclick="CopyToClipboard('tag22472');return false;" class="tag-decoration">release-1.6.2</div><div id="tag4024" onclick="CopyToClipboard('tag4024');return false;" class="tag-decoration">release-v1</div><div id="tag17434" onclick="CopyToClipboard('tag17434');return false;" class="tag-decoration">release-v1.6</div><div id="tag32658" onclick="CopyToClipboard('tag32658');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/f9a5f7e27a0226c0e9674d2a90af7d5209276976" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37844494229" target="_blank">2026-10-08 21:07:09</a></td></tr>
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
