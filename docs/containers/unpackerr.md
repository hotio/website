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
<tr><td><div id="tag5794" onclick="CopyToClipboard('tag5794');return false;" class="tag-decoration">nightly</div><div id="tag31974" onclick="CopyToClipboard('tag31974');return false;" class="tag-decoration">nightly-72ef963</div><div id="tag9413" onclick="CopyToClipboard('tag9413');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/72ef963b8faa4150fb7d1363c475a852401cb742" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25987634535" target="_blank">2026-05-17 09:54:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23540" onclick="CopyToClipboard('tag23540');return false;" class="tag-decoration">release</div><div id="tag20187" onclick="CopyToClipboard('tag20187');return false;" class="tag-decoration">release-3557515</div><div id="tag5106" onclick="CopyToClipboard('tag5106');return false;" class="tag-decoration">release-0.15.2</div><div id="tag9061" onclick="CopyToClipboard('tag9061');return false;" class="tag-decoration">release-v0</div><div id="tag14933" onclick="CopyToClipboard('tag14933');return false;" class="tag-decoration">release-v0.15</div><div id="tag24681" onclick="CopyToClipboard('tag24681');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/3557515a1760df2ae7b5ed4dcc1ab0eeec94fdbe" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25987635968" target="_blank">2026-05-17 09:54:15</a></td></tr>
<tr><td><div id="tag3985" onclick="CopyToClipboard('tag3985');return false;" class="tag-decoration">testing</div><div id="tag28376" onclick="CopyToClipboard('tag28376');return false;" class="tag-decoration">testing-1176608</div><div id="tag17078" onclick="CopyToClipboard('tag17078');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag17756" onclick="CopyToClipboard('tag17756');return false;" class="tag-decoration">testing-v0</div><div id="tag6297" onclick="CopyToClipboard('tag6297');return false;" class="tag-decoration">testing-v0.15</div><div id="tag23429" onclick="CopyToClipboard('tag23429');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/1176608bd9656d0330cc548218c71574d7702da8" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25930303477" target="_blank">2026-05-15 16:55:13</a></td></tr>
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
