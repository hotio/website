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
<tr><td><div id="tag19850" onclick="CopyToClipboard('tag19850');return false;" class="tag-decoration">nightly</div><div id="tag4361" onclick="CopyToClipboard('tag4361');return false;" class="tag-decoration">nightly-72dd63b</div><div id="tag20973" onclick="CopyToClipboard('tag20973');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/72dd63b8b87240d3b8b060f5daf2c486e9373089" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21059659595" target="_blank">2026-01-16 07:55:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10249" onclick="CopyToClipboard('tag10249');return false;" class="tag-decoration">release</div><div id="tag19351" onclick="CopyToClipboard('tag19351');return false;" class="tag-decoration">release-0.14.5</div><div id="tag24120" onclick="CopyToClipboard('tag24120');return false;" class="tag-decoration">release-a236eda</div><div id="tag1056" onclick="CopyToClipboard('tag1056');return false;" class="tag-decoration">release-v0</div><div id="tag27784" onclick="CopyToClipboard('tag27784');return false;" class="tag-decoration">release-v0.14</div><div id="tag15564" onclick="CopyToClipboard('tag15564');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/a236edad758f4428130ba36b8c0afc3aac8dc5e5" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20898169130" target="_blank">2026-01-11 16:17:58</a></td></tr>
<tr><td><div id="tag24138" onclick="CopyToClipboard('tag24138');return false;" class="tag-decoration">testing</div><div id="tag30387" onclick="CopyToClipboard('tag30387');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag7085" onclick="CopyToClipboard('tag7085');return false;" class="tag-decoration">testing-2bee455</div><div id="tag16723" onclick="CopyToClipboard('tag16723');return false;" class="tag-decoration">testing-v0</div><div id="tag32546" onclick="CopyToClipboard('tag32546');return false;" class="tag-decoration">testing-v0.14</div><div id="tag15351" onclick="CopyToClipboard('tag15351');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2bee455fa3de5a1b7d8dc7f6e1e57cb758ae4457" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20898169406" target="_blank">2026-01-11 16:17:59</a></td></tr>
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
