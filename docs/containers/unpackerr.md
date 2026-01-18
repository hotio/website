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
<tr><td><div id="tag413" onclick="CopyToClipboard('tag413');return false;" class="tag-decoration">nightly</div><div id="tag5984" onclick="CopyToClipboard('tag5984');return false;" class="tag-decoration">nightly-2b3c444</div><div id="tag31945" onclick="CopyToClipboard('tag31945');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/2b3c444e60ff40604e6935360dd03bbb33f3f784" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21113703044" target="_blank">2026-01-18 14:57:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9950" onclick="CopyToClipboard('tag9950');return false;" class="tag-decoration">release</div><div id="tag25146" onclick="CopyToClipboard('tag25146');return false;" class="tag-decoration">release-6284e67</div><div id="tag241" onclick="CopyToClipboard('tag241');return false;" class="tag-decoration">release-0.14.5</div><div id="tag16472" onclick="CopyToClipboard('tag16472');return false;" class="tag-decoration">release-v0</div><div id="tag4557" onclick="CopyToClipboard('tag4557');return false;" class="tag-decoration">release-v0.14</div><div id="tag6235" onclick="CopyToClipboard('tag6235');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6284e6747486b10ee97555ec381f1d9fe9f84f2e" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21113703091" target="_blank">2026-01-18 14:57:41</a></td></tr>
<tr><td><div id="tag13448" onclick="CopyToClipboard('tag13448');return false;" class="tag-decoration">testing</div><div id="tag28097" onclick="CopyToClipboard('tag28097');return false;" class="tag-decoration">testing-7d04ad4</div><div id="tag4015" onclick="CopyToClipboard('tag4015');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag689" onclick="CopyToClipboard('tag689');return false;" class="tag-decoration">testing-v0</div><div id="tag9981" onclick="CopyToClipboard('tag9981');return false;" class="tag-decoration">testing-v0.14</div><div id="tag7299" onclick="CopyToClipboard('tag7299');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7d04ad4c47beecceb3672c47cd6f041df2573f5a" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21113703270" target="_blank">2026-01-18 14:57:42</a></td></tr>
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
