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
<tr><td><div id="tag29418" onclick="CopyToClipboard('tag29418');return false;" class="tag-decoration">nightly</div><div id="tag30299" onclick="CopyToClipboard('tag30299');return false;" class="tag-decoration">nightly-65e410d</div><div id="tag26909" onclick="CopyToClipboard('tag26909');return false;" class="tag-decoration">nightly-606a943fff8243157f92d86bff7cabeca6e6c2b5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/65e410d5620219c2d3b18dac05d483a2e92a2612" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/45342226797" target="_blank">2026-11-24 06:40:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2007" onclick="CopyToClipboard('tag2007');return false;" class="tag-decoration">release</div><div id="tag27549" onclick="CopyToClipboard('tag27549');return false;" class="tag-decoration">release-345b8ed</div><div id="tag21468" onclick="CopyToClipboard('tag21468');return false;" class="tag-decoration">release-4.15.0</div><div id="tag11208" onclick="CopyToClipboard('tag11208');return false;" class="tag-decoration">release-v4</div><div id="tag28958" onclick="CopyToClipboard('tag28958');return false;" class="tag-decoration">release-v4.15</div><div id="tag24206" onclick="CopyToClipboard('tag24206');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/345b8edcbaa4150a4f078f5d3061b2c6a0c0f875" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/45342237934" target="_blank">2026-11-24 06:40:41</a></td></tr>
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
