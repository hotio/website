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
<tr><td><div id="tag487" onclick="CopyToClipboard('tag487');return false;" class="tag-decoration">nightly</div><div id="tag15866" onclick="CopyToClipboard('tag15866');return false;" class="tag-decoration">nightly-9bd3940</div><div id="tag1296" onclick="CopyToClipboard('tag1296');return false;" class="tag-decoration">nightly-1.5.7-beta.36</div><div id="tag3540" onclick="CopyToClipboard('tag3540');return false;" class="tag-decoration">nightly-v1</div><div id="tag32397" onclick="CopyToClipboard('tag32397');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag13330" onclick="CopyToClipboard('tag13330');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/9bd3940920a035de65960caf243684a50e0658a8" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25664441471" target="_blank">2026-05-11 10:23:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23701" onclick="CopyToClipboard('tag23701');return false;" class="tag-decoration">release</div><div id="tag32080" onclick="CopyToClipboard('tag32080');return false;" class="tag-decoration">release-1a97121</div><div id="tag8813" onclick="CopyToClipboard('tag8813');return false;" class="tag-decoration">release-1.5.6</div><div id="tag2836" onclick="CopyToClipboard('tag2836');return false;" class="tag-decoration">release-v1</div><div id="tag28252" onclick="CopyToClipboard('tag28252');return false;" class="tag-decoration">release-v1.5</div><div id="tag24441" onclick="CopyToClipboard('tag24441');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/1a971217741e7b798cb3c357a140f294b900aab9" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25664442572" target="_blank">2026-05-11 10:23:08</a></td></tr>
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
