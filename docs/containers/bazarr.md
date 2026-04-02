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
<tr><td><div id="tag26344" onclick="CopyToClipboard('tag26344');return false;" class="tag-decoration">nightly</div><div id="tag19408" onclick="CopyToClipboard('tag19408');return false;" class="tag-decoration">nightly-5e9da9c</div><div id="tag16554" onclick="CopyToClipboard('tag16554');return false;" class="tag-decoration">nightly-1.5.7-beta.15</div><div id="tag32210" onclick="CopyToClipboard('tag32210');return false;" class="tag-decoration">nightly-v1</div><div id="tag7609" onclick="CopyToClipboard('tag7609');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag15477" onclick="CopyToClipboard('tag15477');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/5e9da9c224da6180220e70b57fc489d7a35ecd5b" target="_blank">Version update: 1.5.7-beta.14 => 1.5.7-beta.15</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/23887955331" target="_blank">2026-04-02 06:49:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10802" onclick="CopyToClipboard('tag10802');return false;" class="tag-decoration">release</div><div id="tag22288" onclick="CopyToClipboard('tag22288');return false;" class="tag-decoration">release-0c89459</div><div id="tag2806" onclick="CopyToClipboard('tag2806');return false;" class="tag-decoration">release-1.5.6</div><div id="tag1509" onclick="CopyToClipboard('tag1509');return false;" class="tag-decoration">release-v1</div><div id="tag20312" onclick="CopyToClipboard('tag20312');return false;" class="tag-decoration">release-v1.5</div><div id="tag20838" onclick="CopyToClipboard('tag20838');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/0c89459871881bc574debbd13c1260cc338f4b19" target="_blank">Version update: 1.5.5 => 1.5.6</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22441008453" target="_blank">2026-02-26 11:56:07</a></td></tr>
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
