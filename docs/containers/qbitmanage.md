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
<tr><td><div id="tag17668" onclick="CopyToClipboard('tag17668');return false;" class="tag-decoration">nightly</div><div id="tag8844" onclick="CopyToClipboard('tag8844');return false;" class="tag-decoration">nightly-bcc265d</div><div id="tag5566" onclick="CopyToClipboard('tag5566');return false;" class="tag-decoration">nightly-42790d3d4817a12013a49b1e6b92ee7d9d3d90de</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/bcc265df8b2ece58954393affd620c67c22fe97d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25916292164" target="_blank">2026-05-15 11:51:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7143" onclick="CopyToClipboard('tag7143');return false;" class="tag-decoration">release</div><div id="tag6197" onclick="CopyToClipboard('tag6197');return false;" class="tag-decoration">release-4d01e82</div><div id="tag25838" onclick="CopyToClipboard('tag25838');return false;" class="tag-decoration">release-4.7.0</div><div id="tag16246" onclick="CopyToClipboard('tag16246');return false;" class="tag-decoration">release-v4</div><div id="tag6883" onclick="CopyToClipboard('tag6883');return false;" class="tag-decoration">release-v4.7</div><div id="tag18833" onclick="CopyToClipboard('tag18833');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/4d01e824178c51b099742f7294accc70a90f72cf" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25714961435" target="_blank">2026-05-12 05:16:50</a></td></tr>
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
