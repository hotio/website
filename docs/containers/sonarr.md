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
<tr><td><div id="tag23509" onclick="CopyToClipboard('tag23509');return false;" class="tag-decoration">nightly</div><div id="tag8931" onclick="CopyToClipboard('tag8931');return false;" class="tag-decoration">nightly-d0a0c10</div><div id="tag13378" onclick="CopyToClipboard('tag13378');return false;" class="tag-decoration">nightly-4.0.17.2967</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/d0a0c10b42821402a2e2b043c2a673054fdd9ff2" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/25928111676" target="_blank">2026-05-15 16:07:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9033" onclick="CopyToClipboard('tag9033');return false;" class="tag-decoration">release</div><div id="tag12437" onclick="CopyToClipboard('tag12437');return false;" class="tag-decoration">release-560db95</div><div id="tag2682" onclick="CopyToClipboard('tag2682');return false;" class="tag-decoration">release-4.0.17.2952</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/560db95547d5672b5599ae23b9b8316daceaa7b5" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/25986584763" target="_blank">2026-05-17 09:02:54</a></td></tr>
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
