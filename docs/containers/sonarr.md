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
<tr><td><div id="tag17256" onclick="CopyToClipboard('tag17256');return false;" class="tag-decoration">nightly</div><div id="tag20087" onclick="CopyToClipboard('tag20087');return false;" class="tag-decoration">nightly-2a99ab0</div><div id="tag24034" onclick="CopyToClipboard('tag24034');return false;" class="tag-decoration">nightly-4.0.20.3012</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/2a99ab0582d8bfae52bde1839d5d5b1a0262430f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/35260924614" target="_blank">2026-09-17 18:46:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30272" onclick="CopyToClipboard('tag30272');return false;" class="tag-decoration">release</div><div id="tag26265" onclick="CopyToClipboard('tag26265');return false;" class="tag-decoration">release-eaf7487</div><div id="tag30810" onclick="CopyToClipboard('tag30810');return false;" class="tag-decoration">release-4.0.20.3014</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/eaf74872458abc7486ff85da1c316a8ba280da97" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/35234944943" target="_blank">2026-09-17 14:38:36</a></td></tr>
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
