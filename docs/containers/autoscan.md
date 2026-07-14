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
<tr><td><div id="tag20653" onclick="CopyToClipboard('tag20653');return false;" class="tag-decoration">nightly</div><div id="tag19654" onclick="CopyToClipboard('tag19654');return false;" class="tag-decoration">nightly-6a8e2f0</div><div id="tag14235" onclick="CopyToClipboard('tag14235');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/6a8e2f05e61eebaf7a1fdcaeeccce933613bcda2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/29308755015" target="_blank">2026-07-14 05:31:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10133" onclick="CopyToClipboard('tag10133');return false;" class="tag-decoration">release</div><div id="tag28973" onclick="CopyToClipboard('tag28973');return false;" class="tag-decoration">release-b42b690</div><div id="tag27214" onclick="CopyToClipboard('tag27214');return false;" class="tag-decoration">release-1.4.0</div><div id="tag22421" onclick="CopyToClipboard('tag22421');return false;" class="tag-decoration">release-v1</div><div id="tag16142" onclick="CopyToClipboard('tag16142');return false;" class="tag-decoration">release-v1.4</div><div id="tag23619" onclick="CopyToClipboard('tag23619');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/b42b6906b5a76bbf217612395d174bced8deb607" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/29275657648" target="_blank">2026-07-13 18:44:06</a></td></tr>
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
