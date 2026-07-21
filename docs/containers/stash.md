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
<tr><td><div id="tag24475" onclick="CopyToClipboard('tag24475');return false;" class="tag-decoration">nightly</div><div id="tag29422" onclick="CopyToClipboard('tag29422');return false;" class="tag-decoration">nightly-6e2ba51</div><div id="tag22041" onclick="CopyToClipboard('tag22041');return false;" class="tag-decoration">nightly-634f567e3edbe9e4fd27939fcd8d7cea1e41a7ed</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/6e2ba51b9e4c1ced597d606740ac9a1672137826" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29821283793" target="_blank">2026-07-21 10:11:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3567" onclick="CopyToClipboard('tag3567');return false;" class="tag-decoration">release</div><div id="tag5890" onclick="CopyToClipboard('tag5890');return false;" class="tag-decoration">release-a83e14b</div><div id="tag190" onclick="CopyToClipboard('tag190');return false;" class="tag-decoration">release-0.31.1</div><div id="tag25181" onclick="CopyToClipboard('tag25181');return false;" class="tag-decoration">release-v0</div><div id="tag20486" onclick="CopyToClipboard('tag20486');return false;" class="tag-decoration">release-v0.31</div><div id="tag6721" onclick="CopyToClipboard('tag6721');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/a83e14bb3455d9386c367a26bd6f9fa05d0c9fdd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29782187969" target="_blank">2026-07-20 21:57:47</a></td></tr>
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
