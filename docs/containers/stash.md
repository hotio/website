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
<tr><td><div id="tag25275" onclick="CopyToClipboard('tag25275');return false;" class="tag-decoration">nightly</div><div id="tag28086" onclick="CopyToClipboard('tag28086');return false;" class="tag-decoration">nightly-85e93f1</div><div id="tag4770" onclick="CopyToClipboard('tag4770');return false;" class="tag-decoration">nightly-8af2cfe5255f70d8bc0864e3a275571d2db96de0</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/85e93f112bc7a45e3fe7d3c849bfe98d2be40dc5" target="_blank">Version update: c861d3991a9aa4404ff6739b2515343957340355 => 8af2cfe5255f70d8bc0864e3a275571d2db96de0</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23720748311" target="_blank">2026-03-29 22:36:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5126" onclick="CopyToClipboard('tag5126');return false;" class="tag-decoration">release</div><div id="tag14953" onclick="CopyToClipboard('tag14953');return false;" class="tag-decoration">release-203417b</div><div id="tag5669" onclick="CopyToClipboard('tag5669');return false;" class="tag-decoration">release-0.30.1</div><div id="tag11101" onclick="CopyToClipboard('tag11101');return false;" class="tag-decoration">release-v0</div><div id="tag15662" onclick="CopyToClipboard('tag15662');return false;" class="tag-decoration">release-v0.30</div><div id="tag6440" onclick="CopyToClipboard('tag6440');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/203417ba2ef146280b5620b2a68e302589ac9364" target="_blank">Version update: 0.30.1 => 0.30.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23201650964" target="_blank">2026-03-17 15:18:16</a></td></tr>
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
