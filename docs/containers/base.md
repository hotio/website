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
<tr><td><div id="tag25726" onclick="CopyToClipboard('tag25726');return false;" class="tag-decoration">alpinevpn</div><div id="tag15937" onclick="CopyToClipboard('tag15937');return false;" class="tag-decoration">alpinevpn-5b650ae</div></td><td>Alpine 3.22</td><td><a href="https://github.com/hotio/base/commit/5b650ae404016c55df604bc70ec2f75280a39bd4" target="_blank">update service-forwarder with touch</a></td><td><a href="https://github.com/hotio/base/actions/runs/20891708835" target="_blank">2026-01-11 07:46:23</a></td></tr>
<tr><td><div id="tag20832" onclick="CopyToClipboard('tag20832');return false;" class="tag-decoration">noblevpn</div><div id="tag6866" onclick="CopyToClipboard('tag6866');return false;" class="tag-decoration">noblevpn-b820b9e</div></td><td>Ubuntu 24.04</td><td><a href="https://github.com/hotio/base/commit/b820b9e4681d0f9028a615b12f2e6b4814757b2b" target="_blank">tweak service-forwarder</a></td><td><a href="https://github.com/hotio/base/actions/runs/20895031637" target="_blank">2026-01-11 12:20:25</a></td></tr>
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
