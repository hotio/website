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
<tr><td><div id="tag32033" onclick="CopyToClipboard('tag32033');return false;" class="tag-decoration">nightly</div><div id="tag21873" onclick="CopyToClipboard('tag21873');return false;" class="tag-decoration">nightly-077327c</div><div id="tag7667" onclick="CopyToClipboard('tag7667');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/077327c62749515fa284788fac0c8984d57ff196" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27873845490" target="_blank">2026-06-20 14:20:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9058" onclick="CopyToClipboard('tag9058');return false;" class="tag-decoration">release</div><div id="tag16604" onclick="CopyToClipboard('tag16604');return false;" class="tag-decoration">release-57e66b6</div><div id="tag18861" onclick="CopyToClipboard('tag18861');return false;" class="tag-decoration">release-0.15.2</div><div id="tag13015" onclick="CopyToClipboard('tag13015');return false;" class="tag-decoration">release-v0</div><div id="tag22188" onclick="CopyToClipboard('tag22188');return false;" class="tag-decoration">release-v0.15</div><div id="tag9757" onclick="CopyToClipboard('tag9757');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/57e66b627c56dcfadece67307597bc5ef3913037" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27915669265" target="_blank">2026-06-21 19:54:05</a></td></tr>
<tr><td><div id="tag9402" onclick="CopyToClipboard('tag9402');return false;" class="tag-decoration">testing</div><div id="tag25717" onclick="CopyToClipboard('tag25717');return false;" class="tag-decoration">testing-7239098</div><div id="tag22638" onclick="CopyToClipboard('tag22638');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag7674" onclick="CopyToClipboard('tag7674');return false;" class="tag-decoration">testing-v0</div><div id="tag30735" onclick="CopyToClipboard('tag30735');return false;" class="tag-decoration">testing-v0.15</div><div id="tag8499" onclick="CopyToClipboard('tag8499');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7239098052b0ae6e0addc58392f5b3e94e3781a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27873845853" target="_blank">2026-06-20 14:20:14</a></td></tr>
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
