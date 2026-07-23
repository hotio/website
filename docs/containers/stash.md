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
<tr><td><div id="tag8631" onclick="CopyToClipboard('tag8631');return false;" class="tag-decoration">nightly</div><div id="tag5938" onclick="CopyToClipboard('tag5938');return false;" class="tag-decoration">nightly-a891f36</div><div id="tag17905" onclick="CopyToClipboard('tag17905');return false;" class="tag-decoration">nightly-62e96f28259a038df576ed759a6849e593d38f7f</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/a891f368b638781207f97abe578897e2a0b59345" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30032229561" target="_blank">2026-07-23 18:05:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2950" onclick="CopyToClipboard('tag2950');return false;" class="tag-decoration">release</div><div id="tag21443" onclick="CopyToClipboard('tag21443');return false;" class="tag-decoration">release-ce64161</div><div id="tag1155" onclick="CopyToClipboard('tag1155');return false;" class="tag-decoration">release-0.31.1</div><div id="tag2192" onclick="CopyToClipboard('tag2192');return false;" class="tag-decoration">release-v0</div><div id="tag19344" onclick="CopyToClipboard('tag19344');return false;" class="tag-decoration">release-v0.31</div><div id="tag25928" onclick="CopyToClipboard('tag25928');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/ce64161beae8d90485bbc9e9e12f040ed82702e8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30032241699" target="_blank">2026-07-23 18:05:43</a></td></tr>
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
