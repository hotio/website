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
<tr><td><div id="tag10698" onclick="CopyToClipboard('tag10698');return false;" class="tag-decoration">nightly</div><div id="tag7068" onclick="CopyToClipboard('tag7068');return false;" class="tag-decoration">nightly-f4029b4</div><div id="tag22830" onclick="CopyToClipboard('tag22830');return false;" class="tag-decoration">nightly-8e25bec34cbc0620cf90b2d96753ad4b11d804e6</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/f4029b443fd1c4be72a2e5d6a2236e75e6498d38" target="_blank">Version update: 23d886dcd2b5fe940ce90b7faed635fef017c129 => 8e25bec34cbc0620cf90b2d96753ad4b11d804e6</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/23143992997" target="_blank">2026-03-16 12:37:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7460" onclick="CopyToClipboard('tag7460');return false;" class="tag-decoration">release</div><div id="tag7830" onclick="CopyToClipboard('tag7830');return false;" class="tag-decoration">release-1ef2270</div><div id="tag28728" onclick="CopyToClipboard('tag28728');return false;" class="tag-decoration">release-4.6.5</div><div id="tag26078" onclick="CopyToClipboard('tag26078');return false;" class="tag-decoration">release-v4</div><div id="tag17441" onclick="CopyToClipboard('tag17441');return false;" class="tag-decoration">release-v4.6</div><div id="tag28328" onclick="CopyToClipboard('tag28328');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/1ef22700ea2ab6bc28f35f7891c40a23f0901949" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/22292131140" target="_blank">2026-02-23 03:43:59</a></td></tr>
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
