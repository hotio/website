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
<tr><td><div id="tag8820" onclick="CopyToClipboard('tag8820');return false;" class="tag-decoration">nightly</div><div id="tag5172" onclick="CopyToClipboard('tag5172');return false;" class="tag-decoration">nightly-296652d</div><div id="tag21679" onclick="CopyToClipboard('tag21679');return false;" class="tag-decoration">nightly-b1b12bdcb4bf2541729f645a2b25b9618687e032</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/296652d47ff356325d81e4ae0a96b3de52b3cb6a" target="_blank">Version update: 7f9be7d0a01613e23d466ae64dcc4eca9a6fc66c => b1b12bdcb4bf2541729f645a2b25b9618687e032</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21712871790" target="_blank">2026-02-05 13:13:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28806" onclick="CopyToClipboard('tag28806');return false;" class="tag-decoration">release</div><div id="tag7302" onclick="CopyToClipboard('tag7302');return false;" class="tag-decoration">release-9040906</div><div id="tag25976" onclick="CopyToClipboard('tag25976');return false;" class="tag-decoration">release-4.6.5</div><div id="tag15293" onclick="CopyToClipboard('tag15293');return false;" class="tag-decoration">release-v4</div><div id="tag19788" onclick="CopyToClipboard('tag19788');return false;" class="tag-decoration">release-v4.6</div><div id="tag25705" onclick="CopyToClipboard('tag25705');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/9040906c023e50655892f51dd11e4c0d18bec71c" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21428858541" target="_blank">2026-01-28 07:15:02</a></td></tr>
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
