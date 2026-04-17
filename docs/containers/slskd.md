---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag15964" onclick="CopyToClipboard('tag15964');return false;" class="tag-decoration">nightly</div><div id="tag2602" onclick="CopyToClipboard('tag2602');return false;" class="tag-decoration">nightly-5c00e0e</div><div id="tag18182" onclick="CopyToClipboard('tag18182');return false;" class="tag-decoration">nightly-0.24.5.65534-76ccc5c1</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/5c00e0e83a0e640bd859f0ebaa736d1f32d29a53" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/24552144982" target="_blank">2026-04-17 06:54:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5307" onclick="CopyToClipboard('tag5307');return false;" class="tag-decoration">release</div><div id="tag32265" onclick="CopyToClipboard('tag32265');return false;" class="tag-decoration">release-580feb5</div><div id="tag14591" onclick="CopyToClipboard('tag14591');return false;" class="tag-decoration">release-0.24.5</div><div id="tag17073" onclick="CopyToClipboard('tag17073');return false;" class="tag-decoration">release-v0</div><div id="tag24957" onclick="CopyToClipboard('tag24957');return false;" class="tag-decoration">release-v0.24</div><div id="tag25973" onclick="CopyToClipboard('tag25973');return false;" class="tag-decoration">release-v0.24.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/580feb537b97364354f240d101db47b467c0b3df" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/24552145594" target="_blank">2026-04-17 06:54:33</a></td></tr>
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
