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
<tr><td><div id="tag14590" onclick="CopyToClipboard('tag14590');return false;" class="tag-decoration">nightly</div><div id="tag15182" onclick="CopyToClipboard('tag15182');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag17644" onclick="CopyToClipboard('tag17644');return false;" class="tag-decoration">nightly-a2f2f4c</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a2f2f4cbe0c6a2019f02578d53533e7afdb9627a" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20770110587" target="_blank">2026-01-07 03:58:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15364" onclick="CopyToClipboard('tag15364');return false;" class="tag-decoration">release</div><div id="tag18832" onclick="CopyToClipboard('tag18832');return false;" class="tag-decoration">release-0.14.5</div><div id="tag13157" onclick="CopyToClipboard('tag13157');return false;" class="tag-decoration">release-48a8ad9</div><div id="tag2092" onclick="CopyToClipboard('tag2092');return false;" class="tag-decoration">release-v0</div><div id="tag17633" onclick="CopyToClipboard('tag17633');return false;" class="tag-decoration">release-v0.14</div><div id="tag27103" onclick="CopyToClipboard('tag27103');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/48a8ad9f4e633cddcd722d71d36cf56d7e4efc80" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20842482201" target="_blank">2026-01-09 05:41:18</a></td></tr>
<tr><td><div id="tag9799" onclick="CopyToClipboard('tag9799');return false;" class="tag-decoration">testing</div><div id="tag26000" onclick="CopyToClipboard('tag26000');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag28846" onclick="CopyToClipboard('tag28846');return false;" class="tag-decoration">testing-50751cb</div><div id="tag7457" onclick="CopyToClipboard('tag7457');return false;" class="tag-decoration">testing-v0</div><div id="tag12921" onclick="CopyToClipboard('tag12921');return false;" class="tag-decoration">testing-v0.14</div><div id="tag16176" onclick="CopyToClipboard('tag16176');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/50751cba68c2ed578b3b71b001e52acab425616d" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20770111050" target="_blank">2026-01-07 03:58:06</a></td></tr>
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
