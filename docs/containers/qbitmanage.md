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
<tr><td><div id="tag31760" onclick="CopyToClipboard('tag31760');return false;" class="tag-decoration">nightly</div><div id="tag25069" onclick="CopyToClipboard('tag25069');return false;" class="tag-decoration">nightly-e3c2240</div><div id="tag11146" onclick="CopyToClipboard('tag11146');return false;" class="tag-decoration">nightly-986a49d3d166a0580f138e141222ba15fbeecf2e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/e3c22407a6f6d4c3c74536186956b19965771bbf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/31983417004" target="_blank">2026-08-17 00:55:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2263" onclick="CopyToClipboard('tag2263');return false;" class="tag-decoration">release</div><div id="tag6640" onclick="CopyToClipboard('tag6640');return false;" class="tag-decoration">release-8058a57</div><div id="tag16224" onclick="CopyToClipboard('tag16224');return false;" class="tag-decoration">release-4.12.0</div><div id="tag27858" onclick="CopyToClipboard('tag27858');return false;" class="tag-decoration">release-v4</div><div id="tag29628" onclick="CopyToClipboard('tag29628');return false;" class="tag-decoration">release-v4.12</div><div id="tag6753" onclick="CopyToClipboard('tag6753');return false;" class="tag-decoration">release-v4.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/8058a575a3a72bbc983bc1413ae031b1a528dc5f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/32045148099" target="_blank">2026-08-17 16:20:11</a></td></tr>
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
