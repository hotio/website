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
<tr><td><div id="tag31827" onclick="CopyToClipboard('tag31827');return false;" class="tag-decoration">nightly</div><div id="tag5491" onclick="CopyToClipboard('tag5491');return false;" class="tag-decoration">nightly-73e7974</div><div id="tag8128" onclick="CopyToClipboard('tag8128');return false;" class="tag-decoration">nightly-9a1b1fb7187eb6f2fdaffd6df777a75ff470b7ea</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/73e79746f6298f03698f1446c01519d4ba857aa4" target="_blank">Version update: 47dcdd439cea335d80025c56e2ccc9f415a41a2c => 9a1b1fb7187eb6f2fdaffd6df777a75ff470b7ea</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22291653716" target="_blank">2026-02-23 03:15:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18965" onclick="CopyToClipboard('tag18965');return false;" class="tag-decoration">release</div><div id="tag22256" onclick="CopyToClipboard('tag22256');return false;" class="tag-decoration">release-6cc02ec</div><div id="tag25375" onclick="CopyToClipboard('tag25375');return false;" class="tag-decoration">release-0.30.1</div><div id="tag28331" onclick="CopyToClipboard('tag28331');return false;" class="tag-decoration">release-v0</div><div id="tag21179" onclick="CopyToClipboard('tag21179');return false;" class="tag-decoration">release-v0.30</div><div id="tag8695" onclick="CopyToClipboard('tag8695');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/6cc02ec5f24bf14d66e1c5d4b38cafb8905d15f7" target="_blank">Upstream update: noblevpn-b1148ef => noblevpn-f921142</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22118133620" target="_blank">2026-02-17 22:24:17</a></td></tr>
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
