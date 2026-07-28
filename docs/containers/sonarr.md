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
<tr><td><div id="tag3941" onclick="CopyToClipboard('tag3941');return false;" class="tag-decoration">nightly</div><div id="tag21450" onclick="CopyToClipboard('tag21450');return false;" class="tag-decoration">nightly-274d23c</div><div id="tag8738" onclick="CopyToClipboard('tag8738');return false;" class="tag-decoration">nightly-4.0.19.2995</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/274d23c7aaa7a516f4b6355ea6d7df39f1734df3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/30376577580" target="_blank">2026-07-28 16:05:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29237" onclick="CopyToClipboard('tag29237');return false;" class="tag-decoration">release</div><div id="tag9202" onclick="CopyToClipboard('tag9202');return false;" class="tag-decoration">release-40e5b76</div><div id="tag15364" onclick="CopyToClipboard('tag15364');return false;" class="tag-decoration">release-4.0.19.2979</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/40e5b76e2ef8d5af2090772dc1ecbd6f396286bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/30376588015" target="_blank">2026-07-28 16:05:31</a></td></tr>
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
