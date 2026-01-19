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
<tr><td><div id="tag24980" onclick="CopyToClipboard('tag24980');return false;" class="tag-decoration">nightly</div><div id="tag1518" onclick="CopyToClipboard('tag1518');return false;" class="tag-decoration">nightly-810960a</div><div id="tag20418" onclick="CopyToClipboard('tag20418');return false;" class="tag-decoration">nightly-3.1.2.4914</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/810960a7e2f4af9aeee627102a65119546a86dc7" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21124038885" target="_blank">2026-01-19 03:13:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13324" onclick="CopyToClipboard('tag13324');return false;" class="tag-decoration">release</div><div id="tag32403" onclick="CopyToClipboard('tag32403');return false;" class="tag-decoration">release-43b2eb8</div><div id="tag21995" onclick="CopyToClipboard('tag21995');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/43b2eb8b2019c3548dd10261745f61fe21a95a9a" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21113695399" target="_blank">2026-01-18 14:56:58</a></td></tr>
<tr><td><div id="tag9450" onclick="CopyToClipboard('tag9450');return false;" class="tag-decoration">testing</div><div id="tag31136" onclick="CopyToClipboard('tag31136');return false;" class="tag-decoration">testing-b12ae83</div><div id="tag20833" onclick="CopyToClipboard('tag20833');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/b12ae8389680780044045118d9512fcaf66f6061" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21124040293" target="_blank">2026-01-19 03:13:23</a></td></tr>
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
