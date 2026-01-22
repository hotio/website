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
<tr><td><div id="tag12854" onclick="CopyToClipboard('tag12854');return false;" class="tag-decoration">nightly</div><div id="tag22433" onclick="CopyToClipboard('tag22433');return false;" class="tag-decoration">nightly-a3761f0</div><div id="tag27140" onclick="CopyToClipboard('tag27140');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a3761f001547412afa0e2c3a3347313f09ae66a4" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21237959949" target="_blank">2026-01-22 06:03:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29779" onclick="CopyToClipboard('tag29779');return false;" class="tag-decoration">release</div><div id="tag14800" onclick="CopyToClipboard('tag14800');return false;" class="tag-decoration">release-e2657ae</div><div id="tag9909" onclick="CopyToClipboard('tag9909');return false;" class="tag-decoration">release-0.14.5</div><div id="tag26679" onclick="CopyToClipboard('tag26679');return false;" class="tag-decoration">release-v0</div><div id="tag19224" onclick="CopyToClipboard('tag19224');return false;" class="tag-decoration">release-v0.14</div><div id="tag2511" onclick="CopyToClipboard('tag2511');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e2657ae23054ddd8f3fd78649c1c5f0bce748533" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21237960167" target="_blank">2026-01-22 06:03:41</a></td></tr>
<tr><td><div id="tag21538" onclick="CopyToClipboard('tag21538');return false;" class="tag-decoration">testing</div><div id="tag22030" onclick="CopyToClipboard('tag22030');return false;" class="tag-decoration">testing-7d675a0</div><div id="tag24755" onclick="CopyToClipboard('tag24755');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag19760" onclick="CopyToClipboard('tag19760');return false;" class="tag-decoration">testing-v0</div><div id="tag119" onclick="CopyToClipboard('tag119');return false;" class="tag-decoration">testing-v0.14</div><div id="tag30682" onclick="CopyToClipboard('tag30682');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7d675a0a84cea7be2f77f88139c986aaf185b1f9" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21200281872" target="_blank">2026-01-21 06:58:29</a></td></tr>
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
