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
<tr><td><div id="tag2565" onclick="CopyToClipboard('tag2565');return false;" class="tag-decoration">nightly</div><div id="tag12934" onclick="CopyToClipboard('tag12934');return false;" class="tag-decoration">nightly-830f8f1</div><div id="tag28195" onclick="CopyToClipboard('tag28195');return false;" class="tag-decoration">nightly-1.6.2</div><div id="tag4705" onclick="CopyToClipboard('tag4705');return false;" class="tag-decoration">nightly-v1</div><div id="tag25954" onclick="CopyToClipboard('tag25954');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag27917" onclick="CopyToClipboard('tag27917');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/830f8f18b5b4e2a4fa5a33f25b685625145c4fbc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36226172066" target="_blank">2026-09-26 07:14:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14743" onclick="CopyToClipboard('tag14743');return false;" class="tag-decoration">release</div><div id="tag18531" onclick="CopyToClipboard('tag18531');return false;" class="tag-decoration">release-2e34cec</div><div id="tag14852" onclick="CopyToClipboard('tag14852');return false;" class="tag-decoration">release-1.6.2</div><div id="tag9911" onclick="CopyToClipboard('tag9911');return false;" class="tag-decoration">release-v1</div><div id="tag226" onclick="CopyToClipboard('tag226');return false;" class="tag-decoration">release-v1.6</div><div id="tag25774" onclick="CopyToClipboard('tag25774');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/2e34cec9618eb69ff681329f67e045c321d7e811" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36226118292" target="_blank">2026-09-26 07:13:18</a></td></tr>
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
