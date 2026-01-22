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
<tr><td><div id="tag27092" onclick="CopyToClipboard('tag27092');return false;" class="tag-decoration">nightly</div><div id="tag28907" onclick="CopyToClipboard('tag28907');return false;" class="tag-decoration">nightly-2259677</div><div id="tag7507" onclick="CopyToClipboard('tag7507');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/2259677751eeb5e584c470f31f71f724c57fd818" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21243880216" target="_blank">2026-01-22 09:52:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13001" onclick="CopyToClipboard('tag13001');return false;" class="tag-decoration">release</div><div id="tag13311" onclick="CopyToClipboard('tag13311');return false;" class="tag-decoration">release-e2657ae</div><div id="tag32433" onclick="CopyToClipboard('tag32433');return false;" class="tag-decoration">release-0.14.5</div><div id="tag8129" onclick="CopyToClipboard('tag8129');return false;" class="tag-decoration">release-v0</div><div id="tag19546" onclick="CopyToClipboard('tag19546');return false;" class="tag-decoration">release-v0.14</div><div id="tag7625" onclick="CopyToClipboard('tag7625');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e2657ae23054ddd8f3fd78649c1c5f0bce748533" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21237960167" target="_blank">2026-01-22 06:03:41</a></td></tr>
<tr><td><div id="tag9295" onclick="CopyToClipboard('tag9295');return false;" class="tag-decoration">testing</div><div id="tag28004" onclick="CopyToClipboard('tag28004');return false;" class="tag-decoration">testing-004cb0f</div><div id="tag29651" onclick="CopyToClipboard('tag29651');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag18222" onclick="CopyToClipboard('tag18222');return false;" class="tag-decoration">testing-v0</div><div id="tag30245" onclick="CopyToClipboard('tag30245');return false;" class="tag-decoration">testing-v0.14</div><div id="tag29423" onclick="CopyToClipboard('tag29423');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/004cb0ffa8c4df3e4c804bb10e29bc5c896c763b" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21237960499" target="_blank">2026-01-22 06:03:42</a></td></tr>
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
