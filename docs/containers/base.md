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
<tr><td><div id="tag6629" onclick="CopyToClipboard('tag6629');return false;" class="tag-decoration">alpinevpn</div><div id="tag456" onclick="CopyToClipboard('tag456');return false;" class="tag-decoration">alpinevpn-51e9dab</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/51e9dab0bf3ec89e5ab05b2850d194fba05a11bc" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/39473984963" target="_blank">2026-10-20 18:21:11</a></td></tr>
<tr><td><div id="tag25655" onclick="CopyToClipboard('tag25655');return false;" class="tag-decoration">noblevpn</div><div id="tag27610" onclick="CopyToClipboard('tag27610');return false;" class="tag-decoration">noblevpn-10de75e</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/10de75e3db4e77a86b82be9afe311d2e97f064eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/base/actions/runs/39005183354" target="_blank">2026-10-17 05:08:44</a></td></tr>
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
