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
<tr><td><div id="tag13273" onclick="CopyToClipboard('tag13273');return false;" class="tag-decoration">nightly</div><div id="tag30089" onclick="CopyToClipboard('tag30089');return false;" class="tag-decoration">nightly-077327c</div><div id="tag8681" onclick="CopyToClipboard('tag8681');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/077327c62749515fa284788fac0c8984d57ff196" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27873845490" target="_blank">2026-06-20 14:20:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7400" onclick="CopyToClipboard('tag7400');return false;" class="tag-decoration">release</div><div id="tag4386" onclick="CopyToClipboard('tag4386');return false;" class="tag-decoration">release-5203be9</div><div id="tag564" onclick="CopyToClipboard('tag564');return false;" class="tag-decoration">release-0.15.2</div><div id="tag24729" onclick="CopyToClipboard('tag24729');return false;" class="tag-decoration">release-v0</div><div id="tag11386" onclick="CopyToClipboard('tag11386');return false;" class="tag-decoration">release-v0.15</div><div id="tag538" onclick="CopyToClipboard('tag538');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/5203be976461a89021b33fbb991064edb0eb8d26" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27873846918" target="_blank">2026-06-20 14:20:17</a></td></tr>
<tr><td><div id="tag26041" onclick="CopyToClipboard('tag26041');return false;" class="tag-decoration">testing</div><div id="tag26554" onclick="CopyToClipboard('tag26554');return false;" class="tag-decoration">testing-7239098</div><div id="tag23863" onclick="CopyToClipboard('tag23863');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag9932" onclick="CopyToClipboard('tag9932');return false;" class="tag-decoration">testing-v0</div><div id="tag1895" onclick="CopyToClipboard('tag1895');return false;" class="tag-decoration">testing-v0.15</div><div id="tag25247" onclick="CopyToClipboard('tag25247');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7239098052b0ae6e0addc58392f5b3e94e3781a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27873845853" target="_blank">2026-06-20 14:20:14</a></td></tr>
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
