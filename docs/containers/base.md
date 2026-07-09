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
<tr><td><div id="tag21298" onclick="CopyToClipboard('tag21298');return false;" class="tag-decoration">alpinevpn</div><div id="tag23540" onclick="CopyToClipboard('tag23540');return false;" class="tag-decoration">alpinevpn-886c3b1</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/886c3b1660dd83ca2c52c344548c105d7212b15b" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/28974955895" target="_blank">2026-07-08 20:53:20</a></td></tr>
<tr><td><div id="tag10557" onclick="CopyToClipboard('tag10557');return false;" class="tag-decoration">noblevpn</div><div id="tag3628" onclick="CopyToClipboard('tag3628');return false;" class="tag-decoration">noblevpn-c1ffcce</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/c1ffccefe4946d503702dbdc33be68c68efea105" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/29048175684" target="_blank">2026-07-09 20:31:03</a></td></tr>
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
