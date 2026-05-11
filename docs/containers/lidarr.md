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
<tr><td><div id="tag21939" onclick="CopyToClipboard('tag21939');return false;" class="tag-decoration">nightly</div><div id="tag29656" onclick="CopyToClipboard('tag29656');return false;" class="tag-decoration">nightly-3848026</div><div id="tag6260" onclick="CopyToClipboard('tag6260');return false;" class="tag-decoration">nightly-3.1.2.4939</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/38480262f6df7af9e21c9b9bded223d0736defe6" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25700478601" target="_blank">2026-05-11 22:14:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27119" onclick="CopyToClipboard('tag27119');return false;" class="tag-decoration">release</div><div id="tag14369" onclick="CopyToClipboard('tag14369');return false;" class="tag-decoration">release-fc113e9</div><div id="tag26822" onclick="CopyToClipboard('tag26822');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/fc113e96fafe1d3d66296c46973cf23460d41687" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25700481994" target="_blank">2026-05-11 22:14:55</a></td></tr>
<tr><td><div id="tag27260" onclick="CopyToClipboard('tag27260');return false;" class="tag-decoration">testing</div><div id="tag7728" onclick="CopyToClipboard('tag7728');return false;" class="tag-decoration">testing-e6e24ce</div><div id="tag1264" onclick="CopyToClipboard('tag1264');return false;" class="tag-decoration">testing-3.1.2.4938</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/e6e24cec5175659380942b46bd4cc7d84076a2fd" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/25700487086" target="_blank">2026-05-11 22:15:01</a></td></tr>
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
