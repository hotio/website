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
<tr><td><div id="tag13806" onclick="CopyToClipboard('tag13806');return false;" class="tag-decoration">alpinevpn</div><div id="tag28046" onclick="CopyToClipboard('tag28046');return false;" class="tag-decoration">alpinevpn-f409dc1</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/f409dc1d7868b93b68de13775f825cc0900bfffd" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/27270961641" target="_blank">2026-06-10 10:47:22</a></td></tr>
<tr><td><div id="tag1657" onclick="CopyToClipboard('tag1657');return false;" class="tag-decoration">noblevpn</div><div id="tag30605" onclick="CopyToClipboard('tag30605');return false;" class="tag-decoration">noblevpn-a075363</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/a075363d26de8a804944011ba09e14ee9129cc87" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/27236952564" target="_blank">2026-06-09 21:27:48</a></td></tr>
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
