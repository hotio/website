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
<tr><td><div id="tag15355" onclick="CopyToClipboard('tag15355');return false;" class="tag-decoration">nightly</div><div id="tag29266" onclick="CopyToClipboard('tag29266');return false;" class="tag-decoration">nightly-5516f49</div><div id="tag24752" onclick="CopyToClipboard('tag24752');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/5516f49ae07c3e4a2a4faa38e5b651458d881658" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21065746731" target="_blank">2026-01-16 11:53:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag712" onclick="CopyToClipboard('tag712');return false;" class="tag-decoration">release</div><div id="tag11744" onclick="CopyToClipboard('tag11744');return false;" class="tag-decoration">release-b62d21c</div><div id="tag25539" onclick="CopyToClipboard('tag25539');return false;" class="tag-decoration">release-0.14.5</div><div id="tag27641" onclick="CopyToClipboard('tag27641');return false;" class="tag-decoration">release-v0</div><div id="tag21574" onclick="CopyToClipboard('tag21574');return false;" class="tag-decoration">release-v0.14</div><div id="tag30960" onclick="CopyToClipboard('tag30960');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/b62d21cea8712ec6aef5ae333a86e2aa1891655d" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21065747049" target="_blank">2026-01-16 11:53:11</a></td></tr>
<tr><td><div id="tag25133" onclick="CopyToClipboard('tag25133');return false;" class="tag-decoration">testing</div><div id="tag32750" onclick="CopyToClipboard('tag32750');return false;" class="tag-decoration">testing-50bac72</div><div id="tag16530" onclick="CopyToClipboard('tag16530');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag2611" onclick="CopyToClipboard('tag2611');return false;" class="tag-decoration">testing-v0</div><div id="tag17183" onclick="CopyToClipboard('tag17183');return false;" class="tag-decoration">testing-v0.14</div><div id="tag477" onclick="CopyToClipboard('tag477');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/50bac72ecc533b0d0423beb7221d88a61fa428a4" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21090401532" target="_blank">2026-01-17 07:02:01</a></td></tr>
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
