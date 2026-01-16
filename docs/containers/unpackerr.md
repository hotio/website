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
<tr><td><div id="tag2661" onclick="CopyToClipboard('tag2661');return false;" class="tag-decoration">nightly</div><div id="tag22116" onclick="CopyToClipboard('tag22116');return false;" class="tag-decoration">nightly-6c8d3e5</div><div id="tag28474" onclick="CopyToClipboard('tag28474');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/6c8d3e516cc3cf4f10848f56cee1978403ca05a1" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21063308165" target="_blank">2026-01-16 10:18:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12990" onclick="CopyToClipboard('tag12990');return false;" class="tag-decoration">release</div><div id="tag21130" onclick="CopyToClipboard('tag21130');return false;" class="tag-decoration">release-784e79e</div><div id="tag481" onclick="CopyToClipboard('tag481');return false;" class="tag-decoration">release-0.14.5</div><div id="tag17002" onclick="CopyToClipboard('tag17002');return false;" class="tag-decoration">release-v0</div><div id="tag24325" onclick="CopyToClipboard('tag24325');return false;" class="tag-decoration">release-v0.14</div><div id="tag10572" onclick="CopyToClipboard('tag10572');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/784e79e9b01aff200f9a3552a3dc5d4a5993de1a" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21064914806" target="_blank">2026-01-16 11:19:12</a></td></tr>
<tr><td><div id="tag3295" onclick="CopyToClipboard('tag3295');return false;" class="tag-decoration">testing</div><div id="tag3352" onclick="CopyToClipboard('tag3352');return false;" class="tag-decoration">testing-68f3a91</div><div id="tag10125" onclick="CopyToClipboard('tag10125');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag7477" onclick="CopyToClipboard('tag7477');return false;" class="tag-decoration">testing-v0</div><div id="tag13238" onclick="CopyToClipboard('tag13238');return false;" class="tag-decoration">testing-v0.14</div><div id="tag17410" onclick="CopyToClipboard('tag17410');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/68f3a9142dfd87b3d3bc294999fab0772843196b" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21063309431" target="_blank">2026-01-16 10:18:17</a></td></tr>
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
