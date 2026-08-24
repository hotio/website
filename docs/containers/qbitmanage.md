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
<tr><td><div id="tag23116" onclick="CopyToClipboard('tag23116');return false;" class="tag-decoration">nightly</div><div id="tag29554" onclick="CopyToClipboard('tag29554');return false;" class="tag-decoration">nightly-ed6b2db</div><div id="tag18269" onclick="CopyToClipboard('tag18269');return false;" class="tag-decoration">nightly-c587d5a19cbf4d8ab5dd5ebbb9caa9ec08c87137</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/ed6b2db1f6cf767849b56bea49dac576b2f825d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/32721416746" target="_blank">2026-08-24 11:21:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17984" onclick="CopyToClipboard('tag17984');return false;" class="tag-decoration">release</div><div id="tag27324" onclick="CopyToClipboard('tag27324');return false;" class="tag-decoration">release-8ed3560</div><div id="tag9503" onclick="CopyToClipboard('tag9503');return false;" class="tag-decoration">release-4.12.0</div><div id="tag13398" onclick="CopyToClipboard('tag13398');return false;" class="tag-decoration">release-v4</div><div id="tag7621" onclick="CopyToClipboard('tag7621');return false;" class="tag-decoration">release-v4.12</div><div id="tag6212" onclick="CopyToClipboard('tag6212');return false;" class="tag-decoration">release-v4.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/8ed35601d4180ac4279f7dc5dd715951f6d6114f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/32323927047" target="_blank">2026-08-20 02:14:21</a></td></tr>
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
