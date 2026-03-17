---
hide:
  - toc
title: hotio/base
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/base){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/base){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag4787" onclick="CopyToClipboard('tag4787');return false;" class="tag-decoration">alpinevpn</div><div id="tag11005" onclick="CopyToClipboard('tag11005');return false;" class="tag-decoration">alpinevpn-9abb66b</div></td><td>Alpine 3.22</td><td><a href="https://github.com/hotio/base/commit/9abb66b6e23413cb593e776304f2f3ca25ace926" target="_blank">use 4 spaces</a></td><td><a href="https://github.com/hotio/base/actions/runs/22291864406" target="_blank">2026-02-23 03:28:06</a></td></tr>
<tr><td><div id="tag3100" onclick="CopyToClipboard('tag3100');return false;" class="tag-decoration">noblevpn</div><div id="tag10352" onclick="CopyToClipboard('tag10352');return false;" class="tag-decoration">noblevpn-3867c07</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/3867c07a6a29cb2b5456dc500fb58ecdcad1f992" target="_blank">Upstream digest update</a></td><td><a href="https://github.com/hotio/base/actions/runs/23178040487" target="_blank">2026-03-17 04:11:22</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="base" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/base:alpinevpn
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      base:
        container_name: base
        image: ghcr.io/hotio/base:alpinevpn
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

This image is the base image for all other application images, however it can be used as a standalone VPN image for other images to attach to.

--8<-- "includes/wireguard.md"
