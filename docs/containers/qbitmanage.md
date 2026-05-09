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
<tr><td><div id="tag28338" onclick="CopyToClipboard('tag28338');return false;" class="tag-decoration">nightly</div><div id="tag23030" onclick="CopyToClipboard('tag23030');return false;" class="tag-decoration">nightly-cf75799</div><div id="tag19803" onclick="CopyToClipboard('tag19803');return false;" class="tag-decoration">nightly-f1be2582a9bf3dd6be1b589591195d864f2a40ac</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/cf757998668f5e72b7acf277751734fec55b2d9d" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25605054586" target="_blank">2026-05-09 15:43:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11155" onclick="CopyToClipboard('tag11155');return false;" class="tag-decoration">release</div><div id="tag28351" onclick="CopyToClipboard('tag28351');return false;" class="tag-decoration">release-949df25</div><div id="tag6844" onclick="CopyToClipboard('tag6844');return false;" class="tag-decoration">release-4.7.0</div><div id="tag16226" onclick="CopyToClipboard('tag16226');return false;" class="tag-decoration">release-v4</div><div id="tag15164" onclick="CopyToClipboard('tag15164');return false;" class="tag-decoration">release-v4.7</div><div id="tag2306" onclick="CopyToClipboard('tag2306');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/949df2592cb8b2a0e0357cb9c36301d05ce8721b" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/24552135143" target="_blank">2026-04-17 06:54:13</a></td></tr>
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
