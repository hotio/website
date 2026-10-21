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
<tr><td><div id="tag5811" onclick="CopyToClipboard('tag5811');return false;" class="tag-decoration">nightly</div><div id="tag7721" onclick="CopyToClipboard('tag7721');return false;" class="tag-decoration">nightly-81ff74f</div><div id="tag20509" onclick="CopyToClipboard('tag20509');return false;" class="tag-decoration">nightly-bfb9cf646668a07e7fcab32fb2e6038858d4b0f8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/81ff74fdbf0274688e715d6ca6ca52a67e958328" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39676173938" target="_blank">2026-10-21 21:07:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13092" onclick="CopyToClipboard('tag13092');return false;" class="tag-decoration">release</div><div id="tag30956" onclick="CopyToClipboard('tag30956');return false;" class="tag-decoration">release-a65e0b0</div><div id="tag13747" onclick="CopyToClipboard('tag13747');return false;" class="tag-decoration">release-4.14.0</div><div id="tag9454" onclick="CopyToClipboard('tag9454');return false;" class="tag-decoration">release-v4</div><div id="tag4514" onclick="CopyToClipboard('tag4514');return false;" class="tag-decoration">release-v4.14</div><div id="tag10825" onclick="CopyToClipboard('tag10825');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/a65e0b0dd3feb39487a6922d39e022d74f802a7f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39647200300" target="_blank">2026-10-21 17:49:21</a></td></tr>
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
