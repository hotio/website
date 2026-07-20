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
<tr><td><div id="tag17580" onclick="CopyToClipboard('tag17580');return false;" class="tag-decoration">alpinevpn</div><div id="tag21252" onclick="CopyToClipboard('tag21252');return false;" class="tag-decoration">alpinevpn-ed7529d</div></td><td>Alpine 3.23</td><td><a href="https://github.com/hotio/base/commit/ed7529d7a96d4e5e673c434b41b3905d612666ad" target="_blank">update s6</a></td><td><a href="https://github.com/hotio/base/actions/runs/29680442074" target="_blank">2026-07-19 08:47:59</a></td></tr>
<tr><td><div id="tag22385" onclick="CopyToClipboard('tag22385');return false;" class="tag-decoration">noblevpn</div><div id="tag7507" onclick="CopyToClipboard('tag7507');return false;" class="tag-decoration">noblevpn-4b35847</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/4b3584771971d755d264e8f428ba2ff801a1f18e" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/base/actions/runs/29771615747" target="_blank">2026-07-20 19:20:57</a></td></tr>
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
