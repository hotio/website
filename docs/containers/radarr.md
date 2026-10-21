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
<tr><td><div id="tag11277" onclick="CopyToClipboard('tag11277');return false;" class="tag-decoration">nightly</div><div id="tag28887" onclick="CopyToClipboard('tag28887');return false;" class="tag-decoration">nightly-5c5a2b0</div><div id="tag17153" onclick="CopyToClipboard('tag17153');return false;" class="tag-decoration">nightly-7.0.0.10788</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/5c5a2b094a6cd12a0b19c66fd0c3b3c4cfd797c8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39647561914" target="_blank">2026-10-21 17:51:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29602" onclick="CopyToClipboard('tag29602');return false;" class="tag-decoration">release</div><div id="tag24401" onclick="CopyToClipboard('tag24401');return false;" class="tag-decoration">release-4b8f1cc</div><div id="tag32755" onclick="CopyToClipboard('tag32755');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/4b8f1ccc853bc8073c51b65274b3a90d52e15b97" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39647577023" target="_blank">2026-10-21 17:51:54</a></td></tr>
<tr><td><div id="tag6148" onclick="CopyToClipboard('tag6148');return false;" class="tag-decoration">testing</div><div id="tag9801" onclick="CopyToClipboard('tag9801');return false;" class="tag-decoration">testing-f7f50fb</div><div id="tag17319" onclick="CopyToClipboard('tag17319');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/f7f50fbf15ba990d1e3fd35e30353f76d736be27" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39505129343" target="_blank">2026-10-20 22:02:34</a></td></tr>
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
