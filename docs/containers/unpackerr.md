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
<tr><td><div id="tag26292" onclick="CopyToClipboard('tag26292');return false;" class="tag-decoration">nightly</div><div id="tag3850" onclick="CopyToClipboard('tag3850');return false;" class="tag-decoration">nightly-7c1bf2d</div><div id="tag7270" onclick="CopyToClipboard('tag7270');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/7c1bf2d48827ca75c913e81ad6797bdfee626395" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21124057162" target="_blank">2026-01-19 03:14:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag214" onclick="CopyToClipboard('tag214');return false;" class="tag-decoration">release</div><div id="tag30737" onclick="CopyToClipboard('tag30737');return false;" class="tag-decoration">release-e7fd672</div><div id="tag15497" onclick="CopyToClipboard('tag15497');return false;" class="tag-decoration">release-0.14.5</div><div id="tag8976" onclick="CopyToClipboard('tag8976');return false;" class="tag-decoration">release-v0</div><div id="tag13489" onclick="CopyToClipboard('tag13489');return false;" class="tag-decoration">release-v0.14</div><div id="tag27700" onclick="CopyToClipboard('tag27700');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e7fd6721c671975f62045c03fe961b8e0de41e54" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21132241559" target="_blank">2026-01-19 09:31:17</a></td></tr>
<tr><td><div id="tag25308" onclick="CopyToClipboard('tag25308');return false;" class="tag-decoration">testing</div><div id="tag13559" onclick="CopyToClipboard('tag13559');return false;" class="tag-decoration">testing-e46ba38</div><div id="tag21808" onclick="CopyToClipboard('tag21808');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag266" onclick="CopyToClipboard('tag266');return false;" class="tag-decoration">testing-v0</div><div id="tag32346" onclick="CopyToClipboard('tag32346');return false;" class="tag-decoration">testing-v0.14</div><div id="tag3040" onclick="CopyToClipboard('tag3040');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e46ba385a42b203569df5622c06598977c4dcb3a" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21124058062" target="_blank">2026-01-19 03:14:25</a></td></tr>
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
