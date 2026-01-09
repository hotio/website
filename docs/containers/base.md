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
<tr><td><div id="tag15351" onclick="CopyToClipboard('tag15351');return false;" class="tag-decoration">alpinevpn</div><div id="tag21228" onclick="CopyToClipboard('tag21228');return false;" class="tag-decoration">alpinevpn-c1be17f</div></td><td>Alpine 3.22</td><td><a href="https://github.com/hotio/base/commit/c1be17fe9abfd4fadfb097f742c8debd12a90215" target="_blank">refactor: streamline version handling in scripts</a></td><td><a href="https://github.com/hotio/base/actions/runs/20844647052" target="_blank">2026-01-09 07:31:51</a></td></tr>
<tr><td><div id="tag26053" onclick="CopyToClipboard('tag26053');return false;" class="tag-decoration">noblevpn</div><div id="tag22383" onclick="CopyToClipboard('tag22383');return false;" class="tag-decoration">noblevpn-3.2.1.0</div><div id="tag20819" onclick="CopyToClipboard('tag20819');return false;" class="tag-decoration">noblevpn-d461e72</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/d461e729479ad4a8d99e776ac0495ef95696b4d0" target="_blank">improve pia port forward logging</a></td><td><a href="https://github.com/hotio/base/actions/runs/20623200533" target="_blank">2025-12-31 16:42:57</a></td></tr>
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
