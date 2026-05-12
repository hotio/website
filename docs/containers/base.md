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
<tr><td><div id="tag24152" onclick="CopyToClipboard('tag24152');return false;" class="tag-decoration">alpinevpn</div><div id="tag16319" onclick="CopyToClipboard('tag16319');return false;" class="tag-decoration">alpinevpn-7984fff</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/7984fff6fe6bf85d50a95daca5ce3eca0feb2542" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/base/actions/runs/25707098578" target="_blank">2026-05-12 01:12:58</a></td></tr>
<tr><td><div id="tag21822" onclick="CopyToClipboard('tag21822');return false;" class="tag-decoration">noblevpn</div><div id="tag21520" onclick="CopyToClipboard('tag21520');return false;" class="tag-decoration">noblevpn-303bac2</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/303bac2d823476867fbf99ceed263c674e71085b" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/base/actions/runs/25700419670" target="_blank">2026-05-11 22:13:24</a></td></tr>
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
