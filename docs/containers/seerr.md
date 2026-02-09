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
<tr><td><div id="tag14332" onclick="CopyToClipboard('tag14332');return false;" class="tag-decoration">nightly</div><div id="tag6958" onclick="CopyToClipboard('tag6958');return false;" class="tag-decoration">nightly-3743dd0</div><div id="tag13751" onclick="CopyToClipboard('tag13751');return false;" class="tag-decoration">nightly-df54fb94514bfb0b74f2f6842f4e2d121f319338</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/3743dd0389ba6ac509e96ec92769805e9749cc8c" target="_blank">Version update: 673f3f2939c384004f2b72287e6e314da9565d0e => df54fb94514bfb0b74f2f6842f4e2d121f319338</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21819976434" target="_blank">2026-02-09 09:43:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15033" onclick="CopyToClipboard('tag15033');return false;" class="tag-decoration">release</div><div id="tag7745" onclick="CopyToClipboard('tag7745');return false;" class="tag-decoration">release-2ce3aa2</div><div id="tag24335" onclick="CopyToClipboard('tag24335');return false;" class="tag-decoration">release-2.7.3</div><div id="tag17396" onclick="CopyToClipboard('tag17396');return false;" class="tag-decoration">release-v2</div><div id="tag16942" onclick="CopyToClipboard('tag16942');return false;" class="tag-decoration">release-v2.7</div><div id="tag21351" onclick="CopyToClipboard('tag21351');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/2ce3aa20d37ed1d6ab3d82ac38b6c310987f7dcb" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21428868482" target="_blank">2026-01-28 07:15:25</a></td></tr>
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
