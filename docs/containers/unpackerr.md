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
<tr><td><div id="tag1221" onclick="CopyToClipboard('tag1221');return false;" class="tag-decoration">nightly</div><div id="tag18041" onclick="CopyToClipboard('tag18041');return false;" class="tag-decoration">nightly-eb38d7e</div><div id="tag9966" onclick="CopyToClipboard('tag9966');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/eb38d7e0c3c3a91437a2463536680edc297cd680" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21426218274" target="_blank">2026-01-28 05:23:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29760" onclick="CopyToClipboard('tag29760');return false;" class="tag-decoration">release</div><div id="tag20636" onclick="CopyToClipboard('tag20636');return false;" class="tag-decoration">release-e8fa352</div><div id="tag12544" onclick="CopyToClipboard('tag12544');return false;" class="tag-decoration">release-0.14.5</div><div id="tag11162" onclick="CopyToClipboard('tag11162');return false;" class="tag-decoration">release-v0</div><div id="tag2194" onclick="CopyToClipboard('tag2194');return false;" class="tag-decoration">release-v0.14</div><div id="tag14723" onclick="CopyToClipboard('tag14723');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e8fa3524f8a266a77d82cb2a9a4ae7d4a7c4f86d" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21426218825" target="_blank">2026-01-28 05:23:49</a></td></tr>
<tr><td><div id="tag29957" onclick="CopyToClipboard('tag29957');return false;" class="tag-decoration">testing</div><div id="tag1646" onclick="CopyToClipboard('tag1646');return false;" class="tag-decoration">testing-64b81a3</div><div id="tag20413" onclick="CopyToClipboard('tag20413');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag2447" onclick="CopyToClipboard('tag2447');return false;" class="tag-decoration">testing-v0</div><div id="tag27446" onclick="CopyToClipboard('tag27446');return false;" class="tag-decoration">testing-v0.14</div><div id="tag6379" onclick="CopyToClipboard('tag6379');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/64b81a35e4b18faac547155c20b2d7d4dac54681" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21354188043" target="_blank">2026-01-26 10:21:07</a></td></tr>
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
