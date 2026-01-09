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
<tr><td><div id="tag32621" onclick="CopyToClipboard('tag32621');return false;" class="tag-decoration">nightly</div><div id="tag16290" onclick="CopyToClipboard('tag16290');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag24931" onclick="CopyToClipboard('tag24931');return false;" class="tag-decoration">nightly-a228ca9</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a228ca9b882aacd9a6074da40c13ff5e3ff24211" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20842482034" target="_blank">2026-01-09 05:41:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3415" onclick="CopyToClipboard('tag3415');return false;" class="tag-decoration">release</div><div id="tag6879" onclick="CopyToClipboard('tag6879');return false;" class="tag-decoration">release-0.14.5</div><div id="tag5254" onclick="CopyToClipboard('tag5254');return false;" class="tag-decoration">release-48a8ad9</div><div id="tag25369" onclick="CopyToClipboard('tag25369');return false;" class="tag-decoration">release-v0</div><div id="tag11116" onclick="CopyToClipboard('tag11116');return false;" class="tag-decoration">release-v0.14</div><div id="tag32131" onclick="CopyToClipboard('tag32131');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/48a8ad9f4e633cddcd722d71d36cf56d7e4efc80" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20842482201" target="_blank">2026-01-09 05:41:18</a></td></tr>
<tr><td><div id="tag5933" onclick="CopyToClipboard('tag5933');return false;" class="tag-decoration">testing</div><div id="tag5074" onclick="CopyToClipboard('tag5074');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag3283" onclick="CopyToClipboard('tag3283');return false;" class="tag-decoration">testing-ea0a22a</div><div id="tag23862" onclick="CopyToClipboard('tag23862');return false;" class="tag-decoration">testing-v0</div><div id="tag13803" onclick="CopyToClipboard('tag13803');return false;" class="tag-decoration">testing-v0.14</div><div id="tag7917" onclick="CopyToClipboard('tag7917');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ea0a22afca488e98a13fe20f5cd4538a06f91a6c" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20842482504" target="_blank">2026-01-09 05:41:19</a></td></tr>
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
