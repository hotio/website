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
<tr><td><div id="tag156" onclick="CopyToClipboard('tag156');return false;" class="tag-decoration">nightly</div><div id="tag19431" onclick="CopyToClipboard('tag19431');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag4138" onclick="CopyToClipboard('tag4138');return false;" class="tag-decoration">nightly-3af7f56</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/3af7f56e7a78daf7eec3c990b99518ef7efa30cc" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20892092232" target="_blank">2026-01-11 08:20:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18243" onclick="CopyToClipboard('tag18243');return false;" class="tag-decoration">release</div><div id="tag19311" onclick="CopyToClipboard('tag19311');return false;" class="tag-decoration">release-0.14.5</div><div id="tag29789" onclick="CopyToClipboard('tag29789');return false;" class="tag-decoration">release-9fd0268</div><div id="tag30392" onclick="CopyToClipboard('tag30392');return false;" class="tag-decoration">release-v0</div><div id="tag22460" onclick="CopyToClipboard('tag22460');return false;" class="tag-decoration">release-v0.14</div><div id="tag9564" onclick="CopyToClipboard('tag9564');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/9fd026869a017a35895fe3b4c8fd149b3b463e3e" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20892092365" target="_blank">2026-01-11 08:20:09</a></td></tr>
<tr><td><div id="tag14908" onclick="CopyToClipboard('tag14908');return false;" class="tag-decoration">testing</div><div id="tag25751" onclick="CopyToClipboard('tag25751');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag25371" onclick="CopyToClipboard('tag25371');return false;" class="tag-decoration">testing-0b9a28d</div><div id="tag25404" onclick="CopyToClipboard('tag25404');return false;" class="tag-decoration">testing-v0</div><div id="tag6748" onclick="CopyToClipboard('tag6748');return false;" class="tag-decoration">testing-v0.14</div><div id="tag27468" onclick="CopyToClipboard('tag27468');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0b9a28da88d729c2976668ad37c07ae2af5714bd" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20892092543" target="_blank">2026-01-11 08:20:10</a></td></tr>
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
