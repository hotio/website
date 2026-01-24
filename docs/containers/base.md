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
<tr><td><div id="tag30467" onclick="CopyToClipboard('tag30467');return false;" class="tag-decoration">alpinevpn</div><div id="tag11477" onclick="CopyToClipboard('tag11477');return false;" class="tag-decoration">alpinevpn-d7cd40a</div></td><td>Alpine 3.22</td><td><a href="https://github.com/hotio/base/commit/d7cd40aa00bdc73ccdfe304bffe5d4dc7c8a52ab" target="_blank">Version update</a></td><td><a href="https://github.com/hotio/base/actions/runs/21321822378" target="_blank">2026-01-24 21:22:27</a></td></tr>
<tr><td><div id="tag6675" onclick="CopyToClipboard('tag6675');return false;" class="tag-decoration">noblevpn</div><div id="tag14232" onclick="CopyToClipboard('tag14232');return false;" class="tag-decoration">noblevpn-83546e7</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/83546e7f7aff63a5c23d4615830f028d94586805" target="_blank">Version update</a></td><td><a href="https://github.com/hotio/base/actions/runs/21321822683" target="_blank">2026-01-24 21:22:29</a></td></tr>
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
