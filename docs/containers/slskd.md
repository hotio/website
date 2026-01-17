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
<tr><td><div id="tag31780" onclick="CopyToClipboard('tag31780');return false;" class="tag-decoration">nightly</div><div id="tag3359" onclick="CopyToClipboard('tag3359');return false;" class="tag-decoration">nightly-699f3fd</div><div id="tag24290" onclick="CopyToClipboard('tag24290');return false;" class="tag-decoration">nightly-0.24.3.65534-9c1c726f</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/699f3fdb8a12d8152e55d747c8c548016489b84c" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21090398894" target="_blank">2026-01-17 07:01:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28628" onclick="CopyToClipboard('tag28628');return false;" class="tag-decoration">release</div><div id="tag14756" onclick="CopyToClipboard('tag14756');return false;" class="tag-decoration">release-cf8b15a</div><div id="tag11827" onclick="CopyToClipboard('tag11827');return false;" class="tag-decoration">release-0.24.3</div><div id="tag9157" onclick="CopyToClipboard('tag9157');return false;" class="tag-decoration">release-v0</div><div id="tag16301" onclick="CopyToClipboard('tag16301');return false;" class="tag-decoration">release-v0.24</div><div id="tag19596" onclick="CopyToClipboard('tag19596');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/cf8b15a3be72f824b314dfd62554faefa553162d" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21065743520" target="_blank">2026-01-16 11:53:01</a></td></tr>
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
