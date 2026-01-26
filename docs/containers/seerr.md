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
<tr><td><div id="tag19533" onclick="CopyToClipboard('tag19533');return false;" class="tag-decoration">nightly</div><div id="tag7571" onclick="CopyToClipboard('tag7571');return false;" class="tag-decoration">nightly-cbdb8a7</div><div id="tag9218" onclick="CopyToClipboard('tag9218');return false;" class="tag-decoration">nightly-f8f90cb903782762e7356ec768932ef2570ebe4f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/cbdb8a7b7e902777a0bec732a9468d07b227a3d6" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21354181561" target="_blank">2026-01-26 10:20:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8439" onclick="CopyToClipboard('tag8439');return false;" class="tag-decoration">release</div><div id="tag22938" onclick="CopyToClipboard('tag22938');return false;" class="tag-decoration">release-7bb5ca9</div><div id="tag15888" onclick="CopyToClipboard('tag15888');return false;" class="tag-decoration">release-2.7.3</div><div id="tag184" onclick="CopyToClipboard('tag184');return false;" class="tag-decoration">release-v2</div><div id="tag29945" onclick="CopyToClipboard('tag29945');return false;" class="tag-decoration">release-v2.7</div><div id="tag6664" onclick="CopyToClipboard('tag6664');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/7bb5ca9b55518bf00283ae8e808c7eecd3b0939f" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21325106547" target="_blank">2026-01-25 01:55:50</a></td></tr>
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
