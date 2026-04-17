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
<tr><td><div id="tag4525" onclick="CopyToClipboard('tag4525');return false;" class="tag-decoration">nightly</div><div id="tag9725" onclick="CopyToClipboard('tag9725');return false;" class="tag-decoration">nightly-8c8d1c3</div><div id="tag13903" onclick="CopyToClipboard('tag13903');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8c8d1c3d32fe2a549f5e68f8b9e65d7eca0eaa3c" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/24552149834" target="_blank">2026-04-17 06:54:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9740" onclick="CopyToClipboard('tag9740');return false;" class="tag-decoration">release</div><div id="tag27445" onclick="CopyToClipboard('tag27445');return false;" class="tag-decoration">release-ba891b8</div><div id="tag24954" onclick="CopyToClipboard('tag24954');return false;" class="tag-decoration">release-0.15.2</div><div id="tag29130" onclick="CopyToClipboard('tag29130');return false;" class="tag-decoration">release-v0</div><div id="tag7515" onclick="CopyToClipboard('tag7515');return false;" class="tag-decoration">release-v0.15</div><div id="tag242" onclick="CopyToClipboard('tag242');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ba891b8d3ed97e1b7788fe63982d3c3724e584c0" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/24552150036" target="_blank">2026-04-17 06:54:41</a></td></tr>
<tr><td><div id="tag15799" onclick="CopyToClipboard('tag15799');return false;" class="tag-decoration">testing</div><div id="tag28735" onclick="CopyToClipboard('tag28735');return false;" class="tag-decoration">testing-0b33773</div><div id="tag25133" onclick="CopyToClipboard('tag25133');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag24809" onclick="CopyToClipboard('tag24809');return false;" class="tag-decoration">testing-v0</div><div id="tag24458" onclick="CopyToClipboard('tag24458');return false;" class="tag-decoration">testing-v0.15</div><div id="tag18310" onclick="CopyToClipboard('tag18310');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0b337731160676905a73944e3ebf1e4ac20db7ab" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/24552150822" target="_blank">2026-04-17 06:54:42</a></td></tr>
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
