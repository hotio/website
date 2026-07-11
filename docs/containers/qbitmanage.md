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
<tr><td><div id="tag7743" onclick="CopyToClipboard('tag7743');return false;" class="tag-decoration">nightly</div><div id="tag5060" onclick="CopyToClipboard('tag5060');return false;" class="tag-decoration">nightly-e3ae751</div><div id="tag16163" onclick="CopyToClipboard('tag16163');return false;" class="tag-decoration">nightly-72ac834942cf3fb3894daca6cd6ae958f20eb446</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/e3ae751eecea7482bc71ad85fde7047d090b5dd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29164277482" target="_blank">2026-07-11 18:53:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16899" onclick="CopyToClipboard('tag16899');return false;" class="tag-decoration">release</div><div id="tag27514" onclick="CopyToClipboard('tag27514');return false;" class="tag-decoration">release-6622ca6</div><div id="tag14383" onclick="CopyToClipboard('tag14383');return false;" class="tag-decoration">release-4.9.1</div><div id="tag13615" onclick="CopyToClipboard('tag13615');return false;" class="tag-decoration">release-v4</div><div id="tag6032" onclick="CopyToClipboard('tag6032');return false;" class="tag-decoration">release-v4.9</div><div id="tag11982" onclick="CopyToClipboard('tag11982');return false;" class="tag-decoration">release-v4.9.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/6622ca6b8598b9e1d2bc3de7ce61bab5e0dd8bf7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28975415740" target="_blank">2026-07-08 21:01:01</a></td></tr>
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
