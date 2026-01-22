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
<tr><td><div id="tag15777" onclick="CopyToClipboard('tag15777');return false;" class="tag-decoration">nightly</div><div id="tag4387" onclick="CopyToClipboard('tag4387');return false;" class="tag-decoration">nightly-e97e3b3</div><div id="tag16230" onclick="CopyToClipboard('tag16230');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e97e3b3acc446df36202506591ecd7339e29959d" target="_blank">Upstream update: noblevpn-021f848 => noblevpn-2aef811</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21246777893" target="_blank">2026-01-22 11:29:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2671" onclick="CopyToClipboard('tag2671');return false;" class="tag-decoration">release</div><div id="tag6549" onclick="CopyToClipboard('tag6549');return false;" class="tag-decoration">release-9fd6d85</div><div id="tag5067" onclick="CopyToClipboard('tag5067');return false;" class="tag-decoration">release-0.30.1</div><div id="tag16556" onclick="CopyToClipboard('tag16556');return false;" class="tag-decoration">release-v0</div><div id="tag11985" onclick="CopyToClipboard('tag11985');return false;" class="tag-decoration">release-v0.30</div><div id="tag29268" onclick="CopyToClipboard('tag29268');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/9fd6d85c5aa02dfdc29a5b9e7cbe190a44a354c0" target="_blank">Upstream update: noblevpn-9c1903d => noblevpn-021f848</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21244731383" target="_blank">2026-01-22 10:20:12</a></td></tr>
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
