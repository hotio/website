---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

!!! question
    If the community feels that we should switch to the more feature rich fork [slskdn](https://github.com/snapetech/slskdn), feel free to join the discord server and let your opinion be heard.

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
<tr><td><div id="tag16133" onclick="CopyToClipboard('tag16133');return false;" class="tag-decoration">nightly</div><div id="tag5133" onclick="CopyToClipboard('tag5133');return false;" class="tag-decoration">nightly-0ed686b</div><div id="tag29362" onclick="CopyToClipboard('tag29362');return false;" class="tag-decoration">nightly-0.24.3.65534-337fe1c7</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/0ed686b039f7dd63731675f5abbacf82876a3246" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21244726016" target="_blank">2026-01-22 10:20:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5416" onclick="CopyToClipboard('tag5416');return false;" class="tag-decoration">release</div><div id="tag18146" onclick="CopyToClipboard('tag18146');return false;" class="tag-decoration">release-868f518</div><div id="tag25845" onclick="CopyToClipboard('tag25845');return false;" class="tag-decoration">release-0.24.3</div><div id="tag29946" onclick="CopyToClipboard('tag29946');return false;" class="tag-decoration">release-v0</div><div id="tag3625" onclick="CopyToClipboard('tag3625');return false;" class="tag-decoration">release-v0.24</div><div id="tag18185" onclick="CopyToClipboard('tag18185');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/868f518af5a7b29afc0689733ed499584abc623a" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21243873467" target="_blank">2026-01-22 09:52:13</a></td></tr>
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
