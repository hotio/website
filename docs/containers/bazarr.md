---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27036" onclick="CopyToClipboard('tag27036');return false;" class="tag-decoration">nightly</div><div id="tag3967" onclick="CopyToClipboard('tag3967');return false;" class="tag-decoration">nightly-ddb7671</div><div id="tag10094" onclick="CopyToClipboard('tag10094');return false;" class="tag-decoration">nightly-1.5.5-beta.7</div><div id="tag26169" onclick="CopyToClipboard('tag26169');return false;" class="tag-decoration">nightly-v1</div><div id="tag30733" onclick="CopyToClipboard('tag30733');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag19435" onclick="CopyToClipboard('tag19435');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/ddb76714ecd4434048fb16eac6972a25d2cd9527" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21113692173" target="_blank">2026-01-18 14:56:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25451" onclick="CopyToClipboard('tag25451');return false;" class="tag-decoration">release</div><div id="tag22500" onclick="CopyToClipboard('tag22500');return false;" class="tag-decoration">release-020b004</div><div id="tag5108" onclick="CopyToClipboard('tag5108');return false;" class="tag-decoration">release-1.5.4</div><div id="tag29612" onclick="CopyToClipboard('tag29612');return false;" class="tag-decoration">release-v1</div><div id="tag22231" onclick="CopyToClipboard('tag22231');return false;" class="tag-decoration">release-v1.5</div><div id="tag6235" onclick="CopyToClipboard('tag6235');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/020b0043c19e9558f82e4e929ebae6bf01092372" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21113692328" target="_blank">2026-01-18 14:56:45</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
