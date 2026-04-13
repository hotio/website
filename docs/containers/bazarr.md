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
<tr><td><div id="tag2334" onclick="CopyToClipboard('tag2334');return false;" class="tag-decoration">nightly</div><div id="tag6579" onclick="CopyToClipboard('tag6579');return false;" class="tag-decoration">nightly-df391f4</div><div id="tag25194" onclick="CopyToClipboard('tag25194');return false;" class="tag-decoration">nightly-1.5.7-beta.22</div><div id="tag16173" onclick="CopyToClipboard('tag16173');return false;" class="tag-decoration">nightly-v1</div><div id="tag15273" onclick="CopyToClipboard('tag15273');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag22120" onclick="CopyToClipboard('tag22120');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/df391f43e5688d76aaeb1363df241e09346d5e65" target="_blank">Version update: 1.5.7-beta.21 => 1.5.7-beta.22</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/24330217204" target="_blank">2026-04-13 07:03:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26061" onclick="CopyToClipboard('tag26061');return false;" class="tag-decoration">release</div><div id="tag14291" onclick="CopyToClipboard('tag14291');return false;" class="tag-decoration">release-0c89459</div><div id="tag2666" onclick="CopyToClipboard('tag2666');return false;" class="tag-decoration">release-1.5.6</div><div id="tag5530" onclick="CopyToClipboard('tag5530');return false;" class="tag-decoration">release-v1</div><div id="tag1927" onclick="CopyToClipboard('tag1927');return false;" class="tag-decoration">release-v1.5</div><div id="tag19659" onclick="CopyToClipboard('tag19659');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/0c89459871881bc574debbd13c1260cc338f4b19" target="_blank">Version update: 1.5.5 => 1.5.6</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22441008453" target="_blank">2026-02-26 11:56:07</a></td></tr>
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
