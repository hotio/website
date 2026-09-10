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
<tr><td><div id="tag19579" onclick="CopyToClipboard('tag19579');return false;" class="tag-decoration">nightly</div><div id="tag22088" onclick="CopyToClipboard('tag22088');return false;" class="tag-decoration">nightly-b7bf24c</div><div id="tag240" onclick="CopyToClipboard('tag240');return false;" class="tag-decoration">nightly-1.6.1-beta.40</div><div id="tag4378" onclick="CopyToClipboard('tag4378');return false;" class="tag-decoration">nightly-v1</div><div id="tag25153" onclick="CopyToClipboard('tag25153');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag21805" onclick="CopyToClipboard('tag21805');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/b7bf24ce805876d78b1b25023babf4ff8921b8ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34434247969" target="_blank">2026-09-10 03:40:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3544" onclick="CopyToClipboard('tag3544');return false;" class="tag-decoration">release</div><div id="tag9146" onclick="CopyToClipboard('tag9146');return false;" class="tag-decoration">release-3693717</div><div id="tag30798" onclick="CopyToClipboard('tag30798');return false;" class="tag-decoration">release-1.6.0</div><div id="tag19823" onclick="CopyToClipboard('tag19823');return false;" class="tag-decoration">release-v1</div><div id="tag30405" onclick="CopyToClipboard('tag30405');return false;" class="tag-decoration">release-v1.6</div><div id="tag3066" onclick="CopyToClipboard('tag3066');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/369371710f7b75a7749e6f8cccf8f501f4d61a93" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34434247112" target="_blank">2026-09-10 03:40:49</a></td></tr>
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
