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
<tr><td><div id="tag26216" onclick="CopyToClipboard('tag26216');return false;" class="tag-decoration">nightly</div><div id="tag30261" onclick="CopyToClipboard('tag30261');return false;" class="tag-decoration">nightly-2fee751</div><div id="tag29179" onclick="CopyToClipboard('tag29179');return false;" class="tag-decoration">nightly-3.1.6.5078</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/2fee751a49c66b02307bf3705a2a3864d3e41103" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35318733259" target="_blank">2026-09-18 07:17:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4733" onclick="CopyToClipboard('tag4733');return false;" class="tag-decoration">release</div><div id="tag9797" onclick="CopyToClipboard('tag9797');return false;" class="tag-decoration">release-6f3dfe1</div><div id="tag19533" onclick="CopyToClipboard('tag19533');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/6f3dfe182f1d2349bb4a08fbc6c0149c2daaa206" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35318732382" target="_blank">2026-09-18 07:17:35</a></td></tr>
<tr><td><div id="tag23695" onclick="CopyToClipboard('tag23695');return false;" class="tag-decoration">testing</div><div id="tag10986" onclick="CopyToClipboard('tag10986');return false;" class="tag-decoration">testing-a7dc38a</div><div id="tag26328" onclick="CopyToClipboard('tag26328');return false;" class="tag-decoration">testing-3.1.6.5078</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/a7dc38a02fd119fed53f44728af63dcb32771d5a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35371790691" target="_blank">2026-09-18 17:00:25</a></td></tr>
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
