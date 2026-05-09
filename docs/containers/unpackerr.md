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
<tr><td><div id="tag16576" onclick="CopyToClipboard('tag16576');return false;" class="tag-decoration">nightly</div><div id="tag7768" onclick="CopyToClipboard('tag7768');return false;" class="tag-decoration">nightly-95eb0ff</div><div id="tag31751" onclick="CopyToClipboard('tag31751');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/95eb0ff92755f0afbbd0f798de95fb7d46b4d8f0" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25605067106" target="_blank">2026-05-09 15:44:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31122" onclick="CopyToClipboard('tag31122');return false;" class="tag-decoration">release</div><div id="tag6442" onclick="CopyToClipboard('tag6442');return false;" class="tag-decoration">release-ba891b8</div><div id="tag11352" onclick="CopyToClipboard('tag11352');return false;" class="tag-decoration">release-0.15.2</div><div id="tag16938" onclick="CopyToClipboard('tag16938');return false;" class="tag-decoration">release-v0</div><div id="tag31183" onclick="CopyToClipboard('tag31183');return false;" class="tag-decoration">release-v0.15</div><div id="tag7190" onclick="CopyToClipboard('tag7190');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ba891b8d3ed97e1b7788fe63982d3c3724e584c0" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/24552150036" target="_blank">2026-04-17 06:54:41</a></td></tr>
<tr><td><div id="tag29613" onclick="CopyToClipboard('tag29613');return false;" class="tag-decoration">testing</div><div id="tag23557" onclick="CopyToClipboard('tag23557');return false;" class="tag-decoration">testing-0b33773</div><div id="tag427" onclick="CopyToClipboard('tag427');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag29072" onclick="CopyToClipboard('tag29072');return false;" class="tag-decoration">testing-v0</div><div id="tag15719" onclick="CopyToClipboard('tag15719');return false;" class="tag-decoration">testing-v0.15</div><div id="tag23154" onclick="CopyToClipboard('tag23154');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0b337731160676905a73944e3ebf1e4ac20db7ab" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/24552150822" target="_blank">2026-04-17 06:54:42</a></td></tr>
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
