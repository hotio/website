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
<tr><td><div id="tag9075" onclick="CopyToClipboard('tag9075');return false;" class="tag-decoration">nightly</div><div id="tag8809" onclick="CopyToClipboard('tag8809');return false;" class="tag-decoration">nightly-dcbefeb</div><div id="tag24350" onclick="CopyToClipboard('tag24350');return false;" class="tag-decoration">nightly-3.1.6.5078</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/dcbefeb56defc3459535612ac04fcbc047c549bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/34942290124" target="_blank">2026-09-15 07:33:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11459" onclick="CopyToClipboard('tag11459');return false;" class="tag-decoration">release</div><div id="tag17145" onclick="CopyToClipboard('tag17145');return false;" class="tag-decoration">release-00c6ec8</div><div id="tag20478" onclick="CopyToClipboard('tag20478');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/00c6ec8c20a860670ca5b28a0de06be8da3fb470" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35256726857" target="_blank">2026-09-17 18:05:42</a></td></tr>
<tr><td><div id="tag16561" onclick="CopyToClipboard('tag16561');return false;" class="tag-decoration">testing</div><div id="tag29916" onclick="CopyToClipboard('tag29916');return false;" class="tag-decoration">testing-327743e</div><div id="tag26978" onclick="CopyToClipboard('tag26978');return false;" class="tag-decoration">testing-3.1.6.5078</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/327743e2263c22a5128098018b375267ba2250d7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35256714254" target="_blank">2026-09-17 18:05:35</a></td></tr>
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
