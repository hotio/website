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
<tr><td><div id="tag13952" onclick="CopyToClipboard('tag13952');return false;" class="tag-decoration">nightly</div><div id="tag13127" onclick="CopyToClipboard('tag13127');return false;" class="tag-decoration">nightly-58d136e</div><div id="tag1642" onclick="CopyToClipboard('tag1642');return false;" class="tag-decoration">nightly-3.1.3.4977</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/58d136eed7fc8d629e955e34a7995f9cd468b44c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29310944515" target="_blank">2026-07-14 06:18:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29675" onclick="CopyToClipboard('tag29675');return false;" class="tag-decoration">release</div><div id="tag8772" onclick="CopyToClipboard('tag8772');return false;" class="tag-decoration">release-373337c</div><div id="tag12008" onclick="CopyToClipboard('tag12008');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/373337c6bc9458ba57e36a0ffea6c104c868c971" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29310948973" target="_blank">2026-07-14 06:18:11</a></td></tr>
<tr><td><div id="tag11462" onclick="CopyToClipboard('tag11462');return false;" class="tag-decoration">testing</div><div id="tag21132" onclick="CopyToClipboard('tag21132');return false;" class="tag-decoration">testing-143c172</div><div id="tag21870" onclick="CopyToClipboard('tag21870');return false;" class="tag-decoration">testing-3.1.3.4975</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/143c172dcdbbd0377c4ffa4baf1fa6295fb1e16e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29320674508" target="_blank">2026-07-14 09:09:28</a></td></tr>
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
