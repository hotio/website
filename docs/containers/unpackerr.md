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
<tr><td><div id="tag27152" onclick="CopyToClipboard('tag27152');return false;" class="tag-decoration">nightly</div><div id="tag11374" onclick="CopyToClipboard('tag11374');return false;" class="tag-decoration">nightly-3b6c2cd</div><div id="tag3603" onclick="CopyToClipboard('tag3603');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/3b6c2cd61f0c0cd54280120ed6c0798d1dd50e97" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21060556420" target="_blank">2026-01-16 08:34:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4159" onclick="CopyToClipboard('tag4159');return false;" class="tag-decoration">release</div><div id="tag5585" onclick="CopyToClipboard('tag5585');return false;" class="tag-decoration">release-6dd54e6</div><div id="tag12318" onclick="CopyToClipboard('tag12318');return false;" class="tag-decoration">release-0.14.5</div><div id="tag21368" onclick="CopyToClipboard('tag21368');return false;" class="tag-decoration">release-v0</div><div id="tag23925" onclick="CopyToClipboard('tag23925');return false;" class="tag-decoration">release-v0.14</div><div id="tag251" onclick="CopyToClipboard('tag251');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6dd54e629f57c0d2e30b7278f2578461337e4964" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21059659842" target="_blank">2026-01-16 07:55:54</a></td></tr>
<tr><td><div id="tag15045" onclick="CopyToClipboard('tag15045');return false;" class="tag-decoration">testing</div><div id="tag19868" onclick="CopyToClipboard('tag19868');return false;" class="tag-decoration">testing-d080ee6</div><div id="tag2389" onclick="CopyToClipboard('tag2389');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag7868" onclick="CopyToClipboard('tag7868');return false;" class="tag-decoration">testing-v0</div><div id="tag3465" onclick="CopyToClipboard('tag3465');return false;" class="tag-decoration">testing-v0.14</div><div id="tag21446" onclick="CopyToClipboard('tag21446');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d080ee665effd4389accab85ee0466e454dfb532" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21060557103" target="_blank">2026-01-16 08:34:14</a></td></tr>
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
