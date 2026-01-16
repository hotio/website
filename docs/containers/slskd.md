---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23334" onclick="CopyToClipboard('tag23334');return false;" class="tag-decoration">nightly</div><div id="tag17091" onclick="CopyToClipboard('tag17091');return false;" class="tag-decoration">nightly-a1fb82f</div><div id="tag23127" onclick="CopyToClipboard('tag23127');return false;" class="tag-decoration">nightly-0.24.2.65534-35fb847f</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/a1fb82f6829a97a549e4206e87f66e17ade316fe" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21060553485" target="_blank">2026-01-16 08:34:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19877" onclick="CopyToClipboard('tag19877');return false;" class="tag-decoration">release</div><div id="tag4040" onclick="CopyToClipboard('tag4040');return false;" class="tag-decoration">release-3653963</div><div id="tag32281" onclick="CopyToClipboard('tag32281');return false;" class="tag-decoration">release-0.24.3</div><div id="tag21929" onclick="CopyToClipboard('tag21929');return false;" class="tag-decoration">release-v0</div><div id="tag236" onclick="CopyToClipboard('tag236');return false;" class="tag-decoration">release-v0.24</div><div id="tag31435" onclick="CopyToClipboard('tag31435');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/3653963c1aca6d0087d198a9ea939ef0145024b8" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21059657038" target="_blank">2026-01-16 07:55:45</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
