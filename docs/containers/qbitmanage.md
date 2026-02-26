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
<tr><td><div id="tag4164" onclick="CopyToClipboard('tag4164');return false;" class="tag-decoration">nightly</div><div id="tag29780" onclick="CopyToClipboard('tag29780');return false;" class="tag-decoration">nightly-6a8cf30</div><div id="tag4255" onclick="CopyToClipboard('tag4255');return false;" class="tag-decoration">nightly-d31a66ce1c8cd299fd7525a7ee2c1f82a59fef8d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/6a8cf3054e4c94b1d1c3c8c694154f078ff8d5ad" target="_blank">Version update: 639ccd7fc520b66607c8c0de936836fe361d4a58 => d31a66ce1c8cd299fd7525a7ee2c1f82a59fef8d</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/22444022437" target="_blank">2026-02-26 13:24:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9447" onclick="CopyToClipboard('tag9447');return false;" class="tag-decoration">release</div><div id="tag15431" onclick="CopyToClipboard('tag15431');return false;" class="tag-decoration">release-1ef2270</div><div id="tag22459" onclick="CopyToClipboard('tag22459');return false;" class="tag-decoration">release-4.6.5</div><div id="tag19497" onclick="CopyToClipboard('tag19497');return false;" class="tag-decoration">release-v4</div><div id="tag3515" onclick="CopyToClipboard('tag3515');return false;" class="tag-decoration">release-v4.6</div><div id="tag30753" onclick="CopyToClipboard('tag30753');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/1ef22700ea2ab6bc28f35f7891c40a23f0901949" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/22292131140" target="_blank">2026-02-23 03:43:59</a></td></tr>
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
