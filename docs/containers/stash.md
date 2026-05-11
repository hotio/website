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
<tr><td><div id="tag32011" onclick="CopyToClipboard('tag32011');return false;" class="tag-decoration">nightly</div><div id="tag30991" onclick="CopyToClipboard('tag30991');return false;" class="tag-decoration">nightly-1b6ad2e</div><div id="tag16197" onclick="CopyToClipboard('tag16197');return false;" class="tag-decoration">nightly-01a7583364b97478dd582826fdfe9bff96c0ce97</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/1b6ad2e6cf5067d661d47fa49edc7c0e02f5d800" target="_blank">Upstream update: noblevpn-72951af => noblevpn-3725bcf</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25664529651" target="_blank">2026-05-11 10:25:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21314" onclick="CopyToClipboard('tag21314');return false;" class="tag-decoration">release</div><div id="tag23512" onclick="CopyToClipboard('tag23512');return false;" class="tag-decoration">release-e7752d6</div><div id="tag8775" onclick="CopyToClipboard('tag8775');return false;" class="tag-decoration">release-0.31.1</div><div id="tag19445" onclick="CopyToClipboard('tag19445');return false;" class="tag-decoration">release-v0</div><div id="tag31253" onclick="CopyToClipboard('tag31253');return false;" class="tag-decoration">release-v0.31</div><div id="tag24316" onclick="CopyToClipboard('tag24316');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e7752d63ac9b589c51dcf2bbe144decc0c312d13" target="_blank">Upstream update: noblevpn-441eaee => noblevpn-72951af</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25605065334" target="_blank">2026-05-09 15:44:19</a></td></tr>
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
