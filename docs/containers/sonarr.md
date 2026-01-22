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
<tr><td><div id="tag22349" onclick="CopyToClipboard('tag22349');return false;" class="tag-decoration">nightly</div><div id="tag18501" onclick="CopyToClipboard('tag18501');return false;" class="tag-decoration">nightly-4ef415a</div><div id="tag29110" onclick="CopyToClipboard('tag29110');return false;" class="tag-decoration">nightly-4.0.16.2946</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/4ef415a4b1cf48749f1bc8d74818258d8fa59807" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/21244728117" target="_blank">2026-01-22 10:20:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23585" onclick="CopyToClipboard('tag23585');return false;" class="tag-decoration">release</div><div id="tag2568" onclick="CopyToClipboard('tag2568');return false;" class="tag-decoration">release-ded00b1</div><div id="tag26328" onclick="CopyToClipboard('tag26328');return false;" class="tag-decoration">release-4.0.16.2944</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/ded00b1a205bdcd946ff07be4be0b0494cd20569" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/21244728990" target="_blank">2026-01-22 10:20:08</a></td></tr>
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
