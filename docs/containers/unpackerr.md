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
<tr><td><div id="tag5396" onclick="CopyToClipboard('tag5396');return false;" class="tag-decoration">nightly</div><div id="tag13936" onclick="CopyToClipboard('tag13936');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag18899" onclick="CopyToClipboard('tag18899');return false;" class="tag-decoration">nightly-a228ca9</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a228ca9b882aacd9a6074da40c13ff5e3ff24211" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20842482034" target="_blank">2026-01-09 05:41:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2032" onclick="CopyToClipboard('tag2032');return false;" class="tag-decoration">release</div><div id="tag12631" onclick="CopyToClipboard('tag12631');return false;" class="tag-decoration">release-0.14.5</div><div id="tag28532" onclick="CopyToClipboard('tag28532');return false;" class="tag-decoration">release-48a8ad9</div><div id="tag4534" onclick="CopyToClipboard('tag4534');return false;" class="tag-decoration">release-v0</div><div id="tag32405" onclick="CopyToClipboard('tag32405');return false;" class="tag-decoration">release-v0.14</div><div id="tag11898" onclick="CopyToClipboard('tag11898');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/48a8ad9f4e633cddcd722d71d36cf56d7e4efc80" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20842482201" target="_blank">2026-01-09 05:41:18</a></td></tr>
<tr><td><div id="tag23377" onclick="CopyToClipboard('tag23377');return false;" class="tag-decoration">testing</div><div id="tag1262" onclick="CopyToClipboard('tag1262');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag4142" onclick="CopyToClipboard('tag4142');return false;" class="tag-decoration">testing-50751cb</div><div id="tag14439" onclick="CopyToClipboard('tag14439');return false;" class="tag-decoration">testing-v0</div><div id="tag28659" onclick="CopyToClipboard('tag28659');return false;" class="tag-decoration">testing-v0.14</div><div id="tag10914" onclick="CopyToClipboard('tag10914');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/50751cba68c2ed578b3b71b001e52acab425616d" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20770111050" target="_blank">2026-01-07 03:58:06</a></td></tr>
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
