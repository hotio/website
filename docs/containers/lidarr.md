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
<tr><td><div id="tag7245" onclick="CopyToClipboard('tag7245');return false;" class="tag-decoration">nightly</div><div id="tag23318" onclick="CopyToClipboard('tag23318');return false;" class="tag-decoration">nightly-0149a5a</div><div id="tag17802" onclick="CopyToClipboard('tag17802');return false;" class="tag-decoration">nightly-3.1.3.4977</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/0149a5a8b65fb69680b5eef4d2ad7619492b0440" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29681197434" target="_blank">2026-07-19 09:13:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29482" onclick="CopyToClipboard('tag29482');return false;" class="tag-decoration">release</div><div id="tag32119" onclick="CopyToClipboard('tag32119');return false;" class="tag-decoration">release-a0965b4</div><div id="tag21897" onclick="CopyToClipboard('tag21897');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/a0965b4a704779d6a1986887ccbd677310f5de9d" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29692048296" target="_blank">2026-07-19 15:02:55</a></td></tr>
<tr><td><div id="tag16253" onclick="CopyToClipboard('tag16253');return false;" class="tag-decoration">testing</div><div id="tag6197" onclick="CopyToClipboard('tag6197');return false;" class="tag-decoration">testing-fd773bf</div><div id="tag11929" onclick="CopyToClipboard('tag11929');return false;" class="tag-decoration">testing-3.1.3.4975</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/fd773bf544ad202062b6d159179c770d97cfe25d" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29681177771" target="_blank">2026-07-19 09:12:50</a></td></tr>
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
