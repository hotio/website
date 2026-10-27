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
<tr><td><div id="tag12089" onclick="CopyToClipboard('tag12089');return false;" class="tag-decoration">nightly</div><div id="tag16132" onclick="CopyToClipboard('tag16132');return false;" class="tag-decoration">nightly-466d3e7</div><div id="tag15281" onclick="CopyToClipboard('tag15281');return false;" class="tag-decoration">nightly-3.2.0.5144</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/466d3e7c4a00b6e737260b5951ee9e66fd9051ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40223328030" target="_blank">2026-10-25 18:52:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1109" onclick="CopyToClipboard('tag1109');return false;" class="tag-decoration">release</div><div id="tag9806" onclick="CopyToClipboard('tag9806');return false;" class="tag-decoration">release-acdb283</div><div id="tag3895" onclick="CopyToClipboard('tag3895');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/acdb283a9fd1d12f3303da3de7cc15a31437fdb0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40276893501" target="_blank">2026-10-26 05:55:38</a></td></tr>
<tr><td><div id="tag31614" onclick="CopyToClipboard('tag31614');return false;" class="tag-decoration">testing</div><div id="tag26896" onclick="CopyToClipboard('tag26896');return false;" class="tag-decoration">testing-4223e6c</div><div id="tag4131" onclick="CopyToClipboard('tag4131');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/4223e6c622809a49d0d5c82db980b1c588a4fc5c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40540049690" target="_blank">2026-10-27 16:21:02</a></td></tr>
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
