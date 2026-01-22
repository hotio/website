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
<tr><td><div id="tag29561" onclick="CopyToClipboard('tag29561');return false;" class="tag-decoration">nightly</div><div id="tag27219" onclick="CopyToClipboard('tag27219');return false;" class="tag-decoration">nightly-1ba79d4</div><div id="tag262" onclick="CopyToClipboard('tag262');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/1ba79d407f65a59f36664dadd95e04d9ebc6f55c" target="_blank">Upstream update: noblevpn-4c01d7f => noblevpn-6fa044b</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21237958260" target="_blank">2026-01-22 06:03:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21112" onclick="CopyToClipboard('tag21112');return false;" class="tag-decoration">release</div><div id="tag9246" onclick="CopyToClipboard('tag9246');return false;" class="tag-decoration">release-5d7fdf9</div><div id="tag6355" onclick="CopyToClipboard('tag6355');return false;" class="tag-decoration">release-0.30.1</div><div id="tag3736" onclick="CopyToClipboard('tag3736');return false;" class="tag-decoration">release-v0</div><div id="tag15751" onclick="CopyToClipboard('tag15751');return false;" class="tag-decoration">release-v0.30</div><div id="tag27159" onclick="CopyToClipboard('tag27159');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/5d7fdf94dc25a3d809dc767d6935eba0ffa9c92a" target="_blank">Upstream update: noblevpn-6fa044b => noblevpn-9c1903d</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21243877259" target="_blank">2026-01-22 09:52:20</a></td></tr>
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
