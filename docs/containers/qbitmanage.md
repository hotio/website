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
<tr><td><div id="tag15743" onclick="CopyToClipboard('tag15743');return false;" class="tag-decoration">nightly</div><div id="tag25223" onclick="CopyToClipboard('tag25223');return false;" class="tag-decoration">nightly-0edc02f</div><div id="tag17074" onclick="CopyToClipboard('tag17074');return false;" class="tag-decoration">nightly-9a623a4be4152dd5308c2d725299d27fa4bf0187</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/0edc02f60a06480e1adc4eccee037213c8d89b07" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/35300595171" target="_blank">2026-09-18 02:45:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6835" onclick="CopyToClipboard('tag6835');return false;" class="tag-decoration">release</div><div id="tag10137" onclick="CopyToClipboard('tag10137');return false;" class="tag-decoration">release-5c602a6</div><div id="tag17566" onclick="CopyToClipboard('tag17566');return false;" class="tag-decoration">release-4.13.0</div><div id="tag6250" onclick="CopyToClipboard('tag6250');return false;" class="tag-decoration">release-v4</div><div id="tag12278" onclick="CopyToClipboard('tag12278');return false;" class="tag-decoration">release-v4.13</div><div id="tag14172" onclick="CopyToClipboard('tag14172');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/5c602a6327315a2b566c0d24deab15d02f901be6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/35273309351" target="_blank">2026-09-17 20:51:24</a></td></tr>
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
