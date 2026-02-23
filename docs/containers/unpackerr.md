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
<tr><td><div id="tag2133" onclick="CopyToClipboard('tag2133');return false;" class="tag-decoration">nightly</div><div id="tag13832" onclick="CopyToClipboard('tag13832');return false;" class="tag-decoration">nightly-20bf2a8</div><div id="tag5099" onclick="CopyToClipboard('tag5099');return false;" class="tag-decoration">nightly-1939b48abc8630a0f832381f5f83f508d3ed815b</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/20bf2a80e0d4a17152b980ea744c5458bab09b36" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22292142691" target="_blank">2026-02-23 03:44:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15083" onclick="CopyToClipboard('tag15083');return false;" class="tag-decoration">release</div><div id="tag10235" onclick="CopyToClipboard('tag10235');return false;" class="tag-decoration">release-1b24405</div><div id="tag159" onclick="CopyToClipboard('tag159');return false;" class="tag-decoration">release-0.14.5</div><div id="tag2161" onclick="CopyToClipboard('tag2161');return false;" class="tag-decoration">release-v0</div><div id="tag30194" onclick="CopyToClipboard('tag30194');return false;" class="tag-decoration">release-v0.14</div><div id="tag4455" onclick="CopyToClipboard('tag4455');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/1b2440584c8c5c182575ee09194034a992ed0541" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22292143031" target="_blank">2026-02-23 03:44:41</a></td></tr>
<tr><td><div id="tag17150" onclick="CopyToClipboard('tag17150');return false;" class="tag-decoration">testing</div><div id="tag13989" onclick="CopyToClipboard('tag13989');return false;" class="tag-decoration">testing-d57eee3</div><div id="tag28951" onclick="CopyToClipboard('tag28951');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag22444" onclick="CopyToClipboard('tag22444');return false;" class="tag-decoration">testing-v0</div><div id="tag2985" onclick="CopyToClipboard('tag2985');return false;" class="tag-decoration">testing-v0.14</div><div id="tag9449" onclick="CopyToClipboard('tag9449');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d57eee3d30c55ada7de7540fbf6472200f7917ca" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22292143353" target="_blank">2026-02-23 03:44:42</a></td></tr>
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
