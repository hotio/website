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
<tr><td><div id="tag864" onclick="CopyToClipboard('tag864');return false;" class="tag-decoration">nightly</div><div id="tag10797" onclick="CopyToClipboard('tag10797');return false;" class="tag-decoration">nightly-577c561</div><div id="tag22590" onclick="CopyToClipboard('tag22590');return false;" class="tag-decoration">nightly-1.5.5-beta.7</div><div id="tag26083" onclick="CopyToClipboard('tag26083');return false;" class="tag-decoration">nightly-v1</div><div id="tag31855" onclick="CopyToClipboard('tag31855');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag28644" onclick="CopyToClipboard('tag28644');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/577c56134f9c8e4c4ed5ed6e52b8192df590fa35" target="_blank">Version update: 1.5.5-beta.6 => 1.5.5-beta.7</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21107483190" target="_blank">2026-01-18 06:37:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9253" onclick="CopyToClipboard('tag9253');return false;" class="tag-decoration">release</div><div id="tag2094" onclick="CopyToClipboard('tag2094');return false;" class="tag-decoration">release-020b004</div><div id="tag4347" onclick="CopyToClipboard('tag4347');return false;" class="tag-decoration">release-1.5.4</div><div id="tag23089" onclick="CopyToClipboard('tag23089');return false;" class="tag-decoration">release-v1</div><div id="tag6178" onclick="CopyToClipboard('tag6178');return false;" class="tag-decoration">release-v1.5</div><div id="tag20353" onclick="CopyToClipboard('tag20353');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/020b0043c19e9558f82e4e929ebae6bf01092372" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21113692328" target="_blank">2026-01-18 14:56:45</a></td></tr>
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
