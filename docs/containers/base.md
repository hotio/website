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
<tr><td><div id="tag15218" onclick="CopyToClipboard('tag15218');return false;" class="tag-decoration">alpinevpn</div><div id="tag17331" onclick="CopyToClipboard('tag17331');return false;" class="tag-decoration">alpinevpn-7a36f80</div></td><td>Alpine 3.22</td><td><a href="https://github.com/hotio/base/commit/7a36f8070728de8cd2a35a9ec4b4c6173377276a" target="_blank">rename redirects var</a></td><td><a href="https://github.com/hotio/base/actions/runs/21131654569" target="_blank">2026-01-19 09:11:40</a></td></tr>
<tr><td><div id="tag27282" onclick="CopyToClipboard('tag27282');return false;" class="tag-decoration">noblevpn</div><div id="tag25185" onclick="CopyToClipboard('tag25185');return false;" class="tag-decoration">noblevpn-1fa1a6d</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/1fa1a6dea1808bd198e38dfefc5953d4ee684680" target="_blank">cleanup how fw rules are added</a></td><td><a href="https://github.com/hotio/base/actions/runs/21131401010" target="_blank">2026-01-19 09:03:11</a></td></tr>
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
