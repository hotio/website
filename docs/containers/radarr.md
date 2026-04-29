---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23985" onclick="CopyToClipboard('tag23985');return false;" class="tag-decoration">nightly</div><div id="tag14732" onclick="CopyToClipboard('tag14732');return false;" class="tag-decoration">nightly-57068a4</div><div id="tag4969" onclick="CopyToClipboard('tag4969');return false;" class="tag-decoration">nightly-6.2.0.10401</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/57068a412cf8b8e91b3b9b89800876a2c80b5b05" target="_blank">Version update: 6.2.0.10399 => 6.2.0.10401</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25127604556" target="_blank">2026-04-29 18:49:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30965" onclick="CopyToClipboard('tag30965');return false;" class="tag-decoration">release</div><div id="tag17362" onclick="CopyToClipboard('tag17362');return false;" class="tag-decoration">release-f8eb6db</div><div id="tag23042" onclick="CopyToClipboard('tag23042');return false;" class="tag-decoration">release-6.1.1.10360</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/f8eb6db09b960eaf4cb70ed46c6f931228a756fe" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/24552138740" target="_blank">2026-04-17 06:54:21</a></td></tr>
<tr><td><div id="tag20063" onclick="CopyToClipboard('tag20063');return false;" class="tag-decoration">testing</div><div id="tag7153" onclick="CopyToClipboard('tag7153');return false;" class="tag-decoration">testing-947279f</div><div id="tag10711" onclick="CopyToClipboard('tag10711');return false;" class="tag-decoration">testing-6.2.0.10390</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/947279f60f6de38d73f6a27e4ac9dfa302ed1c77" target="_blank">Version update: 6.1.2.10359 => 6.2.0.10390</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/24635129551" target="_blank">2026-04-19 17:40:01</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
