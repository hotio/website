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
<tr><td><div id="tag17521" onclick="CopyToClipboard('tag17521');return false;" class="tag-decoration">nightly</div><div id="tag19521" onclick="CopyToClipboard('tag19521');return false;" class="tag-decoration">nightly-9c7b088</div><div id="tag1208" onclick="CopyToClipboard('tag1208');return false;" class="tag-decoration">nightly-da6507869501a4ee81e39d8b215bbbc5417ffb80</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/9c7b088b5f28378ff53dc26f1eeb34cad4d576a2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/35937631963" target="_blank">2026-09-24 00:15:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13628" onclick="CopyToClipboard('tag13628');return false;" class="tag-decoration">release</div><div id="tag25241" onclick="CopyToClipboard('tag25241');return false;" class="tag-decoration">release-2c253b8</div><div id="tag8541" onclick="CopyToClipboard('tag8541');return false;" class="tag-decoration">release-4.13.0</div><div id="tag22333" onclick="CopyToClipboard('tag22333');return false;" class="tag-decoration">release-v4</div><div id="tag30872" onclick="CopyToClipboard('tag30872');return false;" class="tag-decoration">release-v4.13</div><div id="tag32220" onclick="CopyToClipboard('tag32220');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/2c253b8532124c14f899c528d27d922cd1baaef7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/35937630113" target="_blank">2026-09-24 00:15:57</a></td></tr>
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
