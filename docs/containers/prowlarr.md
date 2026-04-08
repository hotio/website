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
<tr><td><div id="tag18555" onclick="CopyToClipboard('tag18555');return false;" class="tag-decoration">nightly</div><div id="tag13346" onclick="CopyToClipboard('tag13346');return false;" class="tag-decoration">nightly-456d587</div><div id="tag1344" onclick="CopyToClipboard('tag1344');return false;" class="tag-decoration">nightly-2.3.6.5341</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/456d587dbac27d6a0683b0f85308a1f12779416a" target="_blank">Version update: 2.3.6.5340 => 2.3.6.5341</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/24158339626" target="_blank">2026-04-08 20:57:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30091" onclick="CopyToClipboard('tag30091');return false;" class="tag-decoration">release</div><div id="tag5058" onclick="CopyToClipboard('tag5058');return false;" class="tag-decoration">release-d35d5b9</div><div id="tag29473" onclick="CopyToClipboard('tag29473');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/d35d5b91926c578d9d968083bb6a9c2816a9b720" target="_blank">Version update: 2.3.0.5236 => 2.3.5.5327</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23985523872" target="_blank">2026-04-04 19:02:35</a></td></tr>
<tr><td><div id="tag7157" onclick="CopyToClipboard('tag7157');return false;" class="tag-decoration">testing</div><div id="tag32221" onclick="CopyToClipboard('tag32221');return false;" class="tag-decoration">testing-288b992</div><div id="tag6040" onclick="CopyToClipboard('tag6040');return false;" class="tag-decoration">testing-2.3.5.5327</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/288b9921fe55a183df1faa0246e3effb7a7675f1" target="_blank">Version update: 2.3.5.5323 => 2.3.5.5327</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23985524217" target="_blank">2026-04-04 19:02:38</a></td></tr>
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
