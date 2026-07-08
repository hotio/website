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
<tr><td><div id="tag5774" onclick="CopyToClipboard('tag5774');return false;" class="tag-decoration">nightly</div><div id="tag26316" onclick="CopyToClipboard('tag26316');return false;" class="tag-decoration">nightly-9071fa4</div><div id="tag25947" onclick="CopyToClipboard('tag25947');return false;" class="tag-decoration">nightly-1.6.0</div><div id="tag24919" onclick="CopyToClipboard('tag24919');return false;" class="tag-decoration">nightly-v1</div><div id="tag4149" onclick="CopyToClipboard('tag4149');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag11551" onclick="CopyToClipboard('tag11551');return false;" class="tag-decoration">nightly-v1.6.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/9071fa4dbde6f395f8cf5f578822066821443231" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28979199787" target="_blank">2026-07-08 22:09:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2099" onclick="CopyToClipboard('tag2099');return false;" class="tag-decoration">release</div><div id="tag9061" onclick="CopyToClipboard('tag9061');return false;" class="tag-decoration">release-b4b1103</div><div id="tag27247" onclick="CopyToClipboard('tag27247');return false;" class="tag-decoration">release-1.6.0</div><div id="tag26601" onclick="CopyToClipboard('tag26601');return false;" class="tag-decoration">release-v1</div><div id="tag17147" onclick="CopyToClipboard('tag17147');return false;" class="tag-decoration">release-v1.6</div><div id="tag13377" onclick="CopyToClipboard('tag13377');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/b4b1103685b113698cddb337c80c779dc8108f67" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28979195451" target="_blank">2026-07-08 22:09:12</a></td></tr>
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
