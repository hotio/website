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
<tr><td><div id="tag9056" onclick="CopyToClipboard('tag9056');return false;" class="tag-decoration">alpinevpn</div><div id="tag25758" onclick="CopyToClipboard('tag25758');return false;" class="tag-decoration">alpinevpn-c4f8fae</div></td><td>Alpine 3.22</td><td><a href="https://github.com/hotio/base/commit/c4f8fae30cb3fc473cd72541617ac70af4ea5efe" target="_blank">fix bug introduced for testing</a></td><td><a href="https://github.com/hotio/base/actions/runs/21062875735" target="_blank">2026-01-16 10:02:27</a></td></tr>
<tr><td><div id="tag29104" onclick="CopyToClipboard('tag29104');return false;" class="tag-decoration">noblevpn</div><div id="tag30320" onclick="CopyToClipboard('tag30320');return false;" class="tag-decoration">noblevpn-ea653c4</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/ea653c4b303415e7c57a1763c8865cd48707caea" target="_blank">update disclaimer</a></td><td><a href="https://github.com/hotio/base/actions/runs/21060469979" target="_blank">2026-01-16 08:30:35</a></td></tr>
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
