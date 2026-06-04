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
<tr><td><div id="tag32191" onclick="CopyToClipboard('tag32191');return false;" class="tag-decoration">nightly</div><div id="tag7348" onclick="CopyToClipboard('tag7348');return false;" class="tag-decoration">nightly-2c7da06</div><div id="tag16299" onclick="CopyToClipboard('tag16299');return false;" class="tag-decoration">nightly-b8c17f780f33580b267d1633d2b4a9b12a5dd150</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/2c7da063dee03b795315fbdd08a16b014809e0b7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26932877897" target="_blank">2026-06-04 05:31:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18955" onclick="CopyToClipboard('tag18955');return false;" class="tag-decoration">release</div><div id="tag6257" onclick="CopyToClipboard('tag6257');return false;" class="tag-decoration">release-e43ab28</div><div id="tag29288" onclick="CopyToClipboard('tag29288');return false;" class="tag-decoration">release-0.31.1</div><div id="tag892" onclick="CopyToClipboard('tag892');return false;" class="tag-decoration">release-v0</div><div id="tag25767" onclick="CopyToClipboard('tag25767');return false;" class="tag-decoration">release-v0.31</div><div id="tag29055" onclick="CopyToClipboard('tag29055');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e43ab28939012b053d0c77c4a48aa5471025d55e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26838580421" target="_blank">2026-06-02 18:03:43</a></td></tr>
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
