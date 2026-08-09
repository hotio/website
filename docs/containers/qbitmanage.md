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
<tr><td><div id="tag23913" onclick="CopyToClipboard('tag23913');return false;" class="tag-decoration">nightly</div><div id="tag1564" onclick="CopyToClipboard('tag1564');return false;" class="tag-decoration">nightly-6bd18d9</div><div id="tag19858" onclick="CopyToClipboard('tag19858');return false;" class="tag-decoration">nightly-c936842a50a70f023ec205c2a5b9b9ee1b8ad992</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/6bd18d9004b56a3e4e2af86f13a08d2ef8a23684" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/31336777660" target="_blank">2026-08-09 21:25:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4859" onclick="CopyToClipboard('tag4859');return false;" class="tag-decoration">release</div><div id="tag27937" onclick="CopyToClipboard('tag27937');return false;" class="tag-decoration">release-34a9065</div><div id="tag19983" onclick="CopyToClipboard('tag19983');return false;" class="tag-decoration">release-4.11.0</div><div id="tag32478" onclick="CopyToClipboard('tag32478');return false;" class="tag-decoration">release-v4</div><div id="tag14535" onclick="CopyToClipboard('tag14535');return false;" class="tag-decoration">release-v4.11</div><div id="tag6155" onclick="CopyToClipboard('tag6155');return false;" class="tag-decoration">release-v4.11.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/34a9065dcdfa7ec59b5f2f49d5df0f265225371c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/30376288793" target="_blank">2026-07-28 16:01:55</a></td></tr>
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
