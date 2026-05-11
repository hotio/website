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
<tr><td><div id="tag22551" onclick="CopyToClipboard('tag22551');return false;" class="tag-decoration">nightly</div><div id="tag23555" onclick="CopyToClipboard('tag23555');return false;" class="tag-decoration">nightly-71cbfa3</div><div id="tag20463" onclick="CopyToClipboard('tag20463');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/71cbfa37cd0e08c2044ba200175fdc128975dcf1" target="_blank">Upstream/Packages update</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/25698762127" target="_blank">2026-05-11 21:36:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30476" onclick="CopyToClipboard('tag30476');return false;" class="tag-decoration">release</div><div id="tag27116" onclick="CopyToClipboard('tag27116');return false;" class="tag-decoration">release-bc6df6a</div><div id="tag20084" onclick="CopyToClipboard('tag20084');return false;" class="tag-decoration">release-1.4.0</div><div id="tag9877" onclick="CopyToClipboard('tag9877');return false;" class="tag-decoration">release-v1</div><div id="tag20484" onclick="CopyToClipboard('tag20484');return false;" class="tag-decoration">release-v1.4</div><div id="tag14045" onclick="CopyToClipboard('tag14045');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/bc6df6ac80e702c56890653fb6d494e73447ba1c" target="_blank">Upstream/Packages update</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/25698764249" target="_blank">2026-05-11 21:36:32</a></td></tr>
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
        -e WEBUI_PORTS="3030/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/autoscan
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=3030/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
