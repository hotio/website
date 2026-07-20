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
<tr><td><div id="tag28665" onclick="CopyToClipboard('tag28665');return false;" class="tag-decoration">nightly</div><div id="tag23374" onclick="CopyToClipboard('tag23374');return false;" class="tag-decoration">nightly-02c9595</div><div id="tag8829" onclick="CopyToClipboard('tag8829');return false;" class="tag-decoration">nightly-c7d2fe4f97b99c6a2aac968ac8a2aad3adf5b800</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/02c9595053183a96c8d2226ffeeca1270aa647a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29681439543" target="_blank">2026-07-19 09:21:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19894" onclick="CopyToClipboard('tag19894');return false;" class="tag-decoration">release</div><div id="tag14640" onclick="CopyToClipboard('tag14640');return false;" class="tag-decoration">release-c92675d</div><div id="tag30285" onclick="CopyToClipboard('tag30285');return false;" class="tag-decoration">release-0.31.1</div><div id="tag30376" onclick="CopyToClipboard('tag30376');return false;" class="tag-decoration">release-v0</div><div id="tag15478" onclick="CopyToClipboard('tag15478');return false;" class="tag-decoration">release-v0.31</div><div id="tag24682" onclick="CopyToClipboard('tag24682');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/c92675df8df6c3ff4c9d5d69ee8e545a4461abdb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29778283627" target="_blank">2026-07-20 20:58:00</a></td></tr>
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
