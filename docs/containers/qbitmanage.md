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
<tr><td><div id="tag5193" onclick="CopyToClipboard('tag5193');return false;" class="tag-decoration">nightly</div><div id="tag19642" onclick="CopyToClipboard('tag19642');return false;" class="tag-decoration">nightly-65e410d</div><div id="tag11798" onclick="CopyToClipboard('tag11798');return false;" class="tag-decoration">nightly-606a943fff8243157f92d86bff7cabeca6e6c2b5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/65e410d5620219c2d3b18dac05d483a2e92a2612" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/45342226797" target="_blank">2026-11-24 06:40:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4752" onclick="CopyToClipboard('tag4752');return false;" class="tag-decoration">release</div><div id="tag31531" onclick="CopyToClipboard('tag31531');return false;" class="tag-decoration">release-370e55b</div><div id="tag7362" onclick="CopyToClipboard('tag7362');return false;" class="tag-decoration">release-4.15.0</div><div id="tag10728" onclick="CopyToClipboard('tag10728');return false;" class="tag-decoration">release-v4</div><div id="tag27565" onclick="CopyToClipboard('tag27565');return false;" class="tag-decoration">release-v4.15</div><div id="tag596" onclick="CopyToClipboard('tag596');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/370e55b633131dd84e83f9105f4ee2c9063b5e1f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/45279280927" target="_blank">2026-11-23 22:23:52</a></td></tr>
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
