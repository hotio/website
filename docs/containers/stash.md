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
<tr><td><div id="tag26579" onclick="CopyToClipboard('tag26579');return false;" class="tag-decoration">nightly</div><div id="tag27844" onclick="CopyToClipboard('tag27844');return false;" class="tag-decoration">nightly-982dfd1</div><div id="tag31094" onclick="CopyToClipboard('tag31094');return false;" class="tag-decoration">nightly-d7147b59a663bb2d94a18df3d5e0990bfa578f41</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/982dfd143c86885f3705edc5e26757814ec7afb1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/36894364842" target="_blank">2026-10-01 16:45:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24049" onclick="CopyToClipboard('tag24049');return false;" class="tag-decoration">release</div><div id="tag14823" onclick="CopyToClipboard('tag14823');return false;" class="tag-decoration">release-6b29b60</div><div id="tag16085" onclick="CopyToClipboard('tag16085');return false;" class="tag-decoration">release-0.31.1</div><div id="tag15659" onclick="CopyToClipboard('tag15659');return false;" class="tag-decoration">release-v0</div><div id="tag31093" onclick="CopyToClipboard('tag31093');return false;" class="tag-decoration">release-v0.31</div><div id="tag5867" onclick="CopyToClipboard('tag5867');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/6b29b60590be8023b34a46ddb314c8f91ba0cce6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/36641610040" target="_blank">2026-09-29 22:47:15</a></td></tr>
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
