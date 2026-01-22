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
<tr><td><div id="tag25648" onclick="CopyToClipboard('tag25648');return false;" class="tag-decoration">nightly</div><div id="tag7941" onclick="CopyToClipboard('tag7941');return false;" class="tag-decoration">nightly-27d699d</div><div id="tag14359" onclick="CopyToClipboard('tag14359');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/27d699d3ba08b6554b4ce48575efa5f6d2a063c9" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21244734284" target="_blank">2026-01-22 10:20:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3308" onclick="CopyToClipboard('tag3308');return false;" class="tag-decoration">release</div><div id="tag29037" onclick="CopyToClipboard('tag29037');return false;" class="tag-decoration">release-7e562e8</div><div id="tag10755" onclick="CopyToClipboard('tag10755');return false;" class="tag-decoration">release-0.14.5</div><div id="tag31858" onclick="CopyToClipboard('tag31858');return false;" class="tag-decoration">release-v0</div><div id="tag17338" onclick="CopyToClipboard('tag17338');return false;" class="tag-decoration">release-v0.14</div><div id="tag1842" onclick="CopyToClipboard('tag1842');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7e562e88be8fbef8e81a2986cab67fc2e82e0110" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21244734972" target="_blank">2026-01-22 10:20:20</a></td></tr>
<tr><td><div id="tag7586" onclick="CopyToClipboard('tag7586');return false;" class="tag-decoration">testing</div><div id="tag24769" onclick="CopyToClipboard('tag24769');return false;" class="tag-decoration">testing-56eca4c</div><div id="tag15486" onclick="CopyToClipboard('tag15486');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag5601" onclick="CopyToClipboard('tag5601');return false;" class="tag-decoration">testing-v0</div><div id="tag1989" onclick="CopyToClipboard('tag1989');return false;" class="tag-decoration">testing-v0.14</div><div id="tag17764" onclick="CopyToClipboard('tag17764');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/56eca4cc67b14fe7a2d702fef0f452508aee6d8d" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21244736110" target="_blank">2026-01-22 10:20:22</a></td></tr>
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
