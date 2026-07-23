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
<tr><td><div id="tag5057" onclick="CopyToClipboard('tag5057');return false;" class="tag-decoration">nightly</div><div id="tag7032" onclick="CopyToClipboard('tag7032');return false;" class="tag-decoration">nightly-3bed526</div><div id="tag29876" onclick="CopyToClipboard('tag29876');return false;" class="tag-decoration">nightly-1.6.1-beta.8</div><div id="tag24990" onclick="CopyToClipboard('tag24990');return false;" class="tag-decoration">nightly-v1</div><div id="tag13012" onclick="CopyToClipboard('tag13012');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag20493" onclick="CopyToClipboard('tag20493');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/3bed526d9b7586158d79cd44d4f6e6da0f508687" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29995219773" target="_blank">2026-07-23 09:24:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16285" onclick="CopyToClipboard('tag16285');return false;" class="tag-decoration">release</div><div id="tag27629" onclick="CopyToClipboard('tag27629');return false;" class="tag-decoration">release-6d4915c</div><div id="tag12556" onclick="CopyToClipboard('tag12556');return false;" class="tag-decoration">release-1.6.0</div><div id="tag23749" onclick="CopyToClipboard('tag23749');return false;" class="tag-decoration">release-v1</div><div id="tag2974" onclick="CopyToClipboard('tag2974');return false;" class="tag-decoration">release-v1.6</div><div id="tag9818" onclick="CopyToClipboard('tag9818');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/6d4915ca37d3bb0d9a20767e0efe6dec6460995d" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29691882661" target="_blank">2026-07-19 14:58:10</a></td></tr>
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
