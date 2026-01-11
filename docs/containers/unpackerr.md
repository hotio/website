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
<tr><td><div id="tag2983" onclick="CopyToClipboard('tag2983');return false;" class="tag-decoration">nightly</div><div id="tag18801" onclick="CopyToClipboard('tag18801');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag28066" onclick="CopyToClipboard('tag28066');return false;" class="tag-decoration">nightly-3af7f56</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/3af7f56e7a78daf7eec3c990b99518ef7efa30cc" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20892092232" target="_blank">2026-01-11 08:20:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31082" onclick="CopyToClipboard('tag31082');return false;" class="tag-decoration">release</div><div id="tag21238" onclick="CopyToClipboard('tag21238');return false;" class="tag-decoration">release-0.14.5</div><div id="tag10680" onclick="CopyToClipboard('tag10680');return false;" class="tag-decoration">release-b2c4333</div><div id="tag14194" onclick="CopyToClipboard('tag14194');return false;" class="tag-decoration">release-v0</div><div id="tag31686" onclick="CopyToClipboard('tag31686');return false;" class="tag-decoration">release-v0.14</div><div id="tag7320" onclick="CopyToClipboard('tag7320');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/b2c43336c46bf253dc5e945bc1b9b86aa939b964" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20850355102" target="_blank">2026-01-09 11:23:41</a></td></tr>
<tr><td><div id="tag20716" onclick="CopyToClipboard('tag20716');return false;" class="tag-decoration">testing</div><div id="tag23878" onclick="CopyToClipboard('tag23878');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag22482" onclick="CopyToClipboard('tag22482');return false;" class="tag-decoration">testing-0b9a28d</div><div id="tag5778" onclick="CopyToClipboard('tag5778');return false;" class="tag-decoration">testing-v0</div><div id="tag10720" onclick="CopyToClipboard('tag10720');return false;" class="tag-decoration">testing-v0.14</div><div id="tag2582" onclick="CopyToClipboard('tag2582');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0b9a28da88d729c2976668ad37c07ae2af5714bd" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20892092543" target="_blank">2026-01-11 08:20:10</a></td></tr>
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
