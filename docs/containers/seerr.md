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
<tr><td><div id="tag7577" onclick="CopyToClipboard('tag7577');return false;" class="tag-decoration">nightly</div><div id="tag26883" onclick="CopyToClipboard('tag26883');return false;" class="tag-decoration">nightly-0cfa31c</div><div id="tag26382" onclick="CopyToClipboard('tag26382');return false;" class="tag-decoration">nightly-767dc529e8e6a6afbd9dde2b509955d5e073c897</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/0cfa31c03c9a66a2675abef4ea39a5b90423f01e" target="_blank">Version update: 448a25e2a4bb869d765bcd084d803de98275de48 => 767dc529e8e6a6afbd9dde2b509955d5e073c897</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21081357369" target="_blank">2026-01-16 21:26:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21072" onclick="CopyToClipboard('tag21072');return false;" class="tag-decoration">release</div><div id="tag20902" onclick="CopyToClipboard('tag20902');return false;" class="tag-decoration">release-462d742</div><div id="tag15039" onclick="CopyToClipboard('tag15039');return false;" class="tag-decoration">release-2.7.3</div><div id="tag870" onclick="CopyToClipboard('tag870');return false;" class="tag-decoration">release-v2</div><div id="tag17194" onclick="CopyToClipboard('tag17194');return false;" class="tag-decoration">release-v2.7</div><div id="tag18720" onclick="CopyToClipboard('tag18720');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/462d742772171a001ec201d8536b04253c8e0518" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21065742385" target="_blank">2026-01-16 11:52:59</a></td></tr>
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
