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
<tr><td><div id="tag7590" onclick="CopyToClipboard('tag7590');return false;" class="tag-decoration">nightly</div><div id="tag21672" onclick="CopyToClipboard('tag21672');return false;" class="tag-decoration">nightly-8199a38</div><div id="tag27228" onclick="CopyToClipboard('tag27228');return false;" class="tag-decoration">nightly-944dd69436b7a944cd59e15871d31032fb3fa58a</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/8199a3890ff4e5526c997d4510c717d7925a3365" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/41559469739" target="_blank">2026-11-03 01:23:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12117" onclick="CopyToClipboard('tag12117');return false;" class="tag-decoration">release</div><div id="tag16527" onclick="CopyToClipboard('tag16527');return false;" class="tag-decoration">release-11f4b19</div><div id="tag31226" onclick="CopyToClipboard('tag31226');return false;" class="tag-decoration">release-0.32.0</div><div id="tag5936" onclick="CopyToClipboard('tag5936');return false;" class="tag-decoration">release-v0</div><div id="tag29403" onclick="CopyToClipboard('tag29403');return false;" class="tag-decoration">release-v0.32</div><div id="tag15883" onclick="CopyToClipboard('tag15883');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/11f4b196371cb4dca0e011f6a65f8ab8bf0abe93" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/41676709977" target="_blank">2026-11-03 16:41:06</a></td></tr>
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
