---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag26589" onclick="CopyToClipboard('tag26589');return false;" class="tag-decoration">nightly</div><div id="tag29475" onclick="CopyToClipboard('tag29475');return false;" class="tag-decoration">nightly-fc7834f</div><div id="tag4935" onclick="CopyToClipboard('tag4935');return false;" class="tag-decoration">nightly-2.6.5.5649</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/fc7834f11b3a59a45d3c0d464a022c5aecb80b39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37405546040" target="_blank">2026-10-06 02:43:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13925" onclick="CopyToClipboard('tag13925');return false;" class="tag-decoration">release</div><div id="tag30730" onclick="CopyToClipboard('tag30730');return false;" class="tag-decoration">release-34b35ef</div><div id="tag24409" onclick="CopyToClipboard('tag24409');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/34b35effa89b1d49e7186a51af89f6134862783a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37405548990" target="_blank">2026-10-06 02:43:45</a></td></tr>
<tr><td><div id="tag27076" onclick="CopyToClipboard('tag27076');return false;" class="tag-decoration">testing</div><div id="tag27972" onclick="CopyToClipboard('tag27972');return false;" class="tag-decoration">testing-0341010</div><div id="tag2850" onclick="CopyToClipboard('tag2850');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/03410107566a65cd2d9d2a482f2c7c372c53b8d4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37495234867" target="_blank">2026-10-06 16:22:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
