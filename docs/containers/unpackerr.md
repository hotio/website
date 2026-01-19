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
<tr><td><div id="tag20173" onclick="CopyToClipboard('tag20173');return false;" class="tag-decoration">nightly</div><div id="tag574" onclick="CopyToClipboard('tag574');return false;" class="tag-decoration">nightly-ab142a5</div><div id="tag26763" onclick="CopyToClipboard('tag26763');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/ab142a58413e07e230674dcd14afab21d934e721" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21132241024" target="_blank">2026-01-19 09:31:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11703" onclick="CopyToClipboard('tag11703');return false;" class="tag-decoration">release</div><div id="tag31949" onclick="CopyToClipboard('tag31949');return false;" class="tag-decoration">release-e7fd672</div><div id="tag11346" onclick="CopyToClipboard('tag11346');return false;" class="tag-decoration">release-0.14.5</div><div id="tag27732" onclick="CopyToClipboard('tag27732');return false;" class="tag-decoration">release-v0</div><div id="tag24337" onclick="CopyToClipboard('tag24337');return false;" class="tag-decoration">release-v0.14</div><div id="tag1630" onclick="CopyToClipboard('tag1630');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e7fd6721c671975f62045c03fe961b8e0de41e54" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21132241559" target="_blank">2026-01-19 09:31:17</a></td></tr>
<tr><td><div id="tag13309" onclick="CopyToClipboard('tag13309');return false;" class="tag-decoration">testing</div><div id="tag19981" onclick="CopyToClipboard('tag19981');return false;" class="tag-decoration">testing-b61ed41</div><div id="tag8118" onclick="CopyToClipboard('tag8118');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag22928" onclick="CopyToClipboard('tag22928');return false;" class="tag-decoration">testing-v0</div><div id="tag1522" onclick="CopyToClipboard('tag1522');return false;" class="tag-decoration">testing-v0.14</div><div id="tag22844" onclick="CopyToClipboard('tag22844');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/b61ed412dc7987d369de5b021b6752acb56538ad" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21132241797" target="_blank">2026-01-19 09:31:18</a></td></tr>
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
