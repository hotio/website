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
<tr><td><div id="tag6758" onclick="CopyToClipboard('tag6758');return false;" class="tag-decoration">nightly</div><div id="tag816" onclick="CopyToClipboard('tag816');return false;" class="tag-decoration">nightly-8e8337c</div><div id="tag20447" onclick="CopyToClipboard('tag20447');return false;" class="tag-decoration">nightly-aee93b588c458ffc6723ea21518de54cfd45b6f9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/8e8337c57a92eb906feaaf1532739f6c76199b99" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/34418349602" target="_blank">2026-09-09 23:45:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12534" onclick="CopyToClipboard('tag12534');return false;" class="tag-decoration">release</div><div id="tag22785" onclick="CopyToClipboard('tag22785');return false;" class="tag-decoration">release-de727d1</div><div id="tag27584" onclick="CopyToClipboard('tag27584');return false;" class="tag-decoration">release-4.13.0</div><div id="tag91" onclick="CopyToClipboard('tag91');return false;" class="tag-decoration">release-v4</div><div id="tag15245" onclick="CopyToClipboard('tag15245');return false;" class="tag-decoration">release-v4.13</div><div id="tag32601" onclick="CopyToClipboard('tag32601');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/de727d15066551345a1141310106fa3c9f137515" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/33916858001" target="_blank">2026-09-04 20:33:54</a></td></tr>
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
