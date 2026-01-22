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
<tr><td><div id="tag8933" onclick="CopyToClipboard('tag8933');return false;" class="tag-decoration">nightly</div><div id="tag29881" onclick="CopyToClipboard('tag29881');return false;" class="tag-decoration">nightly-dffd376</div><div id="tag11018" onclick="CopyToClipboard('tag11018');return false;" class="tag-decoration">nightly-0.24.3.65534-337fe1c7</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/dffd376fcd2287fe35ea059d7539814246f6ed74" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21200275374" target="_blank">2026-01-21 06:58:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2394" onclick="CopyToClipboard('tag2394');return false;" class="tag-decoration">release</div><div id="tag14841" onclick="CopyToClipboard('tag14841');return false;" class="tag-decoration">release-0933d69</div><div id="tag5923" onclick="CopyToClipboard('tag5923');return false;" class="tag-decoration">release-0.24.3</div><div id="tag25262" onclick="CopyToClipboard('tag25262');return false;" class="tag-decoration">release-v0</div><div id="tag17037" onclick="CopyToClipboard('tag17037');return false;" class="tag-decoration">release-v0.24</div><div id="tag13561" onclick="CopyToClipboard('tag13561');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/0933d6985173a3c6e965b74688d20cb562668ec4" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21237957038" target="_blank">2026-01-22 06:03:31</a></td></tr>
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
