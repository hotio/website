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
<tr><td><div id="tag20834" onclick="CopyToClipboard('tag20834');return false;" class="tag-decoration">nightly</div><div id="tag19368" onclick="CopyToClipboard('tag19368');return false;" class="tag-decoration">nightly-55c3f27</div><div id="tag17619" onclick="CopyToClipboard('tag17619');return false;" class="tag-decoration">nightly-448a25e2a4bb869d765bcd084d803de98275de48</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/55c3f275df93e72b2e4b7d0a6648cf5a2735325c" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21065742122" target="_blank">2026-01-16 11:52:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13655" onclick="CopyToClipboard('tag13655');return false;" class="tag-decoration">release</div><div id="tag12814" onclick="CopyToClipboard('tag12814');return false;" class="tag-decoration">release-462d742</div><div id="tag14403" onclick="CopyToClipboard('tag14403');return false;" class="tag-decoration">release-2.7.3</div><div id="tag24403" onclick="CopyToClipboard('tag24403');return false;" class="tag-decoration">release-v2</div><div id="tag92" onclick="CopyToClipboard('tag92');return false;" class="tag-decoration">release-v2.7</div><div id="tag1436" onclick="CopyToClipboard('tag1436');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/462d742772171a001ec201d8536b04253c8e0518" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21065742385" target="_blank">2026-01-16 11:52:59</a></td></tr>
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
