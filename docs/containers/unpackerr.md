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
<tr><td><div id="tag2855" onclick="CopyToClipboard('tag2855');return false;" class="tag-decoration">nightly</div><div id="tag19309" onclick="CopyToClipboard('tag19309');return false;" class="tag-decoration">nightly-a39000d</div><div id="tag32143" onclick="CopyToClipboard('tag32143');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a39000df91e333decdf34f79156d987fc5a52ad4" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21322464820" target="_blank">2026-01-24 22:15:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2053" onclick="CopyToClipboard('tag2053');return false;" class="tag-decoration">release</div><div id="tag25490" onclick="CopyToClipboard('tag25490');return false;" class="tag-decoration">release-b94f5bd</div><div id="tag13506" onclick="CopyToClipboard('tag13506');return false;" class="tag-decoration">release-0.14.5</div><div id="tag25503" onclick="CopyToClipboard('tag25503');return false;" class="tag-decoration">release-v0</div><div id="tag2381" onclick="CopyToClipboard('tag2381');return false;" class="tag-decoration">release-v0.14</div><div id="tag20458" onclick="CopyToClipboard('tag20458');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/b94f5bd2d5477158007a599c2250bc8dc58fb22e" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21325109984" target="_blank">2026-01-25 01:56:08</a></td></tr>
<tr><td><div id="tag15195" onclick="CopyToClipboard('tag15195');return false;" class="tag-decoration">testing</div><div id="tag2900" onclick="CopyToClipboard('tag2900');return false;" class="tag-decoration">testing-91167aa</div><div id="tag6075" onclick="CopyToClipboard('tag6075');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag30672" onclick="CopyToClipboard('tag30672');return false;" class="tag-decoration">testing-v0</div><div id="tag25053" onclick="CopyToClipboard('tag25053');return false;" class="tag-decoration">testing-v0.14</div><div id="tag11261" onclick="CopyToClipboard('tag11261');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/91167aafe17c9465c3cfc985f208c07f0be71320" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21322465459" target="_blank">2026-01-24 22:15:35</a></td></tr>
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
