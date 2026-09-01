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
<tr><td><div id="tag9652" onclick="CopyToClipboard('tag9652');return false;" class="tag-decoration">alpinevpn</div><div id="tag19507" onclick="CopyToClipboard('tag19507');return false;" class="tag-decoration">alpinevpn-54c182b</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/54c182b7026d3d948cbc7a4d569fd5d7c459f2bd" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/33479558725" target="_blank">2026-09-01 06:53:14</a></td></tr>
<tr><td><div id="tag32489" onclick="CopyToClipboard('tag32489');return false;" class="tag-decoration">noblevpn</div><div id="tag1466" onclick="CopyToClipboard('tag1466');return false;" class="tag-decoration">noblevpn-c7db9c2</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/c7db9c2d99f91d1345f83ae8843263acc655641e" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/33421223332" target="_blank">2026-08-31 17:44:41</a></td></tr>
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
