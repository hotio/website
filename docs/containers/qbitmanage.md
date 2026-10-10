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
<tr><td><div id="tag2943" onclick="CopyToClipboard('tag2943');return false;" class="tag-decoration">nightly</div><div id="tag8100" onclick="CopyToClipboard('tag8100');return false;" class="tag-decoration">nightly-d65cd8c</div><div id="tag32466" onclick="CopyToClipboard('tag32466');return false;" class="tag-decoration">nightly-17a5ac431599d77bb905a6ea0cd4d93ab8c75e5b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/d65cd8c5e26016226573a1ac119e882ba95ddd2d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/38090351354" target="_blank">2026-10-10 22:09:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3800" onclick="CopyToClipboard('tag3800');return false;" class="tag-decoration">release</div><div id="tag31447" onclick="CopyToClipboard('tag31447');return false;" class="tag-decoration">release-d8ab7f6</div><div id="tag6840" onclick="CopyToClipboard('tag6840');return false;" class="tag-decoration">release-4.13.0</div><div id="tag3585" onclick="CopyToClipboard('tag3585');return false;" class="tag-decoration">release-v4</div><div id="tag2087" onclick="CopyToClipboard('tag2087');return false;" class="tag-decoration">release-v4.13</div><div id="tag30038" onclick="CopyToClipboard('tag30038');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/d8ab7f65fc441f9879a9ed0f272cb80b76728bec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/37559729935" target="_blank">2026-10-07 01:58:39</a></td></tr>
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
