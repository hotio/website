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
<tr><td><div id="tag23551" onclick="CopyToClipboard('tag23551');return false;" class="tag-decoration">nightly</div><div id="tag4942" onclick="CopyToClipboard('tag4942');return false;" class="tag-decoration">nightly-73042f3</div><div id="tag581" onclick="CopyToClipboard('tag581');return false;" class="tag-decoration">nightly-3.2.1.5182</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/73042f3a041b745ede77931931c843954faf703d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/41926251096" target="_blank">2026-11-04 22:33:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5321" onclick="CopyToClipboard('tag5321');return false;" class="tag-decoration">release</div><div id="tag1716" onclick="CopyToClipboard('tag1716');return false;" class="tag-decoration">release-03ccdaf</div><div id="tag28553" onclick="CopyToClipboard('tag28553');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/03ccdafc5f61fb1acce9df8a8c4a337370327802" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42104338146" target="_blank">2026-11-05 20:32:29</a></td></tr>
<tr><td><div id="tag31066" onclick="CopyToClipboard('tag31066');return false;" class="tag-decoration">testing</div><div id="tag32291" onclick="CopyToClipboard('tag32291');return false;" class="tag-decoration">testing-134db3a</div><div id="tag26075" onclick="CopyToClipboard('tag26075');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/134db3a34d10acc53bca5ccf826fd26c82775311" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42104344107" target="_blank">2026-11-05 20:32:31</a></td></tr>
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
