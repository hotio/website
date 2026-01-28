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
<tr><td><div id="tag9373" onclick="CopyToClipboard('tag9373');return false;" class="tag-decoration">nightly</div><div id="tag18318" onclick="CopyToClipboard('tag18318');return false;" class="tag-decoration">nightly-9f56db3</div><div id="tag13094" onclick="CopyToClipboard('tag13094');return false;" class="tag-decoration">nightly-3.1.2.4914</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/9f56db3497fa87e5d63b617587d22736c7bcf5c5" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21428845357" target="_blank">2026-01-28 07:14:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11067" onclick="CopyToClipboard('tag11067');return false;" class="tag-decoration">release</div><div id="tag9278" onclick="CopyToClipboard('tag9278');return false;" class="tag-decoration">release-6325e02</div><div id="tag3101" onclick="CopyToClipboard('tag3101');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/6325e0217d2dd0b5d66ceeb02868f28d2d65df20" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21426202377" target="_blank">2026-01-28 05:23:07</a></td></tr>
<tr><td><div id="tag7770" onclick="CopyToClipboard('tag7770');return false;" class="tag-decoration">testing</div><div id="tag31455" onclick="CopyToClipboard('tag31455');return false;" class="tag-decoration">testing-aa9c78b</div><div id="tag17547" onclick="CopyToClipboard('tag17547');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/aa9c78bf308c9920da0391653a8b691a9028ea33" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21426202802" target="_blank">2026-01-28 05:23:08</a></td></tr>
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
