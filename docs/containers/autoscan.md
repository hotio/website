---
hide:
  - toc
title: hotio/autoscan
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/autoscan){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/autoscan){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/cloudbox/autoscan){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag29237" onclick="CopyToClipboard('tag29237');return false;" class="tag-decoration">nightly</div><div id="tag17359" onclick="CopyToClipboard('tag17359');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div><div id="tag30301" onclick="CopyToClipboard('tag30301');return false;" class="tag-decoration">nightly-ac87e1b</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/ac87e1b3784a181b2e147e84de6d00097a9ae103" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20892082595" target="_blank">2026-01-11 08:19:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10114" onclick="CopyToClipboard('tag10114');return false;" class="tag-decoration">release</div><div id="tag15881" onclick="CopyToClipboard('tag15881');return false;" class="tag-decoration">release-1.4.0</div><div id="tag166" onclick="CopyToClipboard('tag166');return false;" class="tag-decoration">release-dc843ed</div><div id="tag1882" onclick="CopyToClipboard('tag1882');return false;" class="tag-decoration">release-v1</div><div id="tag17985" onclick="CopyToClipboard('tag17985');return false;" class="tag-decoration">release-v1.4</div><div id="tag22219" onclick="CopyToClipboard('tag22219');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/dc843ed36847c51ef07b60ee87ecbae99276fdf7" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20892082759" target="_blank">2026-01-11 08:19:15</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="autoscan" \
        -p 3030:3030 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/autoscan
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      autoscan:
        container_name: autoscan
        image: ghcr.io/hotio/autoscan
        ports:
          - "3030:3030"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
