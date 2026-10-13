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
<tr><td><div id="tag24932" onclick="CopyToClipboard('tag24932');return false;" class="tag-decoration">nightly</div><div id="tag25715" onclick="CopyToClipboard('tag25715');return false;" class="tag-decoration">nightly-5fc2113</div><div id="tag17334" onclick="CopyToClipboard('tag17334');return false;" class="tag-decoration">nightly-1.6.3-beta.11</div><div id="tag20713" onclick="CopyToClipboard('tag20713');return false;" class="tag-decoration">nightly-v1</div><div id="tag8651" onclick="CopyToClipboard('tag8651');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag20026" onclick="CopyToClipboard('tag20026');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/5fc2113fcaeadcf2b260b7bb93bb5203679e5cba" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/38382200790" target="_blank">2026-10-13 10:16:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28211" onclick="CopyToClipboard('tag28211');return false;" class="tag-decoration">release</div><div id="tag12399" onclick="CopyToClipboard('tag12399');return false;" class="tag-decoration">release-f9a5f7e</div><div id="tag5828" onclick="CopyToClipboard('tag5828');return false;" class="tag-decoration">release-1.6.2</div><div id="tag10570" onclick="CopyToClipboard('tag10570');return false;" class="tag-decoration">release-v1</div><div id="tag29655" onclick="CopyToClipboard('tag29655');return false;" class="tag-decoration">release-v1.6</div><div id="tag17398" onclick="CopyToClipboard('tag17398');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/f9a5f7e27a0226c0e9674d2a90af7d5209276976" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37844494229" target="_blank">2026-10-08 21:07:09</a></td></tr>
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
