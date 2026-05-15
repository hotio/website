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
<tr><td><div id="tag7305" onclick="CopyToClipboard('tag7305');return false;" class="tag-decoration">nightly</div><div id="tag15240" onclick="CopyToClipboard('tag15240');return false;" class="tag-decoration">nightly-223af42</div><div id="tag16033" onclick="CopyToClipboard('tag16033');return false;" class="tag-decoration">nightly-42790d3d4817a12013a49b1e6b92ee7d9d3d90de</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/223af4249dd90d15f0736eb8b10d03b9167ec244" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25927847563" target="_blank">2026-05-15 16:02:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6913" onclick="CopyToClipboard('tag6913');return false;" class="tag-decoration">release</div><div id="tag11138" onclick="CopyToClipboard('tag11138');return false;" class="tag-decoration">release-22956e2</div><div id="tag26402" onclick="CopyToClipboard('tag26402');return false;" class="tag-decoration">release-4.7.0</div><div id="tag32488" onclick="CopyToClipboard('tag32488');return false;" class="tag-decoration">release-v4</div><div id="tag18246" onclick="CopyToClipboard('tag18246');return false;" class="tag-decoration">release-v4.7</div><div id="tag29233" onclick="CopyToClipboard('tag29233');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/22956e25fc9e2bde7522a6e7aba065ad353ad240" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25927804193" target="_blank">2026-05-15 16:01:18</a></td></tr>
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
