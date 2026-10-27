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
<tr><td><div id="tag15341" onclick="CopyToClipboard('tag15341');return false;" class="tag-decoration">nightly</div><div id="tag18589" onclick="CopyToClipboard('tag18589');return false;" class="tag-decoration">nightly-9de81c7</div><div id="tag3945" onclick="CopyToClipboard('tag3945');return false;" class="tag-decoration">nightly-5247e059817ae3283aeeb7c2e41f07c24360c7d9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/9de81c704a71c516c29d82789b1df0adab6f49b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40589001653" target="_blank">2026-10-27 21:42:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5" onclick="CopyToClipboard('tag5');return false;" class="tag-decoration">release</div><div id="tag28798" onclick="CopyToClipboard('tag28798');return false;" class="tag-decoration">release-27e72bf</div><div id="tag22738" onclick="CopyToClipboard('tag22738');return false;" class="tag-decoration">release-4.14.0</div><div id="tag11985" onclick="CopyToClipboard('tag11985');return false;" class="tag-decoration">release-v4</div><div id="tag31541" onclick="CopyToClipboard('tag31541');return false;" class="tag-decoration">release-v4.14</div><div id="tag9759" onclick="CopyToClipboard('tag9759');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/27e72bf0100a7b0c0e4dfebf0229e80cc273a7b4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40548804495" target="_blank">2026-10-27 17:15:08</a></td></tr>
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
