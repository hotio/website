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
<tr><td><div id="tag6980" onclick="CopyToClipboard('tag6980');return false;" class="tag-decoration">nightly</div><div id="tag19271" onclick="CopyToClipboard('tag19271');return false;" class="tag-decoration">nightly-1680977</div><div id="tag10588" onclick="CopyToClipboard('tag10588');return false;" class="tag-decoration">nightly-3cf9a4ebca75b24dbae3a5793710ce18a7528fdc</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/168097745f060c70bef6c36a3458aa3740d64cd6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/32086227898" target="_blank">2026-08-18 00:53:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16392" onclick="CopyToClipboard('tag16392');return false;" class="tag-decoration">release</div><div id="tag31041" onclick="CopyToClipboard('tag31041');return false;" class="tag-decoration">release-8058a57</div><div id="tag21811" onclick="CopyToClipboard('tag21811');return false;" class="tag-decoration">release-4.12.0</div><div id="tag19865" onclick="CopyToClipboard('tag19865');return false;" class="tag-decoration">release-v4</div><div id="tag23525" onclick="CopyToClipboard('tag23525');return false;" class="tag-decoration">release-v4.12</div><div id="tag7676" onclick="CopyToClipboard('tag7676');return false;" class="tag-decoration">release-v4.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/8058a575a3a72bbc983bc1413ae031b1a528dc5f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/32045148099" target="_blank">2026-08-17 16:20:11</a></td></tr>
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
