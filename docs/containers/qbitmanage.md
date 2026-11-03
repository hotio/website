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
<tr><td><div id="tag22257" onclick="CopyToClipboard('tag22257');return false;" class="tag-decoration">nightly</div><div id="tag8013" onclick="CopyToClipboard('tag8013');return false;" class="tag-decoration">nightly-11ba10f</div><div id="tag18417" onclick="CopyToClipboard('tag18417');return false;" class="tag-decoration">nightly-33dc9455f34429673bdea593fdc97255db9f1a76</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/11ba10f9a8d24ca13c6b6a5adec419bd4e8312af" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/41552217549" target="_blank">2026-11-03 00:21:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6345" onclick="CopyToClipboard('tag6345');return false;" class="tag-decoration">release</div><div id="tag25385" onclick="CopyToClipboard('tag25385');return false;" class="tag-decoration">release-4a637c4</div><div id="tag19541" onclick="CopyToClipboard('tag19541');return false;" class="tag-decoration">release-4.14.0</div><div id="tag31524" onclick="CopyToClipboard('tag31524');return false;" class="tag-decoration">release-v4</div><div id="tag4758" onclick="CopyToClipboard('tag4758');return false;" class="tag-decoration">release-v4.14</div><div id="tag22774" onclick="CopyToClipboard('tag22774');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/4a637c4c7f21e8c5ae9888ecff020894cf67abf1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/41552214703" target="_blank">2026-11-03 00:21:00</a></td></tr>
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
