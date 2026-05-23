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
<tr><td><div id="tag7257" onclick="CopyToClipboard('tag7257');return false;" class="tag-decoration">nightly</div><div id="tag23068" onclick="CopyToClipboard('tag23068');return false;" class="tag-decoration">nightly-0d6da61</div><div id="tag29666" onclick="CopyToClipboard('tag29666');return false;" class="tag-decoration">nightly-1.5.7-beta.46</div><div id="tag30274" onclick="CopyToClipboard('tag30274');return false;" class="tag-decoration">nightly-v1</div><div id="tag26407" onclick="CopyToClipboard('tag26407');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag12665" onclick="CopyToClipboard('tag12665');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/0d6da61aaa0aef54d0329a47a4eec24f0ffa096f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26328792777" target="_blank">2026-05-23 09:03:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27211" onclick="CopyToClipboard('tag27211');return false;" class="tag-decoration">release</div><div id="tag9722" onclick="CopyToClipboard('tag9722');return false;" class="tag-decoration">release-ac04902</div><div id="tag32578" onclick="CopyToClipboard('tag32578');return false;" class="tag-decoration">release-1.5.6</div><div id="tag20790" onclick="CopyToClipboard('tag20790');return false;" class="tag-decoration">release-v1</div><div id="tag16345" onclick="CopyToClipboard('tag16345');return false;" class="tag-decoration">release-v1.5</div><div id="tag32396" onclick="CopyToClipboard('tag32396');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/ac0490216de9395a0fc018cc3025ef7abd3e382c" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/26000356944" target="_blank">2026-05-17 19:22:43</a></td></tr>
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
