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
<tr><td><div id="tag5229" onclick="CopyToClipboard('tag5229');return false;" class="tag-decoration">nightly</div><div id="tag19013" onclick="CopyToClipboard('tag19013');return false;" class="tag-decoration">nightly-75ae368</div><div id="tag9677" onclick="CopyToClipboard('tag9677');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/75ae3687cd35802b45be65e32a9de4c7c7223e00" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25930304752" target="_blank">2026-05-15 16:55:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28040" onclick="CopyToClipboard('tag28040');return false;" class="tag-decoration">release</div><div id="tag11243" onclick="CopyToClipboard('tag11243');return false;" class="tag-decoration">release-3ea13d9</div><div id="tag5179" onclick="CopyToClipboard('tag5179');return false;" class="tag-decoration">release-0.15.2</div><div id="tag2217" onclick="CopyToClipboard('tag2217');return false;" class="tag-decoration">release-v0</div><div id="tag11546" onclick="CopyToClipboard('tag11546');return false;" class="tag-decoration">release-v0.15</div><div id="tag18052" onclick="CopyToClipboard('tag18052');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/3ea13d9ff10f4c4dddeb3a24b73209c7f060a190" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25930304880" target="_blank">2026-05-15 16:55:12</a></td></tr>
<tr><td><div id="tag8297" onclick="CopyToClipboard('tag8297');return false;" class="tag-decoration">testing</div><div id="tag25617" onclick="CopyToClipboard('tag25617');return false;" class="tag-decoration">testing-1176608</div><div id="tag19931" onclick="CopyToClipboard('tag19931');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag8611" onclick="CopyToClipboard('tag8611');return false;" class="tag-decoration">testing-v0</div><div id="tag31384" onclick="CopyToClipboard('tag31384');return false;" class="tag-decoration">testing-v0.15</div><div id="tag16830" onclick="CopyToClipboard('tag16830');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/1176608bd9656d0330cc548218c71574d7702da8" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25930303477" target="_blank">2026-05-15 16:55:13</a></td></tr>
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
