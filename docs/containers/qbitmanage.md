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
<tr><td><div id="tag3659" onclick="CopyToClipboard('tag3659');return false;" class="tag-decoration">nightly</div><div id="tag5373" onclick="CopyToClipboard('tag5373');return false;" class="tag-decoration">nightly-b983c22</div><div id="tag27082" onclick="CopyToClipboard('tag27082');return false;" class="tag-decoration">nightly-b4898667476dc966d10af1d4091707c446746e01</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/b983c22646432b2e79a4e302ed3ce2decf716522" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40260755877" target="_blank">2026-10-26 02:46:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21003" onclick="CopyToClipboard('tag21003');return false;" class="tag-decoration">release</div><div id="tag841" onclick="CopyToClipboard('tag841');return false;" class="tag-decoration">release-f3c36c0</div><div id="tag2382" onclick="CopyToClipboard('tag2382');return false;" class="tag-decoration">release-4.14.0</div><div id="tag4636" onclick="CopyToClipboard('tag4636');return false;" class="tag-decoration">release-v4</div><div id="tag24837" onclick="CopyToClipboard('tag24837');return false;" class="tag-decoration">release-v4.14</div><div id="tag2953" onclick="CopyToClipboard('tag2953');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/f3c36c0b09950ce79a0cd91cdef50cd43ffbe181" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40219286559" target="_blank">2026-10-25 18:01:46</a></td></tr>
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
