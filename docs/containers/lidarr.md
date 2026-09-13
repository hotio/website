---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag2204" onclick="CopyToClipboard('tag2204');return false;" class="tag-decoration">nightly</div><div id="tag32377" onclick="CopyToClipboard('tag32377');return false;" class="tag-decoration">nightly-0cd7a4b</div><div id="tag29562" onclick="CopyToClipboard('tag29562');return false;" class="tag-decoration">nightly-3.1.5.5075</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/0cd7a4bd1e56586d4bdd4983304fd73c31ee7b0a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/34728833929" target="_blank">2026-09-13 00:46:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29402" onclick="CopyToClipboard('tag29402');return false;" class="tag-decoration">release</div><div id="tag11038" onclick="CopyToClipboard('tag11038');return false;" class="tag-decoration">release-6a13240</div><div id="tag7955" onclick="CopyToClipboard('tag7955');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/6a13240697b5a795d3733682ead87ce238894889" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/34500747167" target="_blank">2026-09-10 16:13:40</a></td></tr>
<tr><td><div id="tag19908" onclick="CopyToClipboard('tag19908');return false;" class="tag-decoration">testing</div><div id="tag12982" onclick="CopyToClipboard('tag12982');return false;" class="tag-decoration">testing-aa4a976</div><div id="tag2046" onclick="CopyToClipboard('tag2046');return false;" class="tag-decoration">testing-3.1.5.5066</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/aa4a976d18ab6ce5c10d7395ac399b227104f123" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/34500759589" target="_blank">2026-09-10 16:13:47</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
