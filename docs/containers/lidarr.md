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
<tr><td><div id="tag20062" onclick="CopyToClipboard('tag20062');return false;" class="tag-decoration">nightly</div><div id="tag7124" onclick="CopyToClipboard('tag7124');return false;" class="tag-decoration">nightly-ed62a2d</div><div id="tag21517" onclick="CopyToClipboard('tag21517');return false;" class="tag-decoration">nightly-3.1.6.5078</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/ed62a2d1e91d113c8b4050b15294beb800d18df3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/37395416218" target="_blank">2026-10-06 00:42:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24152" onclick="CopyToClipboard('tag24152');return false;" class="tag-decoration">release</div><div id="tag27153" onclick="CopyToClipboard('tag27153');return false;" class="tag-decoration">release-6e2bae8</div><div id="tag30050" onclick="CopyToClipboard('tag30050');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/6e2bae81056cf7cd6b6ee53f171e734a2a437d80" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/37395407224" target="_blank">2026-10-06 00:42:32</a></td></tr>
<tr><td><div id="tag27860" onclick="CopyToClipboard('tag27860');return false;" class="tag-decoration">testing</div><div id="tag6034" onclick="CopyToClipboard('tag6034');return false;" class="tag-decoration">testing-8267f20</div><div id="tag23371" onclick="CopyToClipboard('tag23371');return false;" class="tag-decoration">testing-3.1.6.5078</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/8267f20641a45a6893a98257e933f65095c01499" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/36925254589" target="_blank">2026-10-01 20:56:36</a></td></tr>
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
