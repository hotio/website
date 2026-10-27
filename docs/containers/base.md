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
<tr><td><div id="tag1592" onclick="CopyToClipboard('tag1592');return false;" class="tag-decoration">alpinevpn</div><div id="tag25020" onclick="CopyToClipboard('tag25020');return false;" class="tag-decoration">alpinevpn-4779a3c</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/4779a3c8bcbc8529fd80e8b97ab310b367f7e443" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/40218803622" target="_blank">2026-10-25 17:55:38</a></td></tr>
<tr><td><div id="tag1163" onclick="CopyToClipboard('tag1163');return false;" class="tag-decoration">noblevpn</div><div id="tag6971" onclick="CopyToClipboard('tag6971');return false;" class="tag-decoration">noblevpn-d4e1ead</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/d4e1ead37e9511cd0024f4d53f7f8a053a461513" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/base/actions/runs/40430742414" target="_blank">2026-10-27 01:08:01</a></td></tr>
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
