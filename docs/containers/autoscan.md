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
<tr><td><div id="tag29692" onclick="CopyToClipboard('tag29692');return false;" class="tag-decoration">nightly</div><div id="tag2747" onclick="CopyToClipboard('tag2747');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div><div id="tag11104" onclick="CopyToClipboard('tag11104');return false;" class="tag-decoration">nightly-2c1934a</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/2c1934a4664c2a4b7153111d9bc5fbf366d95061" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20850324894" target="_blank">2026-01-09 11:22:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28187" onclick="CopyToClipboard('tag28187');return false;" class="tag-decoration">release</div><div id="tag21335" onclick="CopyToClipboard('tag21335');return false;" class="tag-decoration">release-1.4.0</div><div id="tag8717" onclick="CopyToClipboard('tag8717');return false;" class="tag-decoration">release-dc843ed</div><div id="tag4352" onclick="CopyToClipboard('tag4352');return false;" class="tag-decoration">release-v1</div><div id="tag5536" onclick="CopyToClipboard('tag5536');return false;" class="tag-decoration">release-v1.4</div><div id="tag25701" onclick="CopyToClipboard('tag25701');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/dc843ed36847c51ef07b60ee87ecbae99276fdf7" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20892082759" target="_blank">2026-01-11 08:19:15</a></td></tr>
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
