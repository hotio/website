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
<tr><td><div id="tag8398" onclick="CopyToClipboard('tag8398');return false;" class="tag-decoration">nightly</div><div id="tag8640" onclick="CopyToClipboard('tag8640');return false;" class="tag-decoration">nightly-39d53c3</div><div id="tag8702" onclick="CopyToClipboard('tag8702');return false;" class="tag-decoration">nightly-1.6.0</div><div id="tag26536" onclick="CopyToClipboard('tag26536');return false;" class="tag-decoration">nightly-v1</div><div id="tag20312" onclick="CopyToClipboard('tag20312');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag15994" onclick="CopyToClipboard('tag15994');return false;" class="tag-decoration">nightly-v1.6.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/39d53c39ec9a1406c143160f35c5499be46f0cd1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28709555568" target="_blank">2026-07-04 14:39:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1829" onclick="CopyToClipboard('tag1829');return false;" class="tag-decoration">release</div><div id="tag25331" onclick="CopyToClipboard('tag25331');return false;" class="tag-decoration">release-b4b1103</div><div id="tag16001" onclick="CopyToClipboard('tag16001');return false;" class="tag-decoration">release-1.6.0</div><div id="tag24670" onclick="CopyToClipboard('tag24670');return false;" class="tag-decoration">release-v1</div><div id="tag19617" onclick="CopyToClipboard('tag19617');return false;" class="tag-decoration">release-v1.6</div><div id="tag12068" onclick="CopyToClipboard('tag12068');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/b4b1103685b113698cddb337c80c779dc8108f67" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28979195451" target="_blank">2026-07-08 22:09:12</a></td></tr>
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
