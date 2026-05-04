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
<tr><td><div id="tag13241" onclick="CopyToClipboard('tag13241');return false;" class="tag-decoration">nightly</div><div id="tag25327" onclick="CopyToClipboard('tag25327');return false;" class="tag-decoration">nightly-4eb57d0</div><div id="tag9522" onclick="CopyToClipboard('tag9522');return false;" class="tag-decoration">nightly-85ac2a333299054ab75a2c836ba8688458ed2730</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/4eb57d0ec17357c1f40174a4eb33aa3f2ab03e5b" target="_blank">Version update: 750c5be7299719d9126e4cb228cab62b28bb9f6f => 85ac2a333299054ab75a2c836ba8688458ed2730</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25337465347" target="_blank">2026-05-04 18:57:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21504" onclick="CopyToClipboard('tag21504');return false;" class="tag-decoration">release</div><div id="tag1071" onclick="CopyToClipboard('tag1071');return false;" class="tag-decoration">release-949df25</div><div id="tag7399" onclick="CopyToClipboard('tag7399');return false;" class="tag-decoration">release-4.7.0</div><div id="tag9639" onclick="CopyToClipboard('tag9639');return false;" class="tag-decoration">release-v4</div><div id="tag6457" onclick="CopyToClipboard('tag6457');return false;" class="tag-decoration">release-v4.7</div><div id="tag7655" onclick="CopyToClipboard('tag7655');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/949df2592cb8b2a0e0357cb9c36301d05ce8721b" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/24552135143" target="_blank">2026-04-17 06:54:13</a></td></tr>
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
