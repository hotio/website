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
<tr><td><div id="tag5664" onclick="CopyToClipboard('tag5664');return false;" class="tag-decoration">nightly</div><div id="tag32554" onclick="CopyToClipboard('tag32554');return false;" class="tag-decoration">nightly-278918f</div><div id="tag15810" onclick="CopyToClipboard('tag15810');return false;" class="tag-decoration">nightly-3f35b8c886fc85de62bf2412474c9612dd088992</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/278918f3571104cc4b420e55c2f121386f7d5ac0" target="_blank">Version update: d0f029b46e54dd4db2d3ce83e98a9fc8c1a9aa5d => 3f35b8c886fc85de62bf2412474c9612dd088992</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21060635554" target="_blank">2026-01-16 08:37:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14390" onclick="CopyToClipboard('tag14390');return false;" class="tag-decoration">release</div><div id="tag30564" onclick="CopyToClipboard('tag30564');return false;" class="tag-decoration">release-3c649bb</div><div id="tag4504" onclick="CopyToClipboard('tag4504');return false;" class="tag-decoration">release-2.7.3</div><div id="tag600" onclick="CopyToClipboard('tag600');return false;" class="tag-decoration">release-v2</div><div id="tag4408" onclick="CopyToClipboard('tag4408');return false;" class="tag-decoration">release-v2.7</div><div id="tag17995" onclick="CopyToClipboard('tag17995');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/3c649bb8a178024852438916d8714d98bc4c0750" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21060552884" target="_blank">2026-01-16 08:34:03</a></td></tr>
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
