---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag15468" onclick="CopyToClipboard('tag15468');return false;" class="tag-decoration">nightly</div><div id="tag23187" onclick="CopyToClipboard('tag23187');return false;" class="tag-decoration">nightly-fca0048</div><div id="tag31410" onclick="CopyToClipboard('tag31410');return false;" class="tag-decoration">nightly-3.1.2.4914</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/fca0048ce1f4bef7c4cbe0cda4722748825e8132" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21246753168" target="_blank">2026-01-22 11:28:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3214" onclick="CopyToClipboard('tag3214');return false;" class="tag-decoration">release</div><div id="tag11923" onclick="CopyToClipboard('tag11923');return false;" class="tag-decoration">release-00f9584</div><div id="tag28919" onclick="CopyToClipboard('tag28919');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/00f95841b6d28e0a9c5cfa5fb82020fac8824e2c" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21322450746" target="_blank">2026-01-24 22:14:25</a></td></tr>
<tr><td><div id="tag15548" onclick="CopyToClipboard('tag15548');return false;" class="tag-decoration">testing</div><div id="tag27572" onclick="CopyToClipboard('tag27572');return false;" class="tag-decoration">testing-d712d8d</div><div id="tag1287" onclick="CopyToClipboard('tag1287');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/d712d8dff6231ef92781e86f3613669cac84c0e7" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21246755335" target="_blank">2026-01-22 11:29:04</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
