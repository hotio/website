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
<tr><td><div id="tag7631" onclick="CopyToClipboard('tag7631');return false;" class="tag-decoration">nightly</div><div id="tag6812" onclick="CopyToClipboard('tag6812');return false;" class="tag-decoration">nightly-55fa9f1</div><div id="tag29247" onclick="CopyToClipboard('tag29247');return false;" class="tag-decoration">nightly-0e37886285c34324bd5f75781c2e760d4b8b877a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/55fa9f15d517207f10381b74788ec0e7417cb28b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28303077941" target="_blank">2026-06-27 22:00:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7127" onclick="CopyToClipboard('tag7127');return false;" class="tag-decoration">release</div><div id="tag14823" onclick="CopyToClipboard('tag14823');return false;" class="tag-decoration">release-fe4598e</div><div id="tag4036" onclick="CopyToClipboard('tag4036');return false;" class="tag-decoration">release-4.9.1</div><div id="tag20370" onclick="CopyToClipboard('tag20370');return false;" class="tag-decoration">release-v4</div><div id="tag27769" onclick="CopyToClipboard('tag27769');return false;" class="tag-decoration">release-v4.9</div><div id="tag18309" onclick="CopyToClipboard('tag18309');return false;" class="tag-decoration">release-v4.9.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/fe4598e353073372ce2f91b501828f5649348cfa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28331113300" target="_blank">2026-06-28 18:01:20</a></td></tr>
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
