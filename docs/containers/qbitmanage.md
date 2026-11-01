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
<tr><td><div id="tag3135" onclick="CopyToClipboard('tag3135');return false;" class="tag-decoration">nightly</div><div id="tag14932" onclick="CopyToClipboard('tag14932');return false;" class="tag-decoration">nightly-dcaa361</div><div id="tag21239" onclick="CopyToClipboard('tag21239');return false;" class="tag-decoration">nightly-fcad21ca39208a5e76a4075869241f896afd2b3f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/dcaa361fd544edf53b4971e2ff565acea75d8a21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/41262450869" target="_blank">2026-11-01 01:46:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12419" onclick="CopyToClipboard('tag12419');return false;" class="tag-decoration">release</div><div id="tag32525" onclick="CopyToClipboard('tag32525');return false;" class="tag-decoration">release-db7da57</div><div id="tag30667" onclick="CopyToClipboard('tag30667');return false;" class="tag-decoration">release-4.14.0</div><div id="tag30118" onclick="CopyToClipboard('tag30118');return false;" class="tag-decoration">release-v4</div><div id="tag25015" onclick="CopyToClipboard('tag25015');return false;" class="tag-decoration">release-v4.14</div><div id="tag21900" onclick="CopyToClipboard('tag21900');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/db7da57b3abb442b6a18cfb000a518ba54eda34c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40589007427" target="_blank">2026-10-27 21:42:23</a></td></tr>
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
