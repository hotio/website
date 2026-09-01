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
<tr><td><div id="tag16035" onclick="CopyToClipboard('tag16035');return false;" class="tag-decoration">nightly</div><div id="tag29491" onclick="CopyToClipboard('tag29491');return false;" class="tag-decoration">nightly-d9b401c</div><div id="tag1853" onclick="CopyToClipboard('tag1853');return false;" class="tag-decoration">nightly-6.4.3.10645</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/d9b401c599f2778b91cfcd5aee8b5fc3991777e3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/33510857082" target="_blank">2026-09-01 13:00:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30997" onclick="CopyToClipboard('tag30997');return false;" class="tag-decoration">release</div><div id="tag4237" onclick="CopyToClipboard('tag4237');return false;" class="tag-decoration">release-b73ee32</div><div id="tag16603" onclick="CopyToClipboard('tag16603');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/b73ee3233ea96cc0cd0f926302601bb52d4f50b5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/33480812403" target="_blank">2026-09-01 07:09:45</a></td></tr>
<tr><td><div id="tag7387" onclick="CopyToClipboard('tag7387');return false;" class="tag-decoration">testing</div><div id="tag5610" onclick="CopyToClipboard('tag5610');return false;" class="tag-decoration">testing-2bbc48d</div><div id="tag19578" onclick="CopyToClipboard('tag19578');return false;" class="tag-decoration">testing-6.4.3.10645</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/2bbc48defe22287332afe46c04116bd8a221bb3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/33510863927" target="_blank">2026-09-01 13:00:35</a></td></tr>
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
