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
<tr><td><div id="tag18112" onclick="CopyToClipboard('tag18112');return false;" class="tag-decoration">nightly</div><div id="tag22970" onclick="CopyToClipboard('tag22970');return false;" class="tag-decoration">nightly-4733564</div><div id="tag15812" onclick="CopyToClipboard('tag15812');return false;" class="tag-decoration">nightly-01a01578173c8c0061c1caf8b56c5eabedc34836</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/4733564dd08a6391530ef7d6b9171a2285e798d9" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21237949559" target="_blank">2026-01-22 06:03:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18815" onclick="CopyToClipboard('tag18815');return false;" class="tag-decoration">release</div><div id="tag20095" onclick="CopyToClipboard('tag20095');return false;" class="tag-decoration">release-66689b5</div><div id="tag26356" onclick="CopyToClipboard('tag26356');return false;" class="tag-decoration">release-4.6.5</div><div id="tag5934" onclick="CopyToClipboard('tag5934');return false;" class="tag-decoration">release-v4</div><div id="tag31420" onclick="CopyToClipboard('tag31420');return false;" class="tag-decoration">release-v4.6</div><div id="tag14321" onclick="CopyToClipboard('tag14321');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/66689b520a98b3435bffd088b7d4f604711ac5a3" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21237949911" target="_blank">2026-01-22 06:03:12</a></td></tr>
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
