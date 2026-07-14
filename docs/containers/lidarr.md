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
<tr><td><div id="tag10710" onclick="CopyToClipboard('tag10710');return false;" class="tag-decoration">nightly</div><div id="tag5596" onclick="CopyToClipboard('tag5596');return false;" class="tag-decoration">nightly-3a42c1c</div><div id="tag4151" onclick="CopyToClipboard('tag4151');return false;" class="tag-decoration">nightly-3.1.3.4977</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/3a42c1cb4a8f35a7699a800c099e1d50b07beb4f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29320676704" target="_blank">2026-07-14 09:09:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5084" onclick="CopyToClipboard('tag5084');return false;" class="tag-decoration">release</div><div id="tag24842" onclick="CopyToClipboard('tag24842');return false;" class="tag-decoration">release-f373ffa</div><div id="tag11956" onclick="CopyToClipboard('tag11956');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/f373ffa41e27d649ec3195a1c5756a66c61027ec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29356733844" target="_blank">2026-07-14 18:09:43</a></td></tr>
<tr><td><div id="tag30678" onclick="CopyToClipboard('tag30678');return false;" class="tag-decoration">testing</div><div id="tag27982" onclick="CopyToClipboard('tag27982');return false;" class="tag-decoration">testing-8dc0d61</div><div id="tag23088" onclick="CopyToClipboard('tag23088');return false;" class="tag-decoration">testing-3.1.3.4975</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/8dc0d61f18da0a84b1492518efae929cdca506d8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29356736396" target="_blank">2026-07-14 18:09:45</a></td></tr>
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
