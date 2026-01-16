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
<tr><td><div id="tag15146" onclick="CopyToClipboard('tag15146');return false;" class="tag-decoration">nightly</div><div id="tag24069" onclick="CopyToClipboard('tag24069');return false;" class="tag-decoration">nightly-944d279</div><div id="tag4683" onclick="CopyToClipboard('tag4683');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/944d279d2ac76368e346696cd7a8b9e445f9d89e" target="_blank">Upstream update: noblevpn-311995b => noblevpn-b3fe625</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21064912425" target="_blank">2026-01-16 11:19:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24290" onclick="CopyToClipboard('tag24290');return false;" class="tag-decoration">release</div><div id="tag31072" onclick="CopyToClipboard('tag31072');return false;" class="tag-decoration">release-591da5a</div><div id="tag21494" onclick="CopyToClipboard('tag21494');return false;" class="tag-decoration">release-0.30.1</div><div id="tag14094" onclick="CopyToClipboard('tag14094');return false;" class="tag-decoration">release-v0</div><div id="tag20066" onclick="CopyToClipboard('tag20066');return false;" class="tag-decoration">release-v0.30</div><div id="tag3113" onclick="CopyToClipboard('tag3113');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/591da5a0b59b40e3776193767239e0ef855605bb" target="_blank">Upstream update: noblevpn-ea653c4 => noblevpn-311995b</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21063305948" target="_blank">2026-01-16 10:18:09</a></td></tr>
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
