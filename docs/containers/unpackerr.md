---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag2050" onclick="CopyToClipboard('tag2050');return false;" class="tag-decoration">nightly</div><div id="tag16983" onclick="CopyToClipboard('tag16983');return false;" class="tag-decoration">nightly-077327c</div><div id="tag11961" onclick="CopyToClipboard('tag11961');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/077327c62749515fa284788fac0c8984d57ff196" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27873845490" target="_blank">2026-06-20 14:20:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24417" onclick="CopyToClipboard('tag24417');return false;" class="tag-decoration">release</div><div id="tag24231" onclick="CopyToClipboard('tag24231');return false;" class="tag-decoration">release-57e66b6</div><div id="tag2542" onclick="CopyToClipboard('tag2542');return false;" class="tag-decoration">release-0.15.2</div><div id="tag24674" onclick="CopyToClipboard('tag24674');return false;" class="tag-decoration">release-v0</div><div id="tag26849" onclick="CopyToClipboard('tag26849');return false;" class="tag-decoration">release-v0.15</div><div id="tag9717" onclick="CopyToClipboard('tag9717');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/57e66b627c56dcfadece67307597bc5ef3913037" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27915669265" target="_blank">2026-06-21 19:54:05</a></td></tr>
<tr><td><div id="tag6280" onclick="CopyToClipboard('tag6280');return false;" class="tag-decoration">testing</div><div id="tag27022" onclick="CopyToClipboard('tag27022');return false;" class="tag-decoration">testing-60a238a</div><div id="tag3884" onclick="CopyToClipboard('tag3884');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag28638" onclick="CopyToClipboard('tag28638');return false;" class="tag-decoration">testing-v0</div><div id="tag32056" onclick="CopyToClipboard('tag32056');return false;" class="tag-decoration">testing-v0.15</div><div id="tag20071" onclick="CopyToClipboard('tag20071');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/60a238a06da269c48dd7711f87c7e3a39f35f1a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27915671087" target="_blank">2026-06-21 19:54:09</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
