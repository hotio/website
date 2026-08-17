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
<tr><td><div id="tag5058" onclick="CopyToClipboard('tag5058');return false;" class="tag-decoration">nightly</div><div id="tag20503" onclick="CopyToClipboard('tag20503');return false;" class="tag-decoration">nightly-0664913</div><div id="tag30927" onclick="CopyToClipboard('tag30927');return false;" class="tag-decoration">nightly-4c3d3a90f35c1656b89c4f3f13fc3e03b8431800</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/0664913cde0fc93b6a660378970bdb7bbe9dac2f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/32074871994" target="_blank">2026-08-17 22:11:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2958" onclick="CopyToClipboard('tag2958');return false;" class="tag-decoration">release</div><div id="tag26377" onclick="CopyToClipboard('tag26377');return false;" class="tag-decoration">release-0863e0b</div><div id="tag32240" onclick="CopyToClipboard('tag32240');return false;" class="tag-decoration">release-0.31.1</div><div id="tag7557" onclick="CopyToClipboard('tag7557');return false;" class="tag-decoration">release-v0</div><div id="tag31923" onclick="CopyToClipboard('tag31923');return false;" class="tag-decoration">release-v0.31</div><div id="tag3909" onclick="CopyToClipboard('tag3909');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/0863e0b1bda10265ea96449de52be01ff3293fe3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/31772824181" target="_blank">2026-08-14 05:23:02</a></td></tr>
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
