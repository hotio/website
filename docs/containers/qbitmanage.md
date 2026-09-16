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
<tr><td><div id="tag8913" onclick="CopyToClipboard('tag8913');return false;" class="tag-decoration">nightly</div><div id="tag20142" onclick="CopyToClipboard('tag20142');return false;" class="tag-decoration">nightly-eeb87b3</div><div id="tag19213" onclick="CopyToClipboard('tag19213');return false;" class="tag-decoration">nightly-9a623a4be4152dd5308c2d725299d27fa4bf0187</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/eeb87b325c160d370841609f153bb44dd97eebbd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/35158343983" target="_blank">2026-09-16 22:34:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18186" onclick="CopyToClipboard('tag18186');return false;" class="tag-decoration">release</div><div id="tag16634" onclick="CopyToClipboard('tag16634');return false;" class="tag-decoration">release-1fa6f5f</div><div id="tag5161" onclick="CopyToClipboard('tag5161');return false;" class="tag-decoration">release-4.13.0</div><div id="tag7442" onclick="CopyToClipboard('tag7442');return false;" class="tag-decoration">release-v4</div><div id="tag30157" onclick="CopyToClipboard('tag30157');return false;" class="tag-decoration">release-v4.13</div><div id="tag23431" onclick="CopyToClipboard('tag23431');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/1fa6f5f5403fdbe14e044568331bbb4acb09301c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/34960235329" target="_blank">2026-09-15 10:52:01</a></td></tr>
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
