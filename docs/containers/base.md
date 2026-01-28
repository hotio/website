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
<tr><td><div id="tag30503" onclick="CopyToClipboard('tag30503');return false;" class="tag-decoration">alpinevpn</div><div id="tag4779" onclick="CopyToClipboard('tag4779');return false;" class="tag-decoration">alpinevpn-e5bbee4</div></td><td>Alpine 3.22</td><td><a href="https://github.com/hotio/base/commit/e5bbee4e7ad4d8d3de6a84988fa92045a0b9962d" target="_blank">fix: jq not seeing not exported env var</a></td><td><a href="https://github.com/hotio/base/actions/runs/21428696079" target="_blank">2026-01-28 07:09:12</a></td></tr>
<tr><td><div id="tag24510" onclick="CopyToClipboard('tag24510');return false;" class="tag-decoration">noblevpn</div><div id="tag23234" onclick="CopyToClipboard('tag23234');return false;" class="tag-decoration">noblevpn-b1148ef</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/b1148ef2388abc75a231992bd71ddf03ae75d0da" target="_blank">fix: jq not seeing not exported env var</a></td><td><a href="https://github.com/hotio/base/actions/runs/21428705743" target="_blank">2026-01-28 07:09:37</a></td></tr>
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
