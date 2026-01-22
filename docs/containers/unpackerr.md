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
<tr><td><div id="tag5900" onclick="CopyToClipboard('tag5900');return false;" class="tag-decoration">nightly</div><div id="tag19118" onclick="CopyToClipboard('tag19118');return false;" class="tag-decoration">nightly-2259677</div><div id="tag25362" onclick="CopyToClipboard('tag25362');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/2259677751eeb5e584c470f31f71f724c57fd818" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21243880216" target="_blank">2026-01-22 09:52:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2779" onclick="CopyToClipboard('tag2779');return false;" class="tag-decoration">release</div><div id="tag19148" onclick="CopyToClipboard('tag19148');return false;" class="tag-decoration">release-7e562e8</div><div id="tag29304" onclick="CopyToClipboard('tag29304');return false;" class="tag-decoration">release-0.14.5</div><div id="tag7704" onclick="CopyToClipboard('tag7704');return false;" class="tag-decoration">release-v0</div><div id="tag13771" onclick="CopyToClipboard('tag13771');return false;" class="tag-decoration">release-v0.14</div><div id="tag8864" onclick="CopyToClipboard('tag8864');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7e562e88be8fbef8e81a2986cab67fc2e82e0110" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21244734972" target="_blank">2026-01-22 10:20:20</a></td></tr>
<tr><td><div id="tag18140" onclick="CopyToClipboard('tag18140');return false;" class="tag-decoration">testing</div><div id="tag22707" onclick="CopyToClipboard('tag22707');return false;" class="tag-decoration">testing-56eca4c</div><div id="tag25887" onclick="CopyToClipboard('tag25887');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag2262" onclick="CopyToClipboard('tag2262');return false;" class="tag-decoration">testing-v0</div><div id="tag28006" onclick="CopyToClipboard('tag28006');return false;" class="tag-decoration">testing-v0.14</div><div id="tag19600" onclick="CopyToClipboard('tag19600');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/56eca4cc67b14fe7a2d702fef0f452508aee6d8d" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21244736110" target="_blank">2026-01-22 10:20:22</a></td></tr>
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
