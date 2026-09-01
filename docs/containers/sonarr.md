---
hide:
  - toc
title: hotio/sonarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sonarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sonarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sonarr/sonarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag29992" onclick="CopyToClipboard('tag29992');return false;" class="tag-decoration">nightly</div><div id="tag19235" onclick="CopyToClipboard('tag19235');return false;" class="tag-decoration">nightly-372eedb</div><div id="tag29481" onclick="CopyToClipboard('tag29481');return false;" class="tag-decoration">nightly-4.0.19.3009</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/372eedbe6f8ff19ca76b47f37c3e21117d528d05" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/33510976846" target="_blank">2026-09-01 13:01:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14661" onclick="CopyToClipboard('tag14661');return false;" class="tag-decoration">release</div><div id="tag26776" onclick="CopyToClipboard('tag26776');return false;" class="tag-decoration">release-98b4cc0</div><div id="tag26085" onclick="CopyToClipboard('tag26085');return false;" class="tag-decoration">release-4.0.19.2979</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/98b4cc0b6cae42460f6faea11db0f176ea243db9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/33510969644" target="_blank">2026-09-01 13:01:40</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sonarr" \
        -p 8989:8989 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8989/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sonarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sonarr:
        container_name: sonarr
        image: ghcr.io/hotio/sonarr
        ports:
          - "8989:8989"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8989/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
