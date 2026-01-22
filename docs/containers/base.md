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
<tr><td><div id="tag2637" onclick="CopyToClipboard('tag2637');return false;" class="tag-decoration">alpinevpn</div><div id="tag31808" onclick="CopyToClipboard('tag31808');return false;" class="tag-decoration">alpinevpn-3f254df</div></td><td>Alpine 3.22</td><td><a href="https://github.com/hotio/base/commit/3f254df549557e4b62f8d141039603fbf6598f27" target="_blank">remove validated file from base</a></td><td><a href="https://github.com/hotio/base/actions/runs/21246638051" target="_blank">2026-01-22 11:24:49</a></td></tr>
<tr><td><div id="tag19777" onclick="CopyToClipboard('tag19777');return false;" class="tag-decoration">noblevpn</div><div id="tag652" onclick="CopyToClipboard('tag652');return false;" class="tag-decoration">noblevpn-2aef811</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/2aef8115ab1308743bdfef397753a61362fc7901" target="_blank">remove validated file from base</a></td><td><a href="https://github.com/hotio/base/actions/runs/21246646488" target="_blank">2026-01-22 11:25:07</a></td></tr>
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
