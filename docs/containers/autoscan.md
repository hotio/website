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
<tr><td><div id="tag29355" onclick="CopyToClipboard('tag29355');return false;" class="tag-decoration">nightly</div><div id="tag16162" onclick="CopyToClipboard('tag16162');return false;" class="tag-decoration">nightly-c4864e7</div><div id="tag21100" onclick="CopyToClipboard('tag21100');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/c4864e744b986703ce9b030021581e6189099613" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21200247093" target="_blank">2026-01-21 06:56:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22522" onclick="CopyToClipboard('tag22522');return false;" class="tag-decoration">release</div><div id="tag31799" onclick="CopyToClipboard('tag31799');return false;" class="tag-decoration">release-d667359</div><div id="tag13418" onclick="CopyToClipboard('tag13418');return false;" class="tag-decoration">release-1.4.0</div><div id="tag1843" onclick="CopyToClipboard('tag1843');return false;" class="tag-decoration">release-v1</div><div id="tag20807" onclick="CopyToClipboard('tag20807');return false;" class="tag-decoration">release-v1.4</div><div id="tag12845" onclick="CopyToClipboard('tag12845');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/d667359a6bddf034419815a87d72ac548789d06a" target="_blank">Upstream update: alpinevpn-7f0f6dc => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21198321374" target="_blank">2026-01-21 05:23:45</a></td></tr>
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
