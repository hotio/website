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
<tr><td><div id="tag516" onclick="CopyToClipboard('tag516');return false;" class="tag-decoration">nightly</div><div id="tag17304" onclick="CopyToClipboard('tag17304');return false;" class="tag-decoration">nightly-df0d11a</div><div id="tag17874" onclick="CopyToClipboard('tag17874');return false;" class="tag-decoration">nightly-dca9c0ac42a3df93bc9eb0fc52e53ebd44b75f11</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/df0d11a9cecdbd03125e5dda71dbe30b505ea80c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32789420796" target="_blank">2026-08-24 23:27:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24559" onclick="CopyToClipboard('tag24559');return false;" class="tag-decoration">release</div><div id="tag14045" onclick="CopyToClipboard('tag14045');return false;" class="tag-decoration">release-6ae9bb6</div><div id="tag24336" onclick="CopyToClipboard('tag24336');return false;" class="tag-decoration">release-0.15.2</div><div id="tag29687" onclick="CopyToClipboard('tag29687');return false;" class="tag-decoration">release-v0</div><div id="tag17717" onclick="CopyToClipboard('tag17717');return false;" class="tag-decoration">release-v0.15</div><div id="tag9328" onclick="CopyToClipboard('tag9328');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6ae9bb6ac84f205b847e944e17e8a2e2ccc4bd82" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32326844469" target="_blank">2026-08-20 03:03:13</a></td></tr>
<tr><td><div id="tag26287" onclick="CopyToClipboard('tag26287');return false;" class="tag-decoration">testing</div><div id="tag15399" onclick="CopyToClipboard('tag15399');return false;" class="tag-decoration">testing-73f4d81</div><div id="tag1072" onclick="CopyToClipboard('tag1072');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag365" onclick="CopyToClipboard('tag365');return false;" class="tag-decoration">testing-v0</div><div id="tag20343" onclick="CopyToClipboard('tag20343');return false;" class="tag-decoration">testing-v0.15</div><div id="tag30557" onclick="CopyToClipboard('tag30557');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/73f4d81b8ee3fbd8f8e86cfd819c3533858e6d72" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/32326845789" target="_blank">2026-08-20 03:03:14</a></td></tr>
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
