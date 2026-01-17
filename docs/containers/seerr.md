---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

!!! warning
    The tag `release` is (until the Seerr project does a release) still Jellyseerr. Do not attempt to migrate from `hotio/overseerr:___` to `hotio/seerr:release`. It should be safe to go from `hotio/overseerr:___` and `hotio/jellyseerr:___` to `hotio/seerr:nightly`. It is also safe to go from `hotio/jellyseerr:release` to `hotio/seerr:release`, because they are the same version at present. If this is all too complicated, stay where you are! If you need help, join the discord server.

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
<tr><td><div id="tag31504" onclick="CopyToClipboard('tag31504');return false;" class="tag-decoration">nightly</div><div id="tag20020" onclick="CopyToClipboard('tag20020');return false;" class="tag-decoration">nightly-c549e4b</div><div id="tag179" onclick="CopyToClipboard('tag179');return false;" class="tag-decoration">nightly-c9037f77e6eb6773c7fde19a17c7cfaa0bab18b8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/c549e4baf34be74bb9829ed1045a34ae8f36bda4" target="_blank">Version update: 48631db989f96b002edb332cb097f974a43cf989 => c9037f77e6eb6773c7fde19a17c7cfaa0bab18b8</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21094550030" target="_blank">2026-01-17 12:50:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25271" onclick="CopyToClipboard('tag25271');return false;" class="tag-decoration">release</div><div id="tag5138" onclick="CopyToClipboard('tag5138');return false;" class="tag-decoration">release-29d5cd1</div><div id="tag24705" onclick="CopyToClipboard('tag24705');return false;" class="tag-decoration">release-2.7.3</div><div id="tag2602" onclick="CopyToClipboard('tag2602');return false;" class="tag-decoration">release-v2</div><div id="tag4020" onclick="CopyToClipboard('tag4020');return false;" class="tag-decoration">release-v2.7</div><div id="tag8401" onclick="CopyToClipboard('tag8401');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/29d5cd177241c3d24428f7d145afed047a77890d" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21090398679" target="_blank">2026-01-17 07:01:49</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
