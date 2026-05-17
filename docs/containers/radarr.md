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
<tr><td><div id="tag1786" onclick="CopyToClipboard('tag1786');return false;" class="tag-decoration">nightly</div><div id="tag26290" onclick="CopyToClipboard('tag26290');return false;" class="tag-decoration">nightly-5455e94</div><div id="tag12812" onclick="CopyToClipboard('tag12812');return false;" class="tag-decoration">nightly-6.2.0.10409</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/5455e94962e74b7399ec72eb14ff14f24f711396" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25986567851" target="_blank">2026-05-17 09:02:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3985" onclick="CopyToClipboard('tag3985');return false;" class="tag-decoration">release</div><div id="tag31362" onclick="CopyToClipboard('tag31362');return false;" class="tag-decoration">release-395ddc8</div><div id="tag30935" onclick="CopyToClipboard('tag30935');return false;" class="tag-decoration">release-6.1.1.10360</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/395ddc867d9dfac7d936c95a778b02ddb4933033" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25986568322" target="_blank">2026-05-17 09:02:10</a></td></tr>
<tr><td><div id="tag6857" onclick="CopyToClipboard('tag6857');return false;" class="tag-decoration">testing</div><div id="tag26662" onclick="CopyToClipboard('tag26662');return false;" class="tag-decoration">testing-bbcf375</div><div id="tag13337" onclick="CopyToClipboard('tag13337');return false;" class="tag-decoration">testing-6.2.0.10390</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/bbcf375d815decb4bde782df4f884276364df4e3" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25986568185" target="_blank">2026-05-17 09:02:10</a></td></tr>
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
