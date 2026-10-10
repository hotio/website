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
<tr><td><div id="tag26507" onclick="CopyToClipboard('tag26507');return false;" class="tag-decoration">nightly</div><div id="tag26548" onclick="CopyToClipboard('tag26548');return false;" class="tag-decoration">nightly-c333c6b</div><div id="tag6315" onclick="CopyToClipboard('tag6315');return false;" class="tag-decoration">nightly-1.6.3-beta.9</div><div id="tag16226" onclick="CopyToClipboard('tag16226');return false;" class="tag-decoration">nightly-v1</div><div id="tag23173" onclick="CopyToClipboard('tag23173');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag7910" onclick="CopyToClipboard('tag7910');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c333c6bf7a8083d27a0239e1355b74bc9a4b8467" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/38055447677" target="_blank">2026-10-10 13:22:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14823" onclick="CopyToClipboard('tag14823');return false;" class="tag-decoration">release</div><div id="tag21787" onclick="CopyToClipboard('tag21787');return false;" class="tag-decoration">release-f9a5f7e</div><div id="tag20695" onclick="CopyToClipboard('tag20695');return false;" class="tag-decoration">release-1.6.2</div><div id="tag8177" onclick="CopyToClipboard('tag8177');return false;" class="tag-decoration">release-v1</div><div id="tag9386" onclick="CopyToClipboard('tag9386');return false;" class="tag-decoration">release-v1.6</div><div id="tag29082" onclick="CopyToClipboard('tag29082');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/f9a5f7e27a0226c0e9674d2a90af7d5209276976" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37844494229" target="_blank">2026-10-08 21:07:09</a></td></tr>
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
