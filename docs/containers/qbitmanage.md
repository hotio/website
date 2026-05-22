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
<tr><td><div id="tag15533" onclick="CopyToClipboard('tag15533');return false;" class="tag-decoration">nightly</div><div id="tag5929" onclick="CopyToClipboard('tag5929');return false;" class="tag-decoration">nightly-5e39068</div><div id="tag23091" onclick="CopyToClipboard('tag23091');return false;" class="tag-decoration">nightly-9e4f68e8606df9a40749c4ecb04b1009338f1c0e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/5e390686bbd446429fcdc0a9efab1f247b6e6c0d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26285702864" target="_blank">2026-05-22 11:41:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18151" onclick="CopyToClipboard('tag18151');return false;" class="tag-decoration">release</div><div id="tag23635" onclick="CopyToClipboard('tag23635');return false;" class="tag-decoration">release-4874b25</div><div id="tag21551" onclick="CopyToClipboard('tag21551');return false;" class="tag-decoration">release-4.7.1</div><div id="tag15137" onclick="CopyToClipboard('tag15137');return false;" class="tag-decoration">release-v4</div><div id="tag23568" onclick="CopyToClipboard('tag23568');return false;" class="tag-decoration">release-v4.7</div><div id="tag28235" onclick="CopyToClipboard('tag28235');return false;" class="tag-decoration">release-v4.7.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/4874b2585abfaed2cec1e25fe676e50d5b2e8de9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26042656704" target="_blank">2026-05-18 15:18:08</a></td></tr>
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
