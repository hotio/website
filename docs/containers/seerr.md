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
<tr><td><div id="tag25821" onclick="CopyToClipboard('tag25821');return false;" class="tag-decoration">nightly</div><div id="tag8335" onclick="CopyToClipboard('tag8335');return false;" class="tag-decoration">nightly-9785ff9</div><div id="tag29189" onclick="CopyToClipboard('tag29189');return false;" class="tag-decoration">nightly-f8f90cb903782762e7356ec768932ef2570ebe4f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/9785ff993ea6f026eefaf9f6da3220784e4bf4e2" target="_blank">Version update: 65844a2f230321636afd340b107fc12d0e156a2e => f8f90cb903782762e7356ec768932ef2570ebe4f</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21351394006" target="_blank">2026-01-26 08:43:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15779" onclick="CopyToClipboard('tag15779');return false;" class="tag-decoration">release</div><div id="tag10640" onclick="CopyToClipboard('tag10640');return false;" class="tag-decoration">release-7bb5ca9</div><div id="tag5950" onclick="CopyToClipboard('tag5950');return false;" class="tag-decoration">release-2.7.3</div><div id="tag16093" onclick="CopyToClipboard('tag16093');return false;" class="tag-decoration">release-v2</div><div id="tag8426" onclick="CopyToClipboard('tag8426');return false;" class="tag-decoration">release-v2.7</div><div id="tag771" onclick="CopyToClipboard('tag771');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/7bb5ca9b55518bf00283ae8e808c7eecd3b0939f" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21325106547" target="_blank">2026-01-25 01:55:50</a></td></tr>
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
