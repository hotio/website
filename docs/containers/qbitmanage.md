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
<tr><td><div id="tag2402" onclick="CopyToClipboard('tag2402');return false;" class="tag-decoration">nightly</div><div id="tag12290" onclick="CopyToClipboard('tag12290');return false;" class="tag-decoration">nightly-8662bdb</div><div id="tag16257" onclick="CopyToClipboard('tag16257');return false;" class="tag-decoration">nightly-6713131922c58e225f70a4a7920e46940e5a0c7f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/8662bdb5824ba9019ef7d180104005a282610ae0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/32654240297" target="_blank">2026-08-23 17:15:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15838" onclick="CopyToClipboard('tag15838');return false;" class="tag-decoration">release</div><div id="tag10889" onclick="CopyToClipboard('tag10889');return false;" class="tag-decoration">release-8ed3560</div><div id="tag23254" onclick="CopyToClipboard('tag23254');return false;" class="tag-decoration">release-4.12.0</div><div id="tag10888" onclick="CopyToClipboard('tag10888');return false;" class="tag-decoration">release-v4</div><div id="tag21449" onclick="CopyToClipboard('tag21449');return false;" class="tag-decoration">release-v4.12</div><div id="tag17004" onclick="CopyToClipboard('tag17004');return false;" class="tag-decoration">release-v4.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/8ed35601d4180ac4279f7dc5dd715951f6d6114f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/32323927047" target="_blank">2026-08-20 02:14:21</a></td></tr>
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
