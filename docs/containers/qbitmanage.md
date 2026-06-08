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
<tr><td><div id="tag32596" onclick="CopyToClipboard('tag32596');return false;" class="tag-decoration">nightly</div><div id="tag19736" onclick="CopyToClipboard('tag19736');return false;" class="tag-decoration">nightly-535b52b</div><div id="tag29846" onclick="CopyToClipboard('tag29846');return false;" class="tag-decoration">nightly-20efe913e968e8a9857e03f9b634e2331010f149</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/535b52bc4db0b222e380808d1c9d8f028656bfce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27117857083" target="_blank">2026-06-08 05:26:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14314" onclick="CopyToClipboard('tag14314');return false;" class="tag-decoration">release</div><div id="tag32439" onclick="CopyToClipboard('tag32439');return false;" class="tag-decoration">release-aea0dd1</div><div id="tag14466" onclick="CopyToClipboard('tag14466');return false;" class="tag-decoration">release-4.8.1</div><div id="tag5362" onclick="CopyToClipboard('tag5362');return false;" class="tag-decoration">release-v4</div><div id="tag28355" onclick="CopyToClipboard('tag28355');return false;" class="tag-decoration">release-v4.8</div><div id="tag15002" onclick="CopyToClipboard('tag15002');return false;" class="tag-decoration">release-v4.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/aea0dd1dbcaea05cd02a07eec639f1e48264fda9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27107409096" target="_blank">2026-06-07 22:59:26</a></td></tr>
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
