---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag17260" onclick="CopyToClipboard('tag17260');return false;" class="tag-decoration">nightly</div><div id="tag13500" onclick="CopyToClipboard('tag13500');return false;" class="tag-decoration">nightly-46a1414</div><div id="tag10185" onclick="CopyToClipboard('tag10185');return false;" class="tag-decoration">nightly-1cc308d5568b317ff6ec7cc65b09f8e91ba3f4c5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/46a1414b4eb68e5be35dad36c8ef4cb73f6ab2a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/43575926768" target="_blank">2026-11-14 08:27:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12477" onclick="CopyToClipboard('tag12477');return false;" class="tag-decoration">release</div><div id="tag3439" onclick="CopyToClipboard('tag3439');return false;" class="tag-decoration">release-eeb6a39</div><div id="tag5164" onclick="CopyToClipboard('tag5164');return false;" class="tag-decoration">release-4.15.0</div><div id="tag28157" onclick="CopyToClipboard('tag28157');return false;" class="tag-decoration">release-v4</div><div id="tag15619" onclick="CopyToClipboard('tag15619');return false;" class="tag-decoration">release-v4.15</div><div id="tag332" onclick="CopyToClipboard('tag332');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/eeb6a393e910ab298faac7b51f99dc3a9bacc13e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/42324503909" target="_blank">2026-11-07 01:31:14</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
