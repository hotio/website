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
<tr><td><div id="tag32028" onclick="CopyToClipboard('tag32028');return false;" class="tag-decoration">nightly</div><div id="tag27451" onclick="CopyToClipboard('tag27451');return false;" class="tag-decoration">nightly-bccf093</div><div id="tag28524" onclick="CopyToClipboard('tag28524');return false;" class="tag-decoration">nightly-78bf74ef47a17bf7de26c16157879255f9e016db</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/bccf093aca532daf49c6e927b81466d3704af475" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/41182360793" target="_blank">2026-10-31 07:53:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16907" onclick="CopyToClipboard('tag16907');return false;" class="tag-decoration">release</div><div id="tag18087" onclick="CopyToClipboard('tag18087');return false;" class="tag-decoration">release-db7da57</div><div id="tag20548" onclick="CopyToClipboard('tag20548');return false;" class="tag-decoration">release-4.14.0</div><div id="tag5576" onclick="CopyToClipboard('tag5576');return false;" class="tag-decoration">release-v4</div><div id="tag23429" onclick="CopyToClipboard('tag23429');return false;" class="tag-decoration">release-v4.14</div><div id="tag4937" onclick="CopyToClipboard('tag4937');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/db7da57b3abb442b6a18cfb000a518ba54eda34c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40589007427" target="_blank">2026-10-27 21:42:23</a></td></tr>
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
