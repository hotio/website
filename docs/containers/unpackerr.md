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
<tr><td><div id="tag6186" onclick="CopyToClipboard('tag6186');return false;" class="tag-decoration">nightly</div><div id="tag2361" onclick="CopyToClipboard('tag2361');return false;" class="tag-decoration">nightly-c08085a</div><div id="tag4143" onclick="CopyToClipboard('tag4143');return false;" class="tag-decoration">nightly-8289162a14fefc71a46c2d5dbcf9e72fb403b6a0</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/c08085a41455a0885c37918fb800bad8a5319e57" target="_blank">Version update: 297636534e4685c942868bc6a2b8ba52abba0127 => 8289162a14fefc71a46c2d5dbcf9e72fb403b6a0</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22652794386" target="_blank">2026-03-04 02:48:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28368" onclick="CopyToClipboard('tag28368');return false;" class="tag-decoration">release</div><div id="tag27905" onclick="CopyToClipboard('tag27905');return false;" class="tag-decoration">release-72946f2</div><div id="tag4071" onclick="CopyToClipboard('tag4071');return false;" class="tag-decoration">release-0.15.0</div><div id="tag27579" onclick="CopyToClipboard('tag27579');return false;" class="tag-decoration">release-v0</div><div id="tag11098" onclick="CopyToClipboard('tag11098');return false;" class="tag-decoration">release-v0.15</div><div id="tag13334" onclick="CopyToClipboard('tag13334');return false;" class="tag-decoration">release-v0.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/72946f281cd7bc5261546b59f2e5e58560952e08" target="_blank">Version update: 0.14.5 => 0.15.0</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22563009456" target="_blank">2026-03-02 05:39:55</a></td></tr>
<tr><td><div id="tag18458" onclick="CopyToClipboard('tag18458');return false;" class="tag-decoration">testing</div><div id="tag24999" onclick="CopyToClipboard('tag24999');return false;" class="tag-decoration">testing-9a7bc55</div><div id="tag9908" onclick="CopyToClipboard('tag9908');return false;" class="tag-decoration">testing-0.15.0</div><div id="tag28370" onclick="CopyToClipboard('tag28370');return false;" class="tag-decoration">testing-v0</div><div id="tag10696" onclick="CopyToClipboard('tag10696');return false;" class="tag-decoration">testing-v0.15</div><div id="tag28462" onclick="CopyToClipboard('tag28462');return false;" class="tag-decoration">testing-v0.15.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/9a7bc55e1bd9c99839c9f52e4cd5adeee1498b35" target="_blank">Version update: 0.14.5 => 0.15.0</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22563010421" target="_blank">2026-03-02 05:39:58</a></td></tr>
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
