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
<tr><td><div id="tag2548" onclick="CopyToClipboard('tag2548');return false;" class="tag-decoration">nightly</div><div id="tag13487" onclick="CopyToClipboard('tag13487');return false;" class="tag-decoration">nightly-a39000d</div><div id="tag12022" onclick="CopyToClipboard('tag12022');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a39000df91e333decdf34f79156d987fc5a52ad4" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21322464820" target="_blank">2026-01-24 22:15:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30636" onclick="CopyToClipboard('tag30636');return false;" class="tag-decoration">release</div><div id="tag19503" onclick="CopyToClipboard('tag19503');return false;" class="tag-decoration">release-72e1705</div><div id="tag30485" onclick="CopyToClipboard('tag30485');return false;" class="tag-decoration">release-0.14.5</div><div id="tag6062" onclick="CopyToClipboard('tag6062');return false;" class="tag-decoration">release-v0</div><div id="tag16790" onclick="CopyToClipboard('tag16790');return false;" class="tag-decoration">release-v0.14</div><div id="tag25719" onclick="CopyToClipboard('tag25719');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/72e1705926849b4fadcfb6deab74175add495f2e" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21322465148" target="_blank">2026-01-24 22:15:34</a></td></tr>
<tr><td><div id="tag31481" onclick="CopyToClipboard('tag31481');return false;" class="tag-decoration">testing</div><div id="tag17547" onclick="CopyToClipboard('tag17547');return false;" class="tag-decoration">testing-91167aa</div><div id="tag13560" onclick="CopyToClipboard('tag13560');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag20415" onclick="CopyToClipboard('tag20415');return false;" class="tag-decoration">testing-v0</div><div id="tag9883" onclick="CopyToClipboard('tag9883');return false;" class="tag-decoration">testing-v0.14</div><div id="tag16938" onclick="CopyToClipboard('tag16938');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/91167aafe17c9465c3cfc985f208c07f0be71320" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21322465459" target="_blank">2026-01-24 22:15:35</a></td></tr>
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
