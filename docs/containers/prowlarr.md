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
<tr><td><div id="tag8448" onclick="CopyToClipboard('tag8448');return false;" class="tag-decoration">nightly</div><div id="tag22795" onclick="CopyToClipboard('tag22795');return false;" class="tag-decoration">nightly-487024c</div><div id="tag19625" onclick="CopyToClipboard('tag19625');return false;" class="tag-decoration">nightly-2.6.5.5620</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/487024c3f6202616a3c11a9408e81227ac88156e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/35230187786" target="_blank">2026-09-17 13:55:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6621" onclick="CopyToClipboard('tag6621');return false;" class="tag-decoration">release</div><div id="tag19491" onclick="CopyToClipboard('tag19491');return false;" class="tag-decoration">release-cf04b3d</div><div id="tag24113" onclick="CopyToClipboard('tag24113');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/cf04b3dcd6d5cbe31c75a8ad92bb7bfae145e3ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/35147629114" target="_blank">2026-09-16 20:37:05</a></td></tr>
<tr><td><div id="tag23510" onclick="CopyToClipboard('tag23510');return false;" class="tag-decoration">testing</div><div id="tag150" onclick="CopyToClipboard('tag150');return false;" class="tag-decoration">testing-434e03b</div><div id="tag29344" onclick="CopyToClipboard('tag29344');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/434e03b1df8295983a5d00432a9264a142c8e876" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/35147630283" target="_blank">2026-09-16 20:37:06</a></td></tr>
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
