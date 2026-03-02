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
<tr><td><div id="tag7173" onclick="CopyToClipboard('tag7173');return false;" class="tag-decoration">nightly</div><div id="tag25707" onclick="CopyToClipboard('tag25707');return false;" class="tag-decoration">nightly-8a698fc</div><div id="tag22802" onclick="CopyToClipboard('tag22802');return false;" class="tag-decoration">nightly-d83d76922f52da31f8d6be926b838aaa0166c10b</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8a698fc489456e7d12410aaebda3835244d3fd9f" target="_blank">Version update: 320729880f6fb35f6ca1a444841b8a1854808592 => d83d76922f52da31f8d6be926b838aaa0166c10b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22563008610" target="_blank">2026-03-02 05:39:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24001" onclick="CopyToClipboard('tag24001');return false;" class="tag-decoration">release</div><div id="tag23882" onclick="CopyToClipboard('tag23882');return false;" class="tag-decoration">release-1b24405</div><div id="tag18402" onclick="CopyToClipboard('tag18402');return false;" class="tag-decoration">release-0.14.5</div><div id="tag28285" onclick="CopyToClipboard('tag28285');return false;" class="tag-decoration">release-v0</div><div id="tag24238" onclick="CopyToClipboard('tag24238');return false;" class="tag-decoration">release-v0.14</div><div id="tag4850" onclick="CopyToClipboard('tag4850');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/1b2440584c8c5c182575ee09194034a992ed0541" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22292143031" target="_blank">2026-02-23 03:44:41</a></td></tr>
<tr><td><div id="tag19688" onclick="CopyToClipboard('tag19688');return false;" class="tag-decoration">testing</div><div id="tag19323" onclick="CopyToClipboard('tag19323');return false;" class="tag-decoration">testing-9a7bc55</div><div id="tag16129" onclick="CopyToClipboard('tag16129');return false;" class="tag-decoration">testing-0.15.0</div><div id="tag32024" onclick="CopyToClipboard('tag32024');return false;" class="tag-decoration">testing-v0</div><div id="tag1935" onclick="CopyToClipboard('tag1935');return false;" class="tag-decoration">testing-v0.15</div><div id="tag9982" onclick="CopyToClipboard('tag9982');return false;" class="tag-decoration">testing-v0.15.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/9a7bc55e1bd9c99839c9f52e4cd5adeee1498b35" target="_blank">Version update: 0.14.5 => 0.15.0</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22563010421" target="_blank">2026-03-02 05:39:58</a></td></tr>
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
