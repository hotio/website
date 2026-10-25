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
<tr><td><div id="tag17031" onclick="CopyToClipboard('tag17031');return false;" class="tag-decoration">nightly</div><div id="tag28722" onclick="CopyToClipboard('tag28722');return false;" class="tag-decoration">nightly-7630037</div><div id="tag14505" onclick="CopyToClipboard('tag14505');return false;" class="tag-decoration">nightly-ad15356946377624b4c4a238499df207f3ac6642</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/7630037ceb05f2f6c130102c5a357132d84d9096" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40147827083" target="_blank">2026-10-25 00:43:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8282" onclick="CopyToClipboard('tag8282');return false;" class="tag-decoration">release</div><div id="tag22994" onclick="CopyToClipboard('tag22994');return false;" class="tag-decoration">release-bf04fed</div><div id="tag6649" onclick="CopyToClipboard('tag6649');return false;" class="tag-decoration">release-4.14.0</div><div id="tag19378" onclick="CopyToClipboard('tag19378');return false;" class="tag-decoration">release-v4</div><div id="tag21191" onclick="CopyToClipboard('tag21191');return false;" class="tag-decoration">release-v4.14</div><div id="tag7814" onclick="CopyToClipboard('tag7814');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/bf04fedff64a4f6652bf6f97e5513f6a406b2dc9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40075697619" target="_blank">2026-10-24 07:50:10</a></td></tr>
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
