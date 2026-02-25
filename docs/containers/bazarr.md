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
<tr><td><div id="tag26402" onclick="CopyToClipboard('tag26402');return false;" class="tag-decoration">nightly</div><div id="tag26742" onclick="CopyToClipboard('tag26742');return false;" class="tag-decoration">nightly-c49a511</div><div id="tag30071" onclick="CopyToClipboard('tag30071');return false;" class="tag-decoration">nightly-1.5.6-beta.17</div><div id="tag3399" onclick="CopyToClipboard('tag3399');return false;" class="tag-decoration">nightly-v1</div><div id="tag8534" onclick="CopyToClipboard('tag8534');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag14953" onclick="CopyToClipboard('tag14953');return false;" class="tag-decoration">nightly-v1.5.6</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c49a51127a2ed27f5c4c60957d828bea6ca9638d" target="_blank">Version update: 1.5.6-beta.16 => 1.5.6-beta.17</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22386164042" target="_blank">2026-02-25 07:08:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17120" onclick="CopyToClipboard('tag17120');return false;" class="tag-decoration">release</div><div id="tag21648" onclick="CopyToClipboard('tag21648');return false;" class="tag-decoration">release-43ea2b9</div><div id="tag9699" onclick="CopyToClipboard('tag9699');return false;" class="tag-decoration">release-1.5.5</div><div id="tag19170" onclick="CopyToClipboard('tag19170');return false;" class="tag-decoration">release-v1</div><div id="tag5255" onclick="CopyToClipboard('tag5255');return false;" class="tag-decoration">release-v1.5</div><div id="tag6641" onclick="CopyToClipboard('tag6641');return false;" class="tag-decoration">release-v1.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/43ea2b94bb038a44d38c9684fed14e1e200af4e3" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22292117620" target="_blank">2026-02-23 03:43:14</a></td></tr>
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
