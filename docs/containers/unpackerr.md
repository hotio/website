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
<tr><td><div id="tag7086" onclick="CopyToClipboard('tag7086');return false;" class="tag-decoration">nightly</div><div id="tag25898" onclick="CopyToClipboard('tag25898');return false;" class="tag-decoration">nightly-5516f49</div><div id="tag4383" onclick="CopyToClipboard('tag4383');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/5516f49ae07c3e4a2a4faa38e5b651458d881658" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21065746731" target="_blank">2026-01-16 11:53:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10624" onclick="CopyToClipboard('tag10624');return false;" class="tag-decoration">release</div><div id="tag16436" onclick="CopyToClipboard('tag16436');return false;" class="tag-decoration">release-784e79e</div><div id="tag14346" onclick="CopyToClipboard('tag14346');return false;" class="tag-decoration">release-0.14.5</div><div id="tag8141" onclick="CopyToClipboard('tag8141');return false;" class="tag-decoration">release-v0</div><div id="tag12349" onclick="CopyToClipboard('tag12349');return false;" class="tag-decoration">release-v0.14</div><div id="tag146" onclick="CopyToClipboard('tag146');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/784e79e9b01aff200f9a3552a3dc5d4a5993de1a" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21064914806" target="_blank">2026-01-16 11:19:12</a></td></tr>
<tr><td><div id="tag6774" onclick="CopyToClipboard('tag6774');return false;" class="tag-decoration">testing</div><div id="tag21610" onclick="CopyToClipboard('tag21610');return false;" class="tag-decoration">testing-8d3fabc</div><div id="tag13466" onclick="CopyToClipboard('tag13466');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag29355" onclick="CopyToClipboard('tag29355');return false;" class="tag-decoration">testing-v0</div><div id="tag25145" onclick="CopyToClipboard('tag25145');return false;" class="tag-decoration">testing-v0.14</div><div id="tag9244" onclick="CopyToClipboard('tag9244');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/8d3fabcc95ac48a798f3c405c04c77501922f8ad" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21065747554" target="_blank">2026-01-16 11:53:12</a></td></tr>
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
