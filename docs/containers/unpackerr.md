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
<tr><td><div id="tag1800" onclick="CopyToClipboard('tag1800');return false;" class="tag-decoration">nightly</div><div id="tag19812" onclick="CopyToClipboard('tag19812');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag12792" onclick="CopyToClipboard('tag12792');return false;" class="tag-decoration">nightly-8448e91</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8448e91c4197443ae8fddb5319c36a039da9e995" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20850354696" target="_blank">2026-01-09 11:23:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14378" onclick="CopyToClipboard('tag14378');return false;" class="tag-decoration">release</div><div id="tag13824" onclick="CopyToClipboard('tag13824');return false;" class="tag-decoration">release-0.14.5</div><div id="tag28608" onclick="CopyToClipboard('tag28608');return false;" class="tag-decoration">release-8429396</div><div id="tag30163" onclick="CopyToClipboard('tag30163');return false;" class="tag-decoration">release-v0</div><div id="tag24661" onclick="CopyToClipboard('tag24661');return false;" class="tag-decoration">release-v0.14</div><div id="tag3653" onclick="CopyToClipboard('tag3653');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/84293967c75f6f495fd0d2737a2252694b52d7cd" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20845772579" target="_blank">2026-01-09 08:22:50</a></td></tr>
<tr><td><div id="tag28138" onclick="CopyToClipboard('tag28138');return false;" class="tag-decoration">testing</div><div id="tag19601" onclick="CopyToClipboard('tag19601');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag10864" onclick="CopyToClipboard('tag10864');return false;" class="tag-decoration">testing-0a6fc76</div><div id="tag11519" onclick="CopyToClipboard('tag11519');return false;" class="tag-decoration">testing-v0</div><div id="tag5211" onclick="CopyToClipboard('tag5211');return false;" class="tag-decoration">testing-v0.14</div><div id="tag24729" onclick="CopyToClipboard('tag24729');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0a6fc76fb0fd7c4e1e3be0fdccac3e05dc69fd1c" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20850355385" target="_blank">2026-01-09 11:23:42</a></td></tr>
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
