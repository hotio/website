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
<tr><td><div id="tag23521" onclick="CopyToClipboard('tag23521');return false;" class="tag-decoration">nightly</div><div id="tag25334" onclick="CopyToClipboard('tag25334');return false;" class="tag-decoration">nightly-ab73587</div><div id="tag27896" onclick="CopyToClipboard('tag27896');return false;" class="tag-decoration">nightly-297636534e4685c942868bc6a2b8ba52abba0127</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/ab7358793f13dfd368afe753d69bcedcf47b5275" target="_blank">Version update: 7b1894597a719e807de9d3a6650c928e6a5e85ae => 297636534e4685c942868bc6a2b8ba52abba0127</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22647835158" target="_blank">2026-03-03 23:37:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16407" onclick="CopyToClipboard('tag16407');return false;" class="tag-decoration">release</div><div id="tag4782" onclick="CopyToClipboard('tag4782');return false;" class="tag-decoration">release-72946f2</div><div id="tag23734" onclick="CopyToClipboard('tag23734');return false;" class="tag-decoration">release-0.15.0</div><div id="tag18564" onclick="CopyToClipboard('tag18564');return false;" class="tag-decoration">release-v0</div><div id="tag15340" onclick="CopyToClipboard('tag15340');return false;" class="tag-decoration">release-v0.15</div><div id="tag13766" onclick="CopyToClipboard('tag13766');return false;" class="tag-decoration">release-v0.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/72946f281cd7bc5261546b59f2e5e58560952e08" target="_blank">Version update: 0.14.5 => 0.15.0</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22563009456" target="_blank">2026-03-02 05:39:55</a></td></tr>
<tr><td><div id="tag21431" onclick="CopyToClipboard('tag21431');return false;" class="tag-decoration">testing</div><div id="tag27990" onclick="CopyToClipboard('tag27990');return false;" class="tag-decoration">testing-9a7bc55</div><div id="tag4329" onclick="CopyToClipboard('tag4329');return false;" class="tag-decoration">testing-0.15.0</div><div id="tag5991" onclick="CopyToClipboard('tag5991');return false;" class="tag-decoration">testing-v0</div><div id="tag32554" onclick="CopyToClipboard('tag32554');return false;" class="tag-decoration">testing-v0.15</div><div id="tag2659" onclick="CopyToClipboard('tag2659');return false;" class="tag-decoration">testing-v0.15.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/9a7bc55e1bd9c99839c9f52e4cd5adeee1498b35" target="_blank">Version update: 0.14.5 => 0.15.0</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22563010421" target="_blank">2026-03-02 05:39:58</a></td></tr>
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
