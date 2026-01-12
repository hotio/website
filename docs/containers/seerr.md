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
<tr><td><div id="tag10291" onclick="CopyToClipboard('tag10291');return false;" class="tag-decoration">nightly</div><div id="tag14346" onclick="CopyToClipboard('tag14346');return false;" class="tag-decoration">nightly-d0f029b46e54dd4db2d3ce83e98a9fc8c1a9aa5d</div><div id="tag27160" onclick="CopyToClipboard('tag27160');return false;" class="tag-decoration">nightly-713dd44</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/713dd442ee89721254929ba62580da23932fd061" target="_blank">Version update: e0a81038cd62bcea91e298b516892ecd34a5a0b0 => d0f029b46e54dd4db2d3ce83e98a9fc8c1a9aa5d</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20916096023" target="_blank">2026-01-12 10:31:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18480" onclick="CopyToClipboard('tag18480');return false;" class="tag-decoration">release</div><div id="tag19308" onclick="CopyToClipboard('tag19308');return false;" class="tag-decoration">release-2.7.3</div><div id="tag28976" onclick="CopyToClipboard('tag28976');return false;" class="tag-decoration">release-f8ae145</div><div id="tag15742" onclick="CopyToClipboard('tag15742');return false;" class="tag-decoration">release-v2</div><div id="tag29800" onclick="CopyToClipboard('tag29800');return false;" class="tag-decoration">release-v2.7</div><div id="tag22600" onclick="CopyToClipboard('tag22600');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/f8ae145b6ba73f1d403950558a4731b96f970704" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20898166763" target="_blank">2026-01-11 16:17:49</a></td></tr>
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
