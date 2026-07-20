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
<tr><td><div id="tag915" onclick="CopyToClipboard('tag915');return false;" class="tag-decoration">nightly</div><div id="tag19566" onclick="CopyToClipboard('tag19566');return false;" class="tag-decoration">nightly-fb1b057</div><div id="tag15601" onclick="CopyToClipboard('tag15601');return false;" class="tag-decoration">nightly-1.6.1-beta.6</div><div id="tag362" onclick="CopyToClipboard('tag362');return false;" class="tag-decoration">nightly-v1</div><div id="tag4757" onclick="CopyToClipboard('tag4757');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag9265" onclick="CopyToClipboard('tag9265');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/fb1b057a97f191410603c869c5fcd26f829f8342" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29739766026" target="_blank">2026-07-20 11:47:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13276" onclick="CopyToClipboard('tag13276');return false;" class="tag-decoration">release</div><div id="tag16876" onclick="CopyToClipboard('tag16876');return false;" class="tag-decoration">release-6d4915c</div><div id="tag17051" onclick="CopyToClipboard('tag17051');return false;" class="tag-decoration">release-1.6.0</div><div id="tag14805" onclick="CopyToClipboard('tag14805');return false;" class="tag-decoration">release-v1</div><div id="tag26817" onclick="CopyToClipboard('tag26817');return false;" class="tag-decoration">release-v1.6</div><div id="tag31917" onclick="CopyToClipboard('tag31917');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/6d4915ca37d3bb0d9a20767e0efe6dec6460995d" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29691882661" target="_blank">2026-07-19 14:58:10</a></td></tr>
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
