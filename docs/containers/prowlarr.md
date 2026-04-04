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
<tr><td><div id="tag257" onclick="CopyToClipboard('tag257');return false;" class="tag-decoration">nightly</div><div id="tag26624" onclick="CopyToClipboard('tag26624');return false;" class="tag-decoration">nightly-a288e5a</div><div id="tag29824" onclick="CopyToClipboard('tag29824');return false;" class="tag-decoration">nightly-2.3.6.5326</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/a288e5aac1b37f8e7d0cc4c296f23e8c2fb0518d" target="_blank">Version update: 2.3.5.5323 => 2.3.6.5326</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23921576849" target="_blank">2026-04-02 20:55:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27198" onclick="CopyToClipboard('tag27198');return false;" class="tag-decoration">release</div><div id="tag26257" onclick="CopyToClipboard('tag26257');return false;" class="tag-decoration">release-fa01a1c</div><div id="tag9761" onclick="CopyToClipboard('tag9761');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/fa01a1cc953b314843fcfc28ba575f60be93ebad" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/22292129463" target="_blank">2026-02-23 03:43:53</a></td></tr>
<tr><td><div id="tag25113" onclick="CopyToClipboard('tag25113');return false;" class="tag-decoration">testing</div><div id="tag12691" onclick="CopyToClipboard('tag12691');return false;" class="tag-decoration">testing-bba598f</div><div id="tag25564" onclick="CopyToClipboard('tag25564');return false;" class="tag-decoration">testing-2.3.5.5323</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/bba598fc76b5dc6e6cd5b4f6b29459906b33a390" target="_blank">Version update: 2.3.5.5318 => 2.3.5.5323</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23980378226" target="_blank">2026-04-04 14:00:15</a></td></tr>
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
