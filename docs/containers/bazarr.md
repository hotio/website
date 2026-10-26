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
<tr><td><div id="tag12018" onclick="CopyToClipboard('tag12018');return false;" class="tag-decoration">nightly</div><div id="tag24863" onclick="CopyToClipboard('tag24863');return false;" class="tag-decoration">nightly-437c27a</div><div id="tag18597" onclick="CopyToClipboard('tag18597');return false;" class="tag-decoration">nightly-1.6.3-beta.21</div><div id="tag3123" onclick="CopyToClipboard('tag3123');return false;" class="tag-decoration">nightly-v1</div><div id="tag29259" onclick="CopyToClipboard('tag29259');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag5470" onclick="CopyToClipboard('tag5470');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/437c27afcf0a2632c6d5a439e83ed8a33a7f35b9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40303048118" target="_blank">2026-10-26 09:53:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20100" onclick="CopyToClipboard('tag20100');return false;" class="tag-decoration">release</div><div id="tag26837" onclick="CopyToClipboard('tag26837');return false;" class="tag-decoration">release-a5be34b</div><div id="tag21280" onclick="CopyToClipboard('tag21280');return false;" class="tag-decoration">release-1.6.2</div><div id="tag20429" onclick="CopyToClipboard('tag20429');return false;" class="tag-decoration">release-v1</div><div id="tag8137" onclick="CopyToClipboard('tag8137');return false;" class="tag-decoration">release-v1.6</div><div id="tag18033" onclick="CopyToClipboard('tag18033');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a5be34b43235076c5ee545e7cc9adb8d9a71b183" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40222887841" target="_blank">2026-10-25 18:47:02</a></td></tr>
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
