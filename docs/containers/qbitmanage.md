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
<tr><td><div id="tag3781" onclick="CopyToClipboard('tag3781');return false;" class="tag-decoration">nightly</div><div id="tag6945" onclick="CopyToClipboard('tag6945');return false;" class="tag-decoration">nightly-461eadf</div><div id="tag6016" onclick="CopyToClipboard('tag6016');return false;" class="tag-decoration">nightly-0fba8dc202cbc34b0455f2e1b77f769b8fbef644</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/461eadf30e1810e415b74e44edc7ea541dbcd28e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28279005787" target="_blank">2026-06-27 04:47:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19223" onclick="CopyToClipboard('tag19223');return false;" class="tag-decoration">release</div><div id="tag28284" onclick="CopyToClipboard('tag28284');return false;" class="tag-decoration">release-391d3af</div><div id="tag20582" onclick="CopyToClipboard('tag20582');return false;" class="tag-decoration">release-4.8.1</div><div id="tag24708" onclick="CopyToClipboard('tag24708');return false;" class="tag-decoration">release-v4</div><div id="tag21959" onclick="CopyToClipboard('tag21959');return false;" class="tag-decoration">release-v4.8</div><div id="tag10145" onclick="CopyToClipboard('tag10145');return false;" class="tag-decoration">release-v4.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/391d3aff6d1abc73e7b492063c1b4ffd298d7ba8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27986836962" target="_blank">2026-06-22 21:58:48</a></td></tr>
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
