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
<tr><td><div id="tag12909" onclick="CopyToClipboard('tag12909');return false;" class="tag-decoration">nightly</div><div id="tag28141" onclick="CopyToClipboard('tag28141');return false;" class="tag-decoration">nightly-f1da675</div><div id="tag19420" onclick="CopyToClipboard('tag19420');return false;" class="tag-decoration">nightly-859c4851da7432324dc6386045563002b401f31f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/f1da675e6e53c0ce7d74b4a6a756138261c40728" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/44986038801" target="_blank">2026-11-22 04:39:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag944" onclick="CopyToClipboard('tag944');return false;" class="tag-decoration">release</div><div id="tag29787" onclick="CopyToClipboard('tag29787');return false;" class="tag-decoration">release-a123d8c</div><div id="tag18314" onclick="CopyToClipboard('tag18314');return false;" class="tag-decoration">release-4.15.0</div><div id="tag18251" onclick="CopyToClipboard('tag18251');return false;" class="tag-decoration">release-v4</div><div id="tag12298" onclick="CopyToClipboard('tag12298');return false;" class="tag-decoration">release-v4.15</div><div id="tag20910" onclick="CopyToClipboard('tag20910');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/a123d8c283ec21eb06905bb5b549a0cfae849969" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/44862490502" target="_blank">2026-11-21 03:42:21</a></td></tr>
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
