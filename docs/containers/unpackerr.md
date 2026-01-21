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
<tr><td><div id="tag3101" onclick="CopyToClipboard('tag3101');return false;" class="tag-decoration">nightly</div><div id="tag24420" onclick="CopyToClipboard('tag24420');return false;" class="tag-decoration">nightly-2f8e8de</div><div id="tag17947" onclick="CopyToClipboard('tag17947');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/2f8e8decf6cfef5c3d843b576db1c559a128efa6" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21200280745" target="_blank">2026-01-21 06:58:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4457" onclick="CopyToClipboard('tag4457');return false;" class="tag-decoration">release</div><div id="tag463" onclick="CopyToClipboard('tag463');return false;" class="tag-decoration">release-2683d51</div><div id="tag4239" onclick="CopyToClipboard('tag4239');return false;" class="tag-decoration">release-0.14.5</div><div id="tag14019" onclick="CopyToClipboard('tag14019');return false;" class="tag-decoration">release-v0</div><div id="tag3530" onclick="CopyToClipboard('tag3530');return false;" class="tag-decoration">release-v0.14</div><div id="tag15879" onclick="CopyToClipboard('tag15879');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2683d51f15ee465194639bbcacd730db631ef778" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21198614175" target="_blank">2026-01-21 05:38:24</a></td></tr>
<tr><td><div id="tag3293" onclick="CopyToClipboard('tag3293');return false;" class="tag-decoration">testing</div><div id="tag928" onclick="CopyToClipboard('tag928');return false;" class="tag-decoration">testing-6a0d03c</div><div id="tag24904" onclick="CopyToClipboard('tag24904');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag11097" onclick="CopyToClipboard('tag11097');return false;" class="tag-decoration">testing-v0</div><div id="tag19027" onclick="CopyToClipboard('tag19027');return false;" class="tag-decoration">testing-v0.14</div><div id="tag1619" onclick="CopyToClipboard('tag1619');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6a0d03c130bd801f40dbd2198ffa500a5e758454" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21198614709" target="_blank">2026-01-21 05:38:26</a></td></tr>
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
