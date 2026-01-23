---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag13838" onclick="CopyToClipboard('tag13838');return false;" class="tag-decoration">nightly</div><div id="tag4906" onclick="CopyToClipboard('tag4906');return false;" class="tag-decoration">nightly-38003a8</div><div id="tag19441" onclick="CopyToClipboard('tag19441');return false;" class="tag-decoration">nightly-3b9159ec013577620a3cd760915d575a3c07f14d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/38003a8157eb8c09cdfd5890e649cec4e58a3f6f" target="_blank">Version update: 9a61071bcba1fe75a08bd741406ea36fefe846ab => 3b9159ec013577620a3cd760915d575a3c07f14d</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21288401947" target="_blank">2026-01-23 13:49:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag438" onclick="CopyToClipboard('tag438');return false;" class="tag-decoration">release</div><div id="tag17473" onclick="CopyToClipboard('tag17473');return false;" class="tag-decoration">release-f05eda1</div><div id="tag22684" onclick="CopyToClipboard('tag22684');return false;" class="tag-decoration">release-4.6.5</div><div id="tag16316" onclick="CopyToClipboard('tag16316');return false;" class="tag-decoration">release-v4</div><div id="tag2828" onclick="CopyToClipboard('tag2828');return false;" class="tag-decoration">release-v4.6</div><div id="tag29221" onclick="CopyToClipboard('tag29221');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/f05eda162a28e40c35b2f07929101d0204fb3c51" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21246765921" target="_blank">2026-01-22 11:29:25</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
