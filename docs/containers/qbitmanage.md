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
<tr><td><div id="tag17744" onclick="CopyToClipboard('tag17744');return false;" class="tag-decoration">nightly</div><div id="tag6146" onclick="CopyToClipboard('tag6146');return false;" class="tag-decoration">nightly-260629d</div><div id="tag5900" onclick="CopyToClipboard('tag5900');return false;" class="tag-decoration">nightly-7c3d01608b591b1db27911a75ae081897239a1f3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/260629d297ae6da76d37469e6064f212e3c535f1" target="_blank">Version update: 0686e1d7529322a96cf822dd00d7f0b8b43bd51c => 7c3d01608b591b1db27911a75ae081897239a1f3</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/23382271823" target="_blank">2026-03-21 15:00:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag721" onclick="CopyToClipboard('tag721');return false;" class="tag-decoration">release</div><div id="tag16184" onclick="CopyToClipboard('tag16184');return false;" class="tag-decoration">release-1ef2270</div><div id="tag13941" onclick="CopyToClipboard('tag13941');return false;" class="tag-decoration">release-4.6.5</div><div id="tag5984" onclick="CopyToClipboard('tag5984');return false;" class="tag-decoration">release-v4</div><div id="tag5044" onclick="CopyToClipboard('tag5044');return false;" class="tag-decoration">release-v4.6</div><div id="tag3875" onclick="CopyToClipboard('tag3875');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/1ef22700ea2ab6bc28f35f7891c40a23f0901949" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/22292131140" target="_blank">2026-02-23 03:43:59</a></td></tr>
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
