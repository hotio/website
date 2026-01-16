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
<tr><td><div id="tag21066" onclick="CopyToClipboard('tag21066');return false;" class="tag-decoration">nightly</div><div id="tag29751" onclick="CopyToClipboard('tag29751');return false;" class="tag-decoration">nightly-ee7fa43</div><div id="tag10742" onclick="CopyToClipboard('tag10742');return false;" class="tag-decoration">nightly-0.24.2.65534-35fb847f</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/ee7fa43e28d0fd350bddedeaf36d4dfe22ae9f81" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21063302399" target="_blank">2026-01-16 10:18:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32055" onclick="CopyToClipboard('tag32055');return false;" class="tag-decoration">release</div><div id="tag32464" onclick="CopyToClipboard('tag32464');return false;" class="tag-decoration">release-f4612d6</div><div id="tag31429" onclick="CopyToClipboard('tag31429');return false;" class="tag-decoration">release-0.24.3</div><div id="tag8183" onclick="CopyToClipboard('tag8183');return false;" class="tag-decoration">release-v0</div><div id="tag28239" onclick="CopyToClipboard('tag28239');return false;" class="tag-decoration">release-v0.24</div><div id="tag2413" onclick="CopyToClipboard('tag2413');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/f4612d63115a085c34de66718c8b06f14c1680a2" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21063302905" target="_blank">2026-01-16 10:18:02</a></td></tr>
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
