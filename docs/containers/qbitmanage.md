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
<tr><td><div id="tag20394" onclick="CopyToClipboard('tag20394');return false;" class="tag-decoration">nightly</div><div id="tag16093" onclick="CopyToClipboard('tag16093');return false;" class="tag-decoration">nightly-a645ab7</div><div id="tag7453" onclick="CopyToClipboard('tag7453');return false;" class="tag-decoration">nightly-bd391a1445616e11c0b7bb6c10ed5fbebea09f83</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/a645ab74c7ad727e118401c06477bc8049d75895" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/31874224836" target="_blank">2026-08-15 08:20:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3152" onclick="CopyToClipboard('tag3152');return false;" class="tag-decoration">release</div><div id="tag7411" onclick="CopyToClipboard('tag7411');return false;" class="tag-decoration">release-46741e2</div><div id="tag3557" onclick="CopyToClipboard('tag3557');return false;" class="tag-decoration">release-4.11.0</div><div id="tag6365" onclick="CopyToClipboard('tag6365');return false;" class="tag-decoration">release-v4</div><div id="tag9483" onclick="CopyToClipboard('tag9483');return false;" class="tag-decoration">release-v4.11</div><div id="tag13634" onclick="CopyToClipboard('tag13634');return false;" class="tag-decoration">release-v4.11.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/46741e2e5c60f55527720a1a263d4b4249b7a2c9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/31874217477" target="_blank">2026-08-15 08:19:57</a></td></tr>
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
