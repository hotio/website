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
<tr><td><div id="tag13205" onclick="CopyToClipboard('tag13205');return false;" class="tag-decoration">nightly</div><div id="tag21888" onclick="CopyToClipboard('tag21888');return false;" class="tag-decoration">nightly-ece9db6</div><div id="tag26086" onclick="CopyToClipboard('tag26086');return false;" class="tag-decoration">nightly-9cb855624593f1bd7c2c90daa9dbfe0c04bdfdf3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/ece9db6ad6636a2bd5adbb2a497d6e96c93255f8" target="_blank">Version update: d8a90da07bb1fe7454829b8b741f834765dbba47 => 9cb855624593f1bd7c2c90daa9dbfe0c04bdfdf3</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/23048484985" target="_blank">2026-03-13 11:19:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32702" onclick="CopyToClipboard('tag32702');return false;" class="tag-decoration">release</div><div id="tag11675" onclick="CopyToClipboard('tag11675');return false;" class="tag-decoration">release-1ef2270</div><div id="tag21369" onclick="CopyToClipboard('tag21369');return false;" class="tag-decoration">release-4.6.5</div><div id="tag18226" onclick="CopyToClipboard('tag18226');return false;" class="tag-decoration">release-v4</div><div id="tag7930" onclick="CopyToClipboard('tag7930');return false;" class="tag-decoration">release-v4.6</div><div id="tag27705" onclick="CopyToClipboard('tag27705');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/1ef22700ea2ab6bc28f35f7891c40a23f0901949" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/22292131140" target="_blank">2026-02-23 03:43:59</a></td></tr>
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
