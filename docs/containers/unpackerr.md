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
<tr><td><div id="tag25394" onclick="CopyToClipboard('tag25394');return false;" class="tag-decoration">nightly</div><div id="tag3229" onclick="CopyToClipboard('tag3229');return false;" class="tag-decoration">nightly-a3761f0</div><div id="tag2274" onclick="CopyToClipboard('tag2274');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a3761f001547412afa0e2c3a3347313f09ae66a4" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21237959949" target="_blank">2026-01-22 06:03:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19516" onclick="CopyToClipboard('tag19516');return false;" class="tag-decoration">release</div><div id="tag17608" onclick="CopyToClipboard('tag17608');return false;" class="tag-decoration">release-e2657ae</div><div id="tag19594" onclick="CopyToClipboard('tag19594');return false;" class="tag-decoration">release-0.14.5</div><div id="tag14402" onclick="CopyToClipboard('tag14402');return false;" class="tag-decoration">release-v0</div><div id="tag13704" onclick="CopyToClipboard('tag13704');return false;" class="tag-decoration">release-v0.14</div><div id="tag32561" onclick="CopyToClipboard('tag32561');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e2657ae23054ddd8f3fd78649c1c5f0bce748533" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21237960167" target="_blank">2026-01-22 06:03:41</a></td></tr>
<tr><td><div id="tag8269" onclick="CopyToClipboard('tag8269');return false;" class="tag-decoration">testing</div><div id="tag11392" onclick="CopyToClipboard('tag11392');return false;" class="tag-decoration">testing-004cb0f</div><div id="tag15384" onclick="CopyToClipboard('tag15384');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag7106" onclick="CopyToClipboard('tag7106');return false;" class="tag-decoration">testing-v0</div><div id="tag24680" onclick="CopyToClipboard('tag24680');return false;" class="tag-decoration">testing-v0.14</div><div id="tag13534" onclick="CopyToClipboard('tag13534');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/004cb0ffa8c4df3e4c804bb10e29bc5c896c763b" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21237960499" target="_blank">2026-01-22 06:03:42</a></td></tr>
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
