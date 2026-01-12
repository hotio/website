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
<tr><td><div id="tag32209" onclick="CopyToClipboard('tag32209');return false;" class="tag-decoration">nightly</div><div id="tag15629" onclick="CopyToClipboard('tag15629');return false;" class="tag-decoration">nightly-4.0.16.2946</div><div id="tag10087" onclick="CopyToClipboard('tag10087');return false;" class="tag-decoration">nightly-227a6fb</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/227a6fbf79dc09dcf58e0a1173cf84c0ca92766e" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/20898167103" target="_blank">2026-01-11 16:17:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8488" onclick="CopyToClipboard('tag8488');return false;" class="tag-decoration">release</div><div id="tag22543" onclick="CopyToClipboard('tag22543');return false;" class="tag-decoration">release-4.0.16.2944</div><div id="tag17852" onclick="CopyToClipboard('tag17852');return false;" class="tag-decoration">release-cec18ca</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/cec18ca59e09b9d8ffc4c317fe5c06206f307e12" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/20898167274" target="_blank">2026-01-11 16:17:51</a></td></tr>
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
