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
<tr><td><div id="tag24193" onclick="CopyToClipboard('tag24193');return false;" class="tag-decoration">nightly</div><div id="tag7568" onclick="CopyToClipboard('tag7568');return false;" class="tag-decoration">nightly-76cbbc1</div><div id="tag7701" onclick="CopyToClipboard('tag7701');return false;" class="tag-decoration">nightly-ab78754f8a44be11def75de0ad35e1402f2a7b01</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/76cbbc134eefca4767b4fae163c92286e6096bb9" target="_blank">Version update: 1aa430e36cf25fedc47413d50af15aca778bb289 => ab78754f8a44be11def75de0ad35e1402f2a7b01</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/23898194509" target="_blank">2026-04-02 11:28:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7166" onclick="CopyToClipboard('tag7166');return false;" class="tag-decoration">release</div><div id="tag1069" onclick="CopyToClipboard('tag1069');return false;" class="tag-decoration">release-9b628ed</div><div id="tag28657" onclick="CopyToClipboard('tag28657');return false;" class="tag-decoration">release-4.6.6</div><div id="tag24676" onclick="CopyToClipboard('tag24676');return false;" class="tag-decoration">release-v4</div><div id="tag28230" onclick="CopyToClipboard('tag28230');return false;" class="tag-decoration">release-v4.6</div><div id="tag22545" onclick="CopyToClipboard('tag22545');return false;" class="tag-decoration">release-v4.6.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/9b628edff090bceba588d432577810ff986518f8" target="_blank">Version update: 4.6.5 => 4.6.6</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/23388245094" target="_blank">2026-03-21 20:33:38</a></td></tr>
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
