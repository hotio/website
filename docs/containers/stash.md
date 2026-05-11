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
<tr><td><div id="tag9239" onclick="CopyToClipboard('tag9239');return false;" class="tag-decoration">nightly</div><div id="tag29003" onclick="CopyToClipboard('tag29003');return false;" class="tag-decoration">nightly-d0c3a63</div><div id="tag9838" onclick="CopyToClipboard('tag9838');return false;" class="tag-decoration">nightly-01a7583364b97478dd582826fdfe9bff96c0ce97</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/d0c3a63713eba018a639cbf679d01951c6135307" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25700652278" target="_blank">2026-05-11 22:19:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12349" onclick="CopyToClipboard('tag12349');return false;" class="tag-decoration">release</div><div id="tag10159" onclick="CopyToClipboard('tag10159');return false;" class="tag-decoration">release-e3abd52</div><div id="tag20042" onclick="CopyToClipboard('tag20042');return false;" class="tag-decoration">release-0.31.1</div><div id="tag27800" onclick="CopyToClipboard('tag27800');return false;" class="tag-decoration">release-v0</div><div id="tag1698" onclick="CopyToClipboard('tag1698');return false;" class="tag-decoration">release-v0.31</div><div id="tag12850" onclick="CopyToClipboard('tag12850');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e3abd52e2b8ea18507d4009342a643ec7184999f" target="_blank">Upstream update: noblevpn-72951af => noblevpn-3725bcf</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25664531036" target="_blank">2026-05-11 10:25:05</a></td></tr>
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
