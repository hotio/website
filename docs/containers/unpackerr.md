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
<tr><td><div id="tag20169" onclick="CopyToClipboard('tag20169');return false;" class="tag-decoration">nightly</div><div id="tag616" onclick="CopyToClipboard('tag616');return false;" class="tag-decoration">nightly-327a7b2</div><div id="tag21088" onclick="CopyToClipboard('tag21088');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/327a7b256b900ed4b1a35513423040d88ad35b23" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21354187146" target="_blank">2026-01-26 10:21:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1959" onclick="CopyToClipboard('tag1959');return false;" class="tag-decoration">release</div><div id="tag8579" onclick="CopyToClipboard('tag8579');return false;" class="tag-decoration">release-c02f8aa</div><div id="tag6409" onclick="CopyToClipboard('tag6409');return false;" class="tag-decoration">release-0.14.5</div><div id="tag31731" onclick="CopyToClipboard('tag31731');return false;" class="tag-decoration">release-v0</div><div id="tag9659" onclick="CopyToClipboard('tag9659');return false;" class="tag-decoration">release-v0.14</div><div id="tag3690" onclick="CopyToClipboard('tag3690');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/c02f8aa54fa4d1888a1661893e6d3091350d1527" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21354187439" target="_blank">2026-01-26 10:21:06</a></td></tr>
<tr><td><div id="tag21806" onclick="CopyToClipboard('tag21806');return false;" class="tag-decoration">testing</div><div id="tag8385" onclick="CopyToClipboard('tag8385');return false;" class="tag-decoration">testing-64b81a3</div><div id="tag14375" onclick="CopyToClipboard('tag14375');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag13263" onclick="CopyToClipboard('tag13263');return false;" class="tag-decoration">testing-v0</div><div id="tag3812" onclick="CopyToClipboard('tag3812');return false;" class="tag-decoration">testing-v0.14</div><div id="tag8925" onclick="CopyToClipboard('tag8925');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/64b81a35e4b18faac547155c20b2d7d4dac54681" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21354188043" target="_blank">2026-01-26 10:21:07</a></td></tr>
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
