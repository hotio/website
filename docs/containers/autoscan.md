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
<tr><td><div id="tag13794" onclick="CopyToClipboard('tag13794');return false;" class="tag-decoration">nightly</div><div id="tag20967" onclick="CopyToClipboard('tag20967');return false;" class="tag-decoration">nightly-f5f4935</div><div id="tag7395" onclick="CopyToClipboard('tag7395');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/f5f4935fb4a91079cf22aeed60d581a6992fa9de" target="_blank">Upstream update: alpinevpn-7f0f6dc => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21198320996" target="_blank">2026-01-21 05:23:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31371" onclick="CopyToClipboard('tag31371');return false;" class="tag-decoration">release</div><div id="tag32395" onclick="CopyToClipboard('tag32395');return false;" class="tag-decoration">release-6e03c7f</div><div id="tag6265" onclick="CopyToClipboard('tag6265');return false;" class="tag-decoration">release-1.4.0</div><div id="tag19533" onclick="CopyToClipboard('tag19533');return false;" class="tag-decoration">release-v1</div><div id="tag26507" onclick="CopyToClipboard('tag26507');return false;" class="tag-decoration">release-v1.4</div><div id="tag19076" onclick="CopyToClipboard('tag19076');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/6e03c7f7ca4102309a0ead70e415b1b8e1697d17" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-7f0f6dc</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21197445583" target="_blank">2026-01-21 04:38:53</a></td></tr>
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
