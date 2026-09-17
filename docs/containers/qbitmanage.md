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
<tr><td><div id="tag30238" onclick="CopyToClipboard('tag30238');return false;" class="tag-decoration">nightly</div><div id="tag16731" onclick="CopyToClipboard('tag16731');return false;" class="tag-decoration">nightly-13fcf56</div><div id="tag9319" onclick="CopyToClipboard('tag9319');return false;" class="tag-decoration">nightly-9a623a4be4152dd5308c2d725299d27fa4bf0187</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/13fcf5623f93767113d2e9917076c386ca4e790f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/35273306472" target="_blank">2026-09-17 20:51:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14343" onclick="CopyToClipboard('tag14343');return false;" class="tag-decoration">release</div><div id="tag26718" onclick="CopyToClipboard('tag26718');return false;" class="tag-decoration">release-a3ebba2</div><div id="tag30196" onclick="CopyToClipboard('tag30196');return false;" class="tag-decoration">release-4.13.0</div><div id="tag21316" onclick="CopyToClipboard('tag21316');return false;" class="tag-decoration">release-v4</div><div id="tag11235" onclick="CopyToClipboard('tag11235');return false;" class="tag-decoration">release-v4.13</div><div id="tag15878" onclick="CopyToClipboard('tag15878');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/a3ebba288c9fb955cbdddc0223a897b858d9b18a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/35253114114" target="_blank">2026-09-17 17:30:01</a></td></tr>
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
