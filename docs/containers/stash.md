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
<tr><td><div id="tag23178" onclick="CopyToClipboard('tag23178');return false;" class="tag-decoration">nightly</div><div id="tag8395" onclick="CopyToClipboard('tag8395');return false;" class="tag-decoration">nightly-0b20edd</div><div id="tag21357" onclick="CopyToClipboard('tag21357');return false;" class="tag-decoration">nightly-db4eabea8148f002783c43792931137c7ec31375</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/0b20edd7a3d3000802b42970360b98dee6435092" target="_blank">Version update: 1ec5583931a7ce95a2b02b981c1dde728e43375a => db4eabea8148f002783c43792931137c7ec31375</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25293420719" target="_blank">2026-05-03 23:05:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11846" onclick="CopyToClipboard('tag11846');return false;" class="tag-decoration">release</div><div id="tag2062" onclick="CopyToClipboard('tag2062');return false;" class="tag-decoration">release-2cfa3ca</div><div id="tag24249" onclick="CopyToClipboard('tag24249');return false;" class="tag-decoration">release-0.31.1</div><div id="tag23211" onclick="CopyToClipboard('tag23211');return false;" class="tag-decoration">release-v0</div><div id="tag29477" onclick="CopyToClipboard('tag29477');return false;" class="tag-decoration">release-v0.31</div><div id="tag26465" onclick="CopyToClipboard('tag26465');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/2cfa3caf080c34572a6b0a3606135961f5e0e45a" target="_blank">Version update: 0.31.1 => 0.31.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24656406068" target="_blank">2026-04-20 08:28:37</a></td></tr>
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
