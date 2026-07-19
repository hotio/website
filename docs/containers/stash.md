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
<tr><td><div id="tag695" onclick="CopyToClipboard('tag695');return false;" class="tag-decoration">nightly</div><div id="tag29095" onclick="CopyToClipboard('tag29095');return false;" class="tag-decoration">nightly-02c9595</div><div id="tag25489" onclick="CopyToClipboard('tag25489');return false;" class="tag-decoration">nightly-c7d2fe4f97b99c6a2aac968ac8a2aad3adf5b800</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/02c9595053183a96c8d2226ffeeca1270aa647a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29681439543" target="_blank">2026-07-19 09:21:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10776" onclick="CopyToClipboard('tag10776');return false;" class="tag-decoration">release</div><div id="tag14260" onclick="CopyToClipboard('tag14260');return false;" class="tag-decoration">release-f200cc0</div><div id="tag15701" onclick="CopyToClipboard('tag15701');return false;" class="tag-decoration">release-0.31.1</div><div id="tag13154" onclick="CopyToClipboard('tag13154');return false;" class="tag-decoration">release-v0</div><div id="tag26416" onclick="CopyToClipboard('tag26416');return false;" class="tag-decoration">release-v0.31</div><div id="tag11883" onclick="CopyToClipboard('tag11883');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/f200cc0b17244b4ad05b29b602f939770a75f3c0" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29681428854" target="_blank">2026-07-19 09:21:22</a></td></tr>
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
