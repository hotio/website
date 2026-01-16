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
<tr><td><div id="tag11144" onclick="CopyToClipboard('tag11144');return false;" class="tag-decoration">alpinevpn</div><div id="tag3459" onclick="CopyToClipboard('tag3459');return false;" class="tag-decoration">alpinevpn-3043df9</div></td><td>Alpine 3.22</td><td><a href="https://github.com/hotio/base/commit/3043df98fff03732b776a914d55026e4ca0a4b6d" target="_blank">Make iface prefixes configurable with VPN_INTERFACE_PREFIXES, thx to salty from Saltbox</a></td><td><a href="https://github.com/hotio/base/actions/runs/21065591731" target="_blank">2026-01-16 11:46:45</a></td></tr>
<tr><td><div id="tag50" onclick="CopyToClipboard('tag50');return false;" class="tag-decoration">noblevpn</div><div id="tag15548" onclick="CopyToClipboard('tag15548');return false;" class="tag-decoration">noblevpn-b3fe625</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/b3fe62506ef35252ce1d872d1026842715b2fb58" target="_blank">this is silly</a></td><td><a href="https://github.com/hotio/base/actions/runs/21064755730" target="_blank">2026-01-16 11:12:56</a></td></tr>
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
