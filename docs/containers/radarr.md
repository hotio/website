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
<tr><td><div id="tag23138" onclick="CopyToClipboard('tag23138');return false;" class="tag-decoration">nightly</div><div id="tag14933" onclick="CopyToClipboard('tag14933');return false;" class="tag-decoration">nightly-6c7802c</div><div id="tag30073" onclick="CopyToClipboard('tag30073');return false;" class="tag-decoration">nightly-6.4.4.10684</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/6c7802c29e07923a936a6af5fe89960cebeb8a41" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/34960662631" target="_blank">2026-09-15 10:57:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18587" onclick="CopyToClipboard('tag18587');return false;" class="tag-decoration">release</div><div id="tag12783" onclick="CopyToClipboard('tag12783');return false;" class="tag-decoration">release-85e14cf</div><div id="tag3416" onclick="CopyToClipboard('tag3416');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/85e14cf9fd62c5a9765c40bd49b307247695fb75" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35148832647" target="_blank">2026-09-16 20:49:08</a></td></tr>
<tr><td><div id="tag4071" onclick="CopyToClipboard('tag4071');return false;" class="tag-decoration">testing</div><div id="tag30771" onclick="CopyToClipboard('tag30771');return false;" class="tag-decoration">testing-b2624b9</div><div id="tag7151" onclick="CopyToClipboard('tag7151');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/b2624b9b968dd2cb032adadc5021efadffba7367" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35148832700" target="_blank">2026-09-16 20:49:07</a></td></tr>
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
