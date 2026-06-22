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
<tr><td><div id="tag25360" onclick="CopyToClipboard('tag25360');return false;" class="tag-decoration">nightly</div><div id="tag21517" onclick="CopyToClipboard('tag21517');return false;" class="tag-decoration">nightly-8b3d6b1</div><div id="tag24716" onclick="CopyToClipboard('tag24716');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8b3d6b1fc098d9df7be85ed73cc86e551501fc8e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27983537074" target="_blank">2026-06-22 20:58:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4852" onclick="CopyToClipboard('tag4852');return false;" class="tag-decoration">release</div><div id="tag23502" onclick="CopyToClipboard('tag23502');return false;" class="tag-decoration">release-57e66b6</div><div id="tag28816" onclick="CopyToClipboard('tag28816');return false;" class="tag-decoration">release-0.15.2</div><div id="tag19964" onclick="CopyToClipboard('tag19964');return false;" class="tag-decoration">release-v0</div><div id="tag27870" onclick="CopyToClipboard('tag27870');return false;" class="tag-decoration">release-v0.15</div><div id="tag1252" onclick="CopyToClipboard('tag1252');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/57e66b627c56dcfadece67307597bc5ef3913037" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27915669265" target="_blank">2026-06-21 19:54:05</a></td></tr>
<tr><td><div id="tag12781" onclick="CopyToClipboard('tag12781');return false;" class="tag-decoration">testing</div><div id="tag12158" onclick="CopyToClipboard('tag12158');return false;" class="tag-decoration">testing-22fed41</div><div id="tag12960" onclick="CopyToClipboard('tag12960');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag11184" onclick="CopyToClipboard('tag11184');return false;" class="tag-decoration">testing-v0</div><div id="tag25032" onclick="CopyToClipboard('tag25032');return false;" class="tag-decoration">testing-v0.15</div><div id="tag22037" onclick="CopyToClipboard('tag22037');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/22fed412d61bfe4cea468f57cd03bcf8565c5514" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/27983537685" target="_blank">2026-06-22 20:58:04</a></td></tr>
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
