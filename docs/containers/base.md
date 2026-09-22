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
<tr><td><div id="tag19850" onclick="CopyToClipboard('tag19850');return false;" class="tag-decoration">alpinevpn</div><div id="tag4736" onclick="CopyToClipboard('tag4736');return false;" class="tag-decoration">alpinevpn-f0a9b4f</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/f0a9b4f3d022d930068c83d1af71cd5357ad709e" target="_blank">use MTU from wg conf file</a></td><td><a href="https://github.com/hotio/base/actions/runs/35693853556" target="_blank">2026-09-22 06:12:59</a></td></tr>
<tr><td><div id="tag13401" onclick="CopyToClipboard('tag13401');return false;" class="tag-decoration">noblevpn</div><div id="tag5933" onclick="CopyToClipboard('tag5933');return false;" class="tag-decoration">noblevpn-8960618</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/8960618c55b9a212316604e1170236c0d15d61d9" target="_blank">use MTU from wg conf file</a></td><td><a href="https://github.com/hotio/base/actions/runs/35693882912" target="_blank">2026-09-22 06:13:22</a></td></tr>
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
