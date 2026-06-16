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
<tr><td><div id="tag22120" onclick="CopyToClipboard('tag22120');return false;" class="tag-decoration">alpinevpn</div><div id="tag19043" onclick="CopyToClipboard('tag19043');return false;" class="tag-decoration">alpinevpn-f409dc1</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/f409dc1d7868b93b68de13775f825cc0900bfffd" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/27270961641" target="_blank">2026-06-10 10:47:22</a></td></tr>
<tr><td><div id="tag21345" onclick="CopyToClipboard('tag21345');return false;" class="tag-decoration">noblevpn</div><div id="tag30114" onclick="CopyToClipboard('tag30114');return false;" class="tag-decoration">noblevpn-5ce8fcb</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/5ce8fcb1de9a6d71d97919f85a8fe91c5800cc58" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/27634056395" target="_blank">2026-06-16 16:55:03</a></td></tr>
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
