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
<tr><td><div id="tag30810" onclick="CopyToClipboard('tag30810');return false;" class="tag-decoration">nightly</div><div id="tag32606" onclick="CopyToClipboard('tag32606');return false;" class="tag-decoration">nightly-810960a</div><div id="tag16707" onclick="CopyToClipboard('tag16707');return false;" class="tag-decoration">nightly-3.1.2.4914</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/810960a7e2f4af9aeee627102a65119546a86dc7" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21124038885" target="_blank">2026-01-19 03:13:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8907" onclick="CopyToClipboard('tag8907');return false;" class="tag-decoration">release</div><div id="tag30244" onclick="CopyToClipboard('tag30244');return false;" class="tag-decoration">release-203d0af</div><div id="tag30437" onclick="CopyToClipboard('tag30437');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/203d0af86cf5f2c8e65fb44f8397f1c0bc0f95ec" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21124039848" target="_blank">2026-01-19 03:13:21</a></td></tr>
<tr><td><div id="tag25321" onclick="CopyToClipboard('tag25321');return false;" class="tag-decoration">testing</div><div id="tag9611" onclick="CopyToClipboard('tag9611');return false;" class="tag-decoration">testing-b12ae83</div><div id="tag28412" onclick="CopyToClipboard('tag28412');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/b12ae8389680780044045118d9512fcaf66f6061" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21124040293" target="_blank">2026-01-19 03:13:23</a></td></tr>
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
