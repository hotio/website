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
<tr><td><div id="tag18662" onclick="CopyToClipboard('tag18662');return false;" class="tag-decoration">nightly</div><div id="tag27789" onclick="CopyToClipboard('tag27789');return false;" class="tag-decoration">nightly-bb92d1c</div><div id="tag32311" onclick="CopyToClipboard('tag32311');return false;" class="tag-decoration">nightly-1.6.1-beta.1</div><div id="tag23907" onclick="CopyToClipboard('tag23907');return false;" class="tag-decoration">nightly-v1</div><div id="tag8342" onclick="CopyToClipboard('tag8342');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag8572" onclick="CopyToClipboard('tag8572');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/bb92d1ccc1e8b7836228be0a68e57562544307b2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29242968910" target="_blank">2026-07-13 10:30:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16789" onclick="CopyToClipboard('tag16789');return false;" class="tag-decoration">release</div><div id="tag25037" onclick="CopyToClipboard('tag25037');return false;" class="tag-decoration">release-b582e2d</div><div id="tag8723" onclick="CopyToClipboard('tag8723');return false;" class="tag-decoration">release-1.6.0</div><div id="tag26656" onclick="CopyToClipboard('tag26656');return false;" class="tag-decoration">release-v1</div><div id="tag16313" onclick="CopyToClipboard('tag16313');return false;" class="tag-decoration">release-v1.6</div><div id="tag15660" onclick="CopyToClipboard('tag15660');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/b582e2d2cf6be29571a8c2f1ee7ad8a571a9d31c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29308851879" target="_blank">2026-07-14 05:33:36</a></td></tr>
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
