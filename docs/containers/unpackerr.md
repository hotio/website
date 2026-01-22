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
<tr><td><div id="tag23893" onclick="CopyToClipboard('tag23893');return false;" class="tag-decoration">nightly</div><div id="tag15069" onclick="CopyToClipboard('tag15069');return false;" class="tag-decoration">nightly-fcb30ef</div><div id="tag12624" onclick="CopyToClipboard('tag12624');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/fcb30ef08c5e50a703e3e23d871e391f9ba5ec9f" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21246780859" target="_blank">2026-01-22 11:29:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29642" onclick="CopyToClipboard('tag29642');return false;" class="tag-decoration">release</div><div id="tag22482" onclick="CopyToClipboard('tag22482');return false;" class="tag-decoration">release-7e562e8</div><div id="tag16260" onclick="CopyToClipboard('tag16260');return false;" class="tag-decoration">release-0.14.5</div><div id="tag30433" onclick="CopyToClipboard('tag30433');return false;" class="tag-decoration">release-v0</div><div id="tag19965" onclick="CopyToClipboard('tag19965');return false;" class="tag-decoration">release-v0.14</div><div id="tag5215" onclick="CopyToClipboard('tag5215');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7e562e88be8fbef8e81a2986cab67fc2e82e0110" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21244734972" target="_blank">2026-01-22 10:20:20</a></td></tr>
<tr><td><div id="tag22469" onclick="CopyToClipboard('tag22469');return false;" class="tag-decoration">testing</div><div id="tag30197" onclick="CopyToClipboard('tag30197');return false;" class="tag-decoration">testing-56eca4c</div><div id="tag19233" onclick="CopyToClipboard('tag19233');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag22607" onclick="CopyToClipboard('tag22607');return false;" class="tag-decoration">testing-v0</div><div id="tag19518" onclick="CopyToClipboard('tag19518');return false;" class="tag-decoration">testing-v0.14</div><div id="tag29142" onclick="CopyToClipboard('tag29142');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/56eca4cc67b14fe7a2d702fef0f452508aee6d8d" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21244736110" target="_blank">2026-01-22 10:20:22</a></td></tr>
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
