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
<tr><td><div id="tag8984" onclick="CopyToClipboard('tag8984');return false;" class="tag-decoration">nightly</div><div id="tag19648" onclick="CopyToClipboard('tag19648');return false;" class="tag-decoration">nightly-b4e4737</div><div id="tag25509" onclick="CopyToClipboard('tag25509');return false;" class="tag-decoration">nightly-ea335defa006fa5c44f399bd59d8c0b380950508</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/b4e473744e0a1ed905769264ad166be50d6c36fe" target="_blank">Version update: 010545c0b4923f4434302b2b20e8ede163004209 => ea335defa006fa5c44f399bd59d8c0b380950508</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/24832240495" target="_blank">2026-04-23 11:17:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24280" onclick="CopyToClipboard('tag24280');return false;" class="tag-decoration">release</div><div id="tag25837" onclick="CopyToClipboard('tag25837');return false;" class="tag-decoration">release-949df25</div><div id="tag13903" onclick="CopyToClipboard('tag13903');return false;" class="tag-decoration">release-4.7.0</div><div id="tag1266" onclick="CopyToClipboard('tag1266');return false;" class="tag-decoration">release-v4</div><div id="tag10239" onclick="CopyToClipboard('tag10239');return false;" class="tag-decoration">release-v4.7</div><div id="tag26632" onclick="CopyToClipboard('tag26632');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/949df2592cb8b2a0e0357cb9c36301d05ce8721b" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/24552135143" target="_blank">2026-04-17 06:54:13</a></td></tr>
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
