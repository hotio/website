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
<tr><td><div id="tag4560" onclick="CopyToClipboard('tag4560');return false;" class="tag-decoration">nightly</div><div id="tag1501" onclick="CopyToClipboard('tag1501');return false;" class="tag-decoration">nightly-56a5974</div><div id="tag4019" onclick="CopyToClipboard('tag4019');return false;" class="tag-decoration">nightly-5bd31040c06e555e3a7c93c3af526dd70699974f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/56a59745b6834b1f90fa87ff6f6d086d0f77442c" target="_blank">Version update: 127a91ca9c8048a4cbafe5c5d1cbc18706bfd820 => 5bd31040c06e555e3a7c93c3af526dd70699974f</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21416683007" target="_blank">2026-01-27 22:27:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5448" onclick="CopyToClipboard('tag5448');return false;" class="tag-decoration">release</div><div id="tag21782" onclick="CopyToClipboard('tag21782');return false;" class="tag-decoration">release-05ef9c3</div><div id="tag24258" onclick="CopyToClipboard('tag24258');return false;" class="tag-decoration">release-2.7.3</div><div id="tag17117" onclick="CopyToClipboard('tag17117');return false;" class="tag-decoration">release-v2</div><div id="tag7726" onclick="CopyToClipboard('tag7726');return false;" class="tag-decoration">release-v2.7</div><div id="tag19053" onclick="CopyToClipboard('tag19053');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/05ef9c399b294d342f9dcd11cfb516430cb59d80" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/21354181861" target="_blank">2026-01-26 10:20:56</a></td></tr>
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
