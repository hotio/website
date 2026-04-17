---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag31222" onclick="CopyToClipboard('tag31222');return false;" class="tag-decoration">nightly</div><div id="tag25857" onclick="CopyToClipboard('tag25857');return false;" class="tag-decoration">nightly-171eafb</div><div id="tag16422" onclick="CopyToClipboard('tag16422');return false;" class="tag-decoration">nightly-443de7826081289e2d431acdf32fb6fd73dc7a14</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/171eafba5e83f702a92ce57a8b07c0d15f479c7e" target="_blank">Version update: 26cd867a6a6acfed12c99fcdb14624f4c5661eeb => 443de7826081289e2d431acdf32fb6fd73dc7a14</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24587312545" target="_blank">2026-04-17 21:23:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4897" onclick="CopyToClipboard('tag4897');return false;" class="tag-decoration">release</div><div id="tag6964" onclick="CopyToClipboard('tag6964');return false;" class="tag-decoration">release-6194812</div><div id="tag30500" onclick="CopyToClipboard('tag30500');return false;" class="tag-decoration">release-0.31.1</div><div id="tag767" onclick="CopyToClipboard('tag767');return false;" class="tag-decoration">release-v0</div><div id="tag11056" onclick="CopyToClipboard('tag11056');return false;" class="tag-decoration">release-v0.31</div><div id="tag18244" onclick="CopyToClipboard('tag18244');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/619481210cb7e2641f9db1d72dfead97366e2b85" target="_blank">Upstream update: noblevpn-cba64e8 => noblevpn-441eaee</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24483912488" target="_blank">2026-04-15 23:36:51</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
