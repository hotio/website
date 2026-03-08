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
<tr><td><div id="tag4656" onclick="CopyToClipboard('tag4656');return false;" class="tag-decoration">nightly</div><div id="tag27212" onclick="CopyToClipboard('tag27212');return false;" class="tag-decoration">nightly-d2e20f8</div><div id="tag28821" onclick="CopyToClipboard('tag28821');return false;" class="tag-decoration">nightly-df159ba1822d561c48475b62e342fcd74f191bcc</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/d2e20f8bc7ee283f77c15426d1ba7e44803ed3ae" target="_blank">Version update: 4416f0465e3f76eb65f7b7e75254dbc3810d0a5e => df159ba1822d561c48475b62e342fcd74f191bcc</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22828179528" target="_blank">2026-03-08 19:28:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31651" onclick="CopyToClipboard('tag31651');return false;" class="tag-decoration">release</div><div id="tag29906" onclick="CopyToClipboard('tag29906');return false;" class="tag-decoration">release-72946f2</div><div id="tag29493" onclick="CopyToClipboard('tag29493');return false;" class="tag-decoration">release-0.15.0</div><div id="tag2790" onclick="CopyToClipboard('tag2790');return false;" class="tag-decoration">release-v0</div><div id="tag22973" onclick="CopyToClipboard('tag22973');return false;" class="tag-decoration">release-v0.15</div><div id="tag26262" onclick="CopyToClipboard('tag26262');return false;" class="tag-decoration">release-v0.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/72946f281cd7bc5261546b59f2e5e58560952e08" target="_blank">Version update: 0.14.5 => 0.15.0</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22563009456" target="_blank">2026-03-02 05:39:55</a></td></tr>
<tr><td><div id="tag17656" onclick="CopyToClipboard('tag17656');return false;" class="tag-decoration">testing</div><div id="tag23110" onclick="CopyToClipboard('tag23110');return false;" class="tag-decoration">testing-9a7bc55</div><div id="tag27290" onclick="CopyToClipboard('tag27290');return false;" class="tag-decoration">testing-0.15.0</div><div id="tag4169" onclick="CopyToClipboard('tag4169');return false;" class="tag-decoration">testing-v0</div><div id="tag17324" onclick="CopyToClipboard('tag17324');return false;" class="tag-decoration">testing-v0.15</div><div id="tag31785" onclick="CopyToClipboard('tag31785');return false;" class="tag-decoration">testing-v0.15.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/9a7bc55e1bd9c99839c9f52e4cd5adeee1498b35" target="_blank">Version update: 0.14.5 => 0.15.0</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22563010421" target="_blank">2026-03-02 05:39:58</a></td></tr>
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
