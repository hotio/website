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
<tr><td><div id="tag12787" onclick="CopyToClipboard('tag12787');return false;" class="tag-decoration">nightly</div><div id="tag833" onclick="CopyToClipboard('tag833');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag32336" onclick="CopyToClipboard('tag32336');return false;" class="tag-decoration">nightly-8448e91</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8448e91c4197443ae8fddb5319c36a039da9e995" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20850354696" target="_blank">2026-01-09 11:23:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32329" onclick="CopyToClipboard('tag32329');return false;" class="tag-decoration">release</div><div id="tag32340" onclick="CopyToClipboard('tag32340');return false;" class="tag-decoration">release-0.14.5</div><div id="tag5979" onclick="CopyToClipboard('tag5979');return false;" class="tag-decoration">release-b2c4333</div><div id="tag3044" onclick="CopyToClipboard('tag3044');return false;" class="tag-decoration">release-v0</div><div id="tag14822" onclick="CopyToClipboard('tag14822');return false;" class="tag-decoration">release-v0.14</div><div id="tag30610" onclick="CopyToClipboard('tag30610');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/b2c43336c46bf253dc5e945bc1b9b86aa939b964" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20850355102" target="_blank">2026-01-09 11:23:41</a></td></tr>
<tr><td><div id="tag7519" onclick="CopyToClipboard('tag7519');return false;" class="tag-decoration">testing</div><div id="tag28376" onclick="CopyToClipboard('tag28376');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag14872" onclick="CopyToClipboard('tag14872');return false;" class="tag-decoration">testing-0a6fc76</div><div id="tag28778" onclick="CopyToClipboard('tag28778');return false;" class="tag-decoration">testing-v0</div><div id="tag16399" onclick="CopyToClipboard('tag16399');return false;" class="tag-decoration">testing-v0.14</div><div id="tag20550" onclick="CopyToClipboard('tag20550');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0a6fc76fb0fd7c4e1e3be0fdccac3e05dc69fd1c" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20850355385" target="_blank">2026-01-09 11:23:42</a></td></tr>
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
