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
<tr><td><div id="tag16592" onclick="CopyToClipboard('tag16592');return false;" class="tag-decoration">nightly</div><div id="tag9693" onclick="CopyToClipboard('tag9693');return false;" class="tag-decoration">nightly-f53e31b</div><div id="tag25500" onclick="CopyToClipboard('tag25500');return false;" class="tag-decoration">nightly-adac4ec1e5ad4f00841be369d113615fb7e5b7fb</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/f53e31b08c2bec82991988c0f01873f8e2641b1d" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/30087995089" target="_blank">2026-07-24 10:58:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26993" onclick="CopyToClipboard('tag26993');return false;" class="tag-decoration">release</div><div id="tag21728" onclick="CopyToClipboard('tag21728');return false;" class="tag-decoration">release-99f3ef6</div><div id="tag8166" onclick="CopyToClipboard('tag8166');return false;" class="tag-decoration">release-4.10.0</div><div id="tag14807" onclick="CopyToClipboard('tag14807');return false;" class="tag-decoration">release-v4</div><div id="tag29242" onclick="CopyToClipboard('tag29242');return false;" class="tag-decoration">release-v4.10</div><div id="tag21928" onclick="CopyToClipboard('tag21928');return false;" class="tag-decoration">release-v4.10.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/99f3ef6d114e0f3c162bccd4e51bb8b0226372b0" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29681307989" target="_blank">2026-07-19 09:17:13</a></td></tr>
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
