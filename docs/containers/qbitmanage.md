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
<tr><td><div id="tag30461" onclick="CopyToClipboard('tag30461');return false;" class="tag-decoration">nightly</div><div id="tag13634" onclick="CopyToClipboard('tag13634');return false;" class="tag-decoration">nightly-d2e60a1</div><div id="tag19798" onclick="CopyToClipboard('tag19798');return false;" class="tag-decoration">nightly-7306da0b44924bcd4d5d3f471f72d0df7b00a7c5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/d2e60a11101875209fdb997d718e61ae065f8a5d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/38525529802" target="_blank">2026-10-14 06:59:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16216" onclick="CopyToClipboard('tag16216');return false;" class="tag-decoration">release</div><div id="tag5136" onclick="CopyToClipboard('tag5136');return false;" class="tag-decoration">release-d8ab7f6</div><div id="tag14591" onclick="CopyToClipboard('tag14591');return false;" class="tag-decoration">release-4.13.0</div><div id="tag25417" onclick="CopyToClipboard('tag25417');return false;" class="tag-decoration">release-v4</div><div id="tag22596" onclick="CopyToClipboard('tag22596');return false;" class="tag-decoration">release-v4.13</div><div id="tag13090" onclick="CopyToClipboard('tag13090');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/d8ab7f65fc441f9879a9ed0f272cb80b76728bec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/37559729935" target="_blank">2026-10-07 01:58:39</a></td></tr>
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
