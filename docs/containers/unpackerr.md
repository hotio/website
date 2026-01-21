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
<tr><td><div id="tag17293" onclick="CopyToClipboard('tag17293');return false;" class="tag-decoration">nightly</div><div id="tag17045" onclick="CopyToClipboard('tag17045');return false;" class="tag-decoration">nightly-e42ead5</div><div id="tag5026" onclick="CopyToClipboard('tag5026');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/e42ead5c6560633d757e3d0c3e7ff5d8bb5ad683" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21198613529" target="_blank">2026-01-21 05:38:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1088" onclick="CopyToClipboard('tag1088');return false;" class="tag-decoration">release</div><div id="tag9905" onclick="CopyToClipboard('tag9905');return false;" class="tag-decoration">release-2683d51</div><div id="tag29989" onclick="CopyToClipboard('tag29989');return false;" class="tag-decoration">release-0.14.5</div><div id="tag30874" onclick="CopyToClipboard('tag30874');return false;" class="tag-decoration">release-v0</div><div id="tag27893" onclick="CopyToClipboard('tag27893');return false;" class="tag-decoration">release-v0.14</div><div id="tag32102" onclick="CopyToClipboard('tag32102');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2683d51f15ee465194639bbcacd730db631ef778" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21198614175" target="_blank">2026-01-21 05:38:24</a></td></tr>
<tr><td><div id="tag23099" onclick="CopyToClipboard('tag23099');return false;" class="tag-decoration">testing</div><div id="tag1756" onclick="CopyToClipboard('tag1756');return false;" class="tag-decoration">testing-6a0d03c</div><div id="tag26209" onclick="CopyToClipboard('tag26209');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag1827" onclick="CopyToClipboard('tag1827');return false;" class="tag-decoration">testing-v0</div><div id="tag4640" onclick="CopyToClipboard('tag4640');return false;" class="tag-decoration">testing-v0.14</div><div id="tag5984" onclick="CopyToClipboard('tag5984');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6a0d03c130bd801f40dbd2198ffa500a5e758454" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21198614709" target="_blank">2026-01-21 05:38:26</a></td></tr>
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
