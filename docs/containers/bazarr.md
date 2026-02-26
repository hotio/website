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
<tr><td><div id="tag18684" onclick="CopyToClipboard('tag18684');return false;" class="tag-decoration">nightly</div><div id="tag25909" onclick="CopyToClipboard('tag25909');return false;" class="tag-decoration">nightly-46187ed</div><div id="tag14110" onclick="CopyToClipboard('tag14110');return false;" class="tag-decoration">nightly-1.5.6</div><div id="tag14990" onclick="CopyToClipboard('tag14990');return false;" class="tag-decoration">nightly-v1</div><div id="tag25157" onclick="CopyToClipboard('tag25157');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag25564" onclick="CopyToClipboard('tag25564');return false;" class="tag-decoration">nightly-v1.5.6</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/46187ed1ebc410c5dacef4c916869068e2c731ad" target="_blank">Version update: 1.5.6-beta.17 => 1.5.6</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22441005871" target="_blank">2026-02-26 11:56:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21688" onclick="CopyToClipboard('tag21688');return false;" class="tag-decoration">release</div><div id="tag23515" onclick="CopyToClipboard('tag23515');return false;" class="tag-decoration">release-43ea2b9</div><div id="tag8453" onclick="CopyToClipboard('tag8453');return false;" class="tag-decoration">release-1.5.5</div><div id="tag17933" onclick="CopyToClipboard('tag17933');return false;" class="tag-decoration">release-v1</div><div id="tag22020" onclick="CopyToClipboard('tag22020');return false;" class="tag-decoration">release-v1.5</div><div id="tag30020" onclick="CopyToClipboard('tag30020');return false;" class="tag-decoration">release-v1.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/43ea2b94bb038a44d38c9684fed14e1e200af4e3" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/22292117620" target="_blank">2026-02-23 03:43:14</a></td></tr>
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
