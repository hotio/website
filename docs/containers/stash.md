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
<tr><td><div id="tag16399" onclick="CopyToClipboard('tag16399');return false;" class="tag-decoration">nightly</div><div id="tag27459" onclick="CopyToClipboard('tag27459');return false;" class="tag-decoration">nightly-f00abbe</div><div id="tag1115" onclick="CopyToClipboard('tag1115');return false;" class="tag-decoration">nightly-adaadee368320897656cb1e2b2df01a0cb53c549</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/f00abbe1da9c904ae846ff4753b6bbfc7675b5c1" target="_blank">Upstream update: noblevpn-b1148ef => noblevpn-f921142</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22118133258" target="_blank">2026-02-17 22:24:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4738" onclick="CopyToClipboard('tag4738');return false;" class="tag-decoration">release</div><div id="tag17392" onclick="CopyToClipboard('tag17392');return false;" class="tag-decoration">release-6cc02ec</div><div id="tag9524" onclick="CopyToClipboard('tag9524');return false;" class="tag-decoration">release-0.30.1</div><div id="tag4535" onclick="CopyToClipboard('tag4535');return false;" class="tag-decoration">release-v0</div><div id="tag28936" onclick="CopyToClipboard('tag28936');return false;" class="tag-decoration">release-v0.30</div><div id="tag23648" onclick="CopyToClipboard('tag23648');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/6cc02ec5f24bf14d66e1c5d4b38cafb8905d15f7" target="_blank">Upstream update: noblevpn-b1148ef => noblevpn-f921142</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22118133620" target="_blank">2026-02-17 22:24:17</a></td></tr>
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
