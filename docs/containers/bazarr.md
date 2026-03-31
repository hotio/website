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
<tr><td><div id="tag24010" onclick="CopyToClipboard('tag24010');return false;" class="tag-decoration">nightly</div><div id="tag29586" onclick="CopyToClipboard('tag29586');return false;" class="tag-decoration">nightly-a22597d</div><div id="tag27089" onclick="CopyToClipboard('tag27089');return false;" class="tag-decoration">nightly-1.5.7-beta.13</div><div id="tag26876" onclick="CopyToClipboard('tag26876');return false;" class="tag-decoration">nightly-v1</div><div id="tag26247" onclick="CopyToClipboard('tag26247');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag5763" onclick="CopyToClipboard('tag5763');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/a22597d284debde9370f013d503c88dcd9d04f21" target="_blank">Version update: 1.5.7-beta.12 => 1.5.7-beta.13</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/23795980168" target="_blank">2026-03-31 11:55:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14770" onclick="CopyToClipboard('tag14770');return false;" class="tag-decoration">release</div><div id="tag20248" onclick="CopyToClipboard('tag20248');return false;" class="tag-decoration">release-0c89459</div><div id="tag13685" onclick="CopyToClipboard('tag13685');return false;" class="tag-decoration">release-1.5.6</div><div id="tag23222" onclick="CopyToClipboard('tag23222');return false;" class="tag-decoration">release-v1</div><div id="tag19450" onclick="CopyToClipboard('tag19450');return false;" class="tag-decoration">release-v1.5</div><div id="tag16930" onclick="CopyToClipboard('tag16930');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/0c89459871881bc574debbd13c1260cc338f4b19" target="_blank">Version update: 1.5.5 => 1.5.6</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22441008453" target="_blank">2026-02-26 11:56:07</a></td></tr>
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
