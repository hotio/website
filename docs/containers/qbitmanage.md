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
<tr><td><div id="tag2976" onclick="CopyToClipboard('tag2976');return false;" class="tag-decoration">nightly</div><div id="tag24384" onclick="CopyToClipboard('tag24384');return false;" class="tag-decoration">nightly-972330b</div><div id="tag30675" onclick="CopyToClipboard('tag30675');return false;" class="tag-decoration">nightly-0968dc096555b519e7e73b347a2cb6cace572cc9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/972330b56f4694b02f7c96b8145d3ccd8a93fb01" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/38054890625" target="_blank">2026-10-10 13:13:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12789" onclick="CopyToClipboard('tag12789');return false;" class="tag-decoration">release</div><div id="tag32228" onclick="CopyToClipboard('tag32228');return false;" class="tag-decoration">release-d8ab7f6</div><div id="tag2075" onclick="CopyToClipboard('tag2075');return false;" class="tag-decoration">release-4.13.0</div><div id="tag21515" onclick="CopyToClipboard('tag21515');return false;" class="tag-decoration">release-v4</div><div id="tag6851" onclick="CopyToClipboard('tag6851');return false;" class="tag-decoration">release-v4.13</div><div id="tag28691" onclick="CopyToClipboard('tag28691');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/d8ab7f65fc441f9879a9ed0f272cb80b76728bec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/37559729935" target="_blank">2026-10-07 01:58:39</a></td></tr>
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
