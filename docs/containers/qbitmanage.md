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
<tr><td><div id="tag4041" onclick="CopyToClipboard('tag4041');return false;" class="tag-decoration">nightly</div><div id="tag24471" onclick="CopyToClipboard('tag24471');return false;" class="tag-decoration">nightly-bfa6997</div><div id="tag7687" onclick="CopyToClipboard('tag7687');return false;" class="tag-decoration">nightly-3328d4ba2bda313fdb09267372514982a2ba2c97</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/bfa69978f13fd1ccfb853b091578e350d3de8aef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27109170979" target="_blank">2026-06-08 00:15:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11829" onclick="CopyToClipboard('tag11829');return false;" class="tag-decoration">release</div><div id="tag8831" onclick="CopyToClipboard('tag8831');return false;" class="tag-decoration">release-aea0dd1</div><div id="tag28570" onclick="CopyToClipboard('tag28570');return false;" class="tag-decoration">release-4.8.1</div><div id="tag23854" onclick="CopyToClipboard('tag23854');return false;" class="tag-decoration">release-v4</div><div id="tag1871" onclick="CopyToClipboard('tag1871');return false;" class="tag-decoration">release-v4.8</div><div id="tag22289" onclick="CopyToClipboard('tag22289');return false;" class="tag-decoration">release-v4.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/aea0dd1dbcaea05cd02a07eec639f1e48264fda9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27107409096" target="_blank">2026-06-07 22:59:26</a></td></tr>
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
