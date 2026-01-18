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
<tr><td><div id="tag10945" onclick="CopyToClipboard('tag10945');return false;" class="tag-decoration">nightly</div><div id="tag22931" onclick="CopyToClipboard('tag22931');return false;" class="tag-decoration">nightly-f18bcef</div><div id="tag7289" onclick="CopyToClipboard('tag7289');return false;" class="tag-decoration">nightly-535777620dc5cedbd92a52d41bee7c432a6389b5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/f18bcef3f32f055ed0503a2c99532af815cfedd6" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21113698016" target="_blank">2026-01-18 14:57:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32515" onclick="CopyToClipboard('tag32515');return false;" class="tag-decoration">release</div><div id="tag24336" onclick="CopyToClipboard('tag24336');return false;" class="tag-decoration">release-363f677</div><div id="tag22569" onclick="CopyToClipboard('tag22569');return false;" class="tag-decoration">release-4.6.5</div><div id="tag25413" onclick="CopyToClipboard('tag25413');return false;" class="tag-decoration">release-v4</div><div id="tag11266" onclick="CopyToClipboard('tag11266');return false;" class="tag-decoration">release-v4.6</div><div id="tag20455" onclick="CopyToClipboard('tag20455');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/363f6774f86a59932bd5f01bceede6c0399cefa9" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21113698168" target="_blank">2026-01-18 14:57:12</a></td></tr>
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
