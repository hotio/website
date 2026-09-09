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
<tr><td><div id="tag29450" onclick="CopyToClipboard('tag29450');return false;" class="tag-decoration">nightly</div><div id="tag21093" onclick="CopyToClipboard('tag21093');return false;" class="tag-decoration">nightly-0e32b12</div><div id="tag17680" onclick="CopyToClipboard('tag17680');return false;" class="tag-decoration">nightly-ebe326a25e0f0653e83e3d613af34447e232cbfe</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/0e32b1225817afa4d24c526061535b4087bc23e4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/34366435110" target="_blank">2026-09-09 14:51:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24846" onclick="CopyToClipboard('tag24846');return false;" class="tag-decoration">release</div><div id="tag4762" onclick="CopyToClipboard('tag4762');return false;" class="tag-decoration">release-b374cab</div><div id="tag19431" onclick="CopyToClipboard('tag19431');return false;" class="tag-decoration">release-0.31.1</div><div id="tag30960" onclick="CopyToClipboard('tag30960');return false;" class="tag-decoration">release-v0</div><div id="tag24534" onclick="CopyToClipboard('tag24534');return false;" class="tag-decoration">release-v0.31</div><div id="tag11008" onclick="CopyToClipboard('tag11008');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/b374cab937983715e8887f1a4888fa3f8bd07739" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/34366422110" target="_blank">2026-09-09 14:51:47</a></td></tr>
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
