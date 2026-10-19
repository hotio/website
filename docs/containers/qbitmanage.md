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
<tr><td><div id="tag19495" onclick="CopyToClipboard('tag19495');return false;" class="tag-decoration">nightly</div><div id="tag7030" onclick="CopyToClipboard('tag7030');return false;" class="tag-decoration">nightly-f965c0e</div><div id="tag29060" onclick="CopyToClipboard('tag29060');return false;" class="tag-decoration">nightly-1ba3aa9506b6e051a65bd18d06ca9eb0e851e4f2</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/f965c0e0a23a80bca0e5a700c3c14fa7eaaa4551" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39300424318" target="_blank">2026-10-19 18:11:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19149" onclick="CopyToClipboard('tag19149');return false;" class="tag-decoration">release</div><div id="tag27537" onclick="CopyToClipboard('tag27537');return false;" class="tag-decoration">release-668d514</div><div id="tag96" onclick="CopyToClipboard('tag96');return false;" class="tag-decoration">release-4.14.0</div><div id="tag17503" onclick="CopyToClipboard('tag17503');return false;" class="tag-decoration">release-v4</div><div id="tag14230" onclick="CopyToClipboard('tag14230');return false;" class="tag-decoration">release-v4.14</div><div id="tag32476" onclick="CopyToClipboard('tag32476');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/668d5145c7ed1d0eea9ae4c8387eca3de71c78f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39135032543" target="_blank">2026-10-18 14:13:30</a></td></tr>
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
