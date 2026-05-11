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
<tr><td><div id="tag32116" onclick="CopyToClipboard('tag32116');return false;" class="tag-decoration">nightly</div><div id="tag13875" onclick="CopyToClipboard('tag13875');return false;" class="tag-decoration">nightly-0f218d5</div><div id="tag11559" onclick="CopyToClipboard('tag11559');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/0f218d53df02c39a3d5a1ebd27143afec98aeaca" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25664538000" target="_blank">2026-05-11 10:25:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30823" onclick="CopyToClipboard('tag30823');return false;" class="tag-decoration">release</div><div id="tag27029" onclick="CopyToClipboard('tag27029');return false;" class="tag-decoration">release-b85beff</div><div id="tag1416" onclick="CopyToClipboard('tag1416');return false;" class="tag-decoration">release-0.15.2</div><div id="tag5056" onclick="CopyToClipboard('tag5056');return false;" class="tag-decoration">release-v0</div><div id="tag24071" onclick="CopyToClipboard('tag24071');return false;" class="tag-decoration">release-v0.15</div><div id="tag920" onclick="CopyToClipboard('tag920');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/b85beff6a578df141733222adbf0980f149ad4e7" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25664538770" target="_blank">2026-05-11 10:25:16</a></td></tr>
<tr><td><div id="tag12162" onclick="CopyToClipboard('tag12162');return false;" class="tag-decoration">testing</div><div id="tag20710" onclick="CopyToClipboard('tag20710');return false;" class="tag-decoration">testing-2b37124</div><div id="tag20214" onclick="CopyToClipboard('tag20214');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag25631" onclick="CopyToClipboard('tag25631');return false;" class="tag-decoration">testing-v0</div><div id="tag11154" onclick="CopyToClipboard('tag11154');return false;" class="tag-decoration">testing-v0.15</div><div id="tag24417" onclick="CopyToClipboard('tag24417');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2b371249ac7674560d1d7f87d1f18baebf34b84f" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25664541013" target="_blank">2026-05-11 10:25:18</a></td></tr>
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
