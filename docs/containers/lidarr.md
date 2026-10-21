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
<tr><td><div id="tag23788" onclick="CopyToClipboard('tag23788');return false;" class="tag-decoration">nightly</div><div id="tag10483" onclick="CopyToClipboard('tag10483');return false;" class="tag-decoration">nightly-620ec3f</div><div id="tag3428" onclick="CopyToClipboard('tag3428');return false;" class="tag-decoration">nightly-3.1.6.5102</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/620ec3f008cad9d00900d8aa2a6a2e75e3da7279" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/39696658591" target="_blank">2026-10-21 23:56:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29336" onclick="CopyToClipboard('tag29336');return false;" class="tag-decoration">release</div><div id="tag22218" onclick="CopyToClipboard('tag22218');return false;" class="tag-decoration">release-712660e</div><div id="tag9237" onclick="CopyToClipboard('tag9237');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/712660ee5e6d24580d6d1e4f4bb4efb15fd88a03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/39696675616" target="_blank">2026-10-21 23:57:06</a></td></tr>
<tr><td><div id="tag16753" onclick="CopyToClipboard('tag16753');return false;" class="tag-decoration">testing</div><div id="tag9012" onclick="CopyToClipboard('tag9012');return false;" class="tag-decoration">testing-73f4fbb</div><div id="tag28159" onclick="CopyToClipboard('tag28159');return false;" class="tag-decoration">testing-3.1.6.5078</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/73f4fbb3ad29e0b43a2bf699925f2e1ccce3c811" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/39696665102" target="_blank">2026-10-21 23:57:02</a></td></tr>
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
