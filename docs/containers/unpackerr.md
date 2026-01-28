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
<tr><td><div id="tag8559" onclick="CopyToClipboard('tag8559');return false;" class="tag-decoration">nightly</div><div id="tag3765" onclick="CopyToClipboard('tag3765');return false;" class="tag-decoration">nightly-327a7b2</div><div id="tag21050" onclick="CopyToClipboard('tag21050');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/327a7b256b900ed4b1a35513423040d88ad35b23" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21354187146" target="_blank">2026-01-26 10:21:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15191" onclick="CopyToClipboard('tag15191');return false;" class="tag-decoration">release</div><div id="tag22111" onclick="CopyToClipboard('tag22111');return false;" class="tag-decoration">release-e8fa352</div><div id="tag8387" onclick="CopyToClipboard('tag8387');return false;" class="tag-decoration">release-0.14.5</div><div id="tag25766" onclick="CopyToClipboard('tag25766');return false;" class="tag-decoration">release-v0</div><div id="tag31138" onclick="CopyToClipboard('tag31138');return false;" class="tag-decoration">release-v0.14</div><div id="tag14497" onclick="CopyToClipboard('tag14497');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e8fa3524f8a266a77d82cb2a9a4ae7d4a7c4f86d" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21426218825" target="_blank">2026-01-28 05:23:49</a></td></tr>
<tr><td><div id="tag31343" onclick="CopyToClipboard('tag31343');return false;" class="tag-decoration">testing</div><div id="tag27243" onclick="CopyToClipboard('tag27243');return false;" class="tag-decoration">testing-64b81a3</div><div id="tag31059" onclick="CopyToClipboard('tag31059');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag21653" onclick="CopyToClipboard('tag21653');return false;" class="tag-decoration">testing-v0</div><div id="tag1249" onclick="CopyToClipboard('tag1249');return false;" class="tag-decoration">testing-v0.14</div><div id="tag26109" onclick="CopyToClipboard('tag26109');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/64b81a35e4b18faac547155c20b2d7d4dac54681" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21354188043" target="_blank">2026-01-26 10:21:07</a></td></tr>
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
