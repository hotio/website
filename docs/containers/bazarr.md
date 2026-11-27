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
<tr><td><div id="tag15167" onclick="CopyToClipboard('tag15167');return false;" class="tag-decoration">nightly</div><div id="tag5473" onclick="CopyToClipboard('tag5473');return false;" class="tag-decoration">nightly-8984fe2</div><div id="tag3969" onclick="CopyToClipboard('tag3969');return false;" class="tag-decoration">nightly-1.6.3-beta.41</div><div id="tag29717" onclick="CopyToClipboard('tag29717');return false;" class="tag-decoration">nightly-v1</div><div id="tag6871" onclick="CopyToClipboard('tag6871');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag10019" onclick="CopyToClipboard('tag10019');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/8984fe281663a1152d2709d11d9fa50f8a4c7249" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/45832399634" target="_blank">2026-11-26 13:46:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12430" onclick="CopyToClipboard('tag12430');return false;" class="tag-decoration">release</div><div id="tag8235" onclick="CopyToClipboard('tag8235');return false;" class="tag-decoration">release-de3380d</div><div id="tag17496" onclick="CopyToClipboard('tag17496');return false;" class="tag-decoration">release-1.6.2</div><div id="tag23963" onclick="CopyToClipboard('tag23963');return false;" class="tag-decoration">release-v1</div><div id="tag8461" onclick="CopyToClipboard('tag8461');return false;" class="tag-decoration">release-v1.6</div><div id="tag8451" onclick="CopyToClipboard('tag8451');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/de3380db02ea550dc19f440749c04eefdb9627fb" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/46081521718" target="_blank">2026-11-27 23:16:01</a></td></tr>
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
