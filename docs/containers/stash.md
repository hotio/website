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
<tr><td><div id="tag1098" onclick="CopyToClipboard('tag1098');return false;" class="tag-decoration">nightly</div><div id="tag6987" onclick="CopyToClipboard('tag6987');return false;" class="tag-decoration">nightly-8e9c8b5</div><div id="tag12661" onclick="CopyToClipboard('tag12661');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/8e9c8b5e9cc460535138c05b68a1da1741ce9d5d" target="_blank">Upstream update: noblevpn-b3fe625 => noblevpn-7d9e72c</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21065744719" target="_blank">2026-01-16 11:53:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14724" onclick="CopyToClipboard('tag14724');return false;" class="tag-decoration">release</div><div id="tag21859" onclick="CopyToClipboard('tag21859');return false;" class="tag-decoration">release-9c5bbb4</div><div id="tag13735" onclick="CopyToClipboard('tag13735');return false;" class="tag-decoration">release-0.30.1</div><div id="tag23303" onclick="CopyToClipboard('tag23303');return false;" class="tag-decoration">release-v0</div><div id="tag18159" onclick="CopyToClipboard('tag18159');return false;" class="tag-decoration">release-v0.30</div><div id="tag17235" onclick="CopyToClipboard('tag17235');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/9c5bbb4de97c42402c63d6fa01f316ba59b9b92b" target="_blank">Upstream update: noblevpn-311995b => noblevpn-b3fe625</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21064912855" target="_blank">2026-01-16 11:19:06</a></td></tr>
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
