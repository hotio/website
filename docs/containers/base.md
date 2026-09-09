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
<tr><td><div id="tag9779" onclick="CopyToClipboard('tag9779');return false;" class="tag-decoration">alpinevpn</div><div id="tag638" onclick="CopyToClipboard('tag638');return false;" class="tag-decoration">alpinevpn-dd4e2a2</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/dd4e2a2b47e872ba0565d3516cd71983e855ed3b" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/34417661651" target="_blank">2026-09-09 23:36:12</a></td></tr>
<tr><td><div id="tag24898" onclick="CopyToClipboard('tag24898');return false;" class="tag-decoration">noblevpn</div><div id="tag27392" onclick="CopyToClipboard('tag27392');return false;" class="tag-decoration">noblevpn-91689a7</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/91689a74f152939823c129420aef1bb8db54d378" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/base/actions/runs/34386887713" target="_blank">2026-09-09 18:05:24</a></td></tr>
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
