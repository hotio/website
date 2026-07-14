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
<tr><td><div id="tag22610" onclick="CopyToClipboard('tag22610');return false;" class="tag-decoration">nightly</div><div id="tag15157" onclick="CopyToClipboard('tag15157');return false;" class="tag-decoration">nightly-58d136e</div><div id="tag7869" onclick="CopyToClipboard('tag7869');return false;" class="tag-decoration">nightly-3.1.3.4977</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/58d136eed7fc8d629e955e34a7995f9cd468b44c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29310944515" target="_blank">2026-07-14 06:18:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11245" onclick="CopyToClipboard('tag11245');return false;" class="tag-decoration">release</div><div id="tag10311" onclick="CopyToClipboard('tag10311');return false;" class="tag-decoration">release-89f7036</div><div id="tag14291" onclick="CopyToClipboard('tag14291');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/89f7036f8d3f7bb0eca59fabbf515105de7e979e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/28976295145" target="_blank">2026-07-08 21:15:56</a></td></tr>
<tr><td><div id="tag5090" onclick="CopyToClipboard('tag5090');return false;" class="tag-decoration">testing</div><div id="tag25636" onclick="CopyToClipboard('tag25636');return false;" class="tag-decoration">testing-98b8daa</div><div id="tag22976" onclick="CopyToClipboard('tag22976');return false;" class="tag-decoration">testing-3.1.3.4975</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/98b8daa87dc06683c9fcb7cccc31fd9aeaf8bee1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29310945418" target="_blank">2026-07-14 06:18:06</a></td></tr>
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
