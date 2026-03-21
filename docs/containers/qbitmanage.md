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
<tr><td><div id="tag15892" onclick="CopyToClipboard('tag15892');return false;" class="tag-decoration">nightly</div><div id="tag16551" onclick="CopyToClipboard('tag16551');return false;" class="tag-decoration">nightly-f1cc682</div><div id="tag15601" onclick="CopyToClipboard('tag15601');return false;" class="tag-decoration">nightly-b5fb698216abe7024e3a37d7c4fa860c5f99a928</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/f1cc68257627e1854f25aa2ca3fe3505e2493379" target="_blank">Version update: 7c3d01608b591b1db27911a75ae081897239a1f3 => b5fb698216abe7024e3a37d7c4fa860c5f99a928</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/23382908876" target="_blank">2026-03-21 15:36:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30613" onclick="CopyToClipboard('tag30613');return false;" class="tag-decoration">release</div><div id="tag7843" onclick="CopyToClipboard('tag7843');return false;" class="tag-decoration">release-1ef2270</div><div id="tag10561" onclick="CopyToClipboard('tag10561');return false;" class="tag-decoration">release-4.6.5</div><div id="tag27379" onclick="CopyToClipboard('tag27379');return false;" class="tag-decoration">release-v4</div><div id="tag7692" onclick="CopyToClipboard('tag7692');return false;" class="tag-decoration">release-v4.6</div><div id="tag26052" onclick="CopyToClipboard('tag26052');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/1ef22700ea2ab6bc28f35f7891c40a23f0901949" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/22292131140" target="_blank">2026-02-23 03:43:59</a></td></tr>
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
