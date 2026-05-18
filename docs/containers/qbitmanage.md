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
<tr><td><div id="tag5409" onclick="CopyToClipboard('tag5409');return false;" class="tag-decoration">nightly</div><div id="tag25746" onclick="CopyToClipboard('tag25746');return false;" class="tag-decoration">nightly-c039d4d</div><div id="tag9240" onclick="CopyToClipboard('tag9240');return false;" class="tag-decoration">nightly-081f662a1400de3aa4667d745a3890a0418a7e2c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/c039d4d45a301d0348d9aeb7cec72506b51be581" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26042634336" target="_blank">2026-05-18 15:17:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30972" onclick="CopyToClipboard('tag30972');return false;" class="tag-decoration">release</div><div id="tag21164" onclick="CopyToClipboard('tag21164');return false;" class="tag-decoration">release-921512e</div><div id="tag13584" onclick="CopyToClipboard('tag13584');return false;" class="tag-decoration">release-4.7.0</div><div id="tag2467" onclick="CopyToClipboard('tag2467');return false;" class="tag-decoration">release-v4</div><div id="tag7906" onclick="CopyToClipboard('tag7906');return false;" class="tag-decoration">release-v4.7</div><div id="tag14371" onclick="CopyToClipboard('tag14371');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/921512e1d899e406863b7ce3cd7967a42a4552fd" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25986550799" target="_blank">2026-05-17 09:01:18</a></td></tr>
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
