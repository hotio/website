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
<tr><td><div id="tag26808" onclick="CopyToClipboard('tag26808');return false;" class="tag-decoration">alpinevpn</div><div id="tag13940" onclick="CopyToClipboard('tag13940');return false;" class="tag-decoration">alpinevpn-d8d4eec</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/d8d4eec6d40c3bbb9f58841ce657f2c1a691e895" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/33576094896" target="_blank">2026-09-02 00:37:29</a></td></tr>
<tr><td><div id="tag6112" onclick="CopyToClipboard('tag6112');return false;" class="tag-decoration">noblevpn</div><div id="tag19561" onclick="CopyToClipboard('tag19561');return false;" class="tag-decoration">noblevpn-3de0cee</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/3de0ceead29cf86092e8f039d765eba3105dbdf3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/33535389472" target="_blank">2026-09-01 17:02:11</a></td></tr>
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
