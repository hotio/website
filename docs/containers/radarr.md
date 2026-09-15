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
<tr><td><div id="tag30741" onclick="CopyToClipboard('tag30741');return false;" class="tag-decoration">nightly</div><div id="tag21358" onclick="CopyToClipboard('tag21358');return false;" class="tag-decoration">nightly-6c7802c</div><div id="tag31303" onclick="CopyToClipboard('tag31303');return false;" class="tag-decoration">nightly-6.4.4.10684</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/6c7802c29e07923a936a6af5fe89960cebeb8a41" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34960662631" target="_blank">2026-09-15 10:57:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21959" onclick="CopyToClipboard('tag21959');return false;" class="tag-decoration">release</div><div id="tag18496" onclick="CopyToClipboard('tag18496');return false;" class="tag-decoration">release-e5b3580</div><div id="tag26669" onclick="CopyToClipboard('tag26669');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/e5b3580eafe7c0ff3368ef777419e128194d2675" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34960656170" target="_blank">2026-09-15 10:57:10</a></td></tr>
<tr><td><div id="tag26350" onclick="CopyToClipboard('tag26350');return false;" class="tag-decoration">testing</div><div id="tag15175" onclick="CopyToClipboard('tag15175');return false;" class="tag-decoration">testing-1e129ae</div><div id="tag15779" onclick="CopyToClipboard('tag15779');return false;" class="tag-decoration">testing-6.4.4.10684</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/1e129ae853201ad0957a844b37409b3c78c195a9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34960656337" target="_blank">2026-09-15 10:57:11</a></td></tr>
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
