---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag22357" onclick="CopyToClipboard('tag22357');return false;" class="tag-decoration">nightly</div><div id="tag12685" onclick="CopyToClipboard('tag12685');return false;" class="tag-decoration">nightly-9aafce5</div><div id="tag6425" onclick="CopyToClipboard('tag6425');return false;" class="tag-decoration">nightly-dfde4d34e69732935c0ffa72da4d1f15469b6774</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/9aafce5d61539a401fd3af9478f75cf66120c721" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25701937093" target="_blank">2026-05-11 22:49:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14571" onclick="CopyToClipboard('tag14571');return false;" class="tag-decoration">release</div><div id="tag20421" onclick="CopyToClipboard('tag20421');return false;" class="tag-decoration">release-33d2f4a</div><div id="tag10597" onclick="CopyToClipboard('tag10597');return false;" class="tag-decoration">release-3.2.0</div><div id="tag2675" onclick="CopyToClipboard('tag2675');return false;" class="tag-decoration">release-v3</div><div id="tag3225" onclick="CopyToClipboard('tag3225');return false;" class="tag-decoration">release-v3.2</div><div id="tag29280" onclick="CopyToClipboard('tag29280');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/33d2f4abe625460eaa45dd107c9aa36c243ea1ec" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25701970881" target="_blank">2026-05-11 22:50:30</a></td></tr>
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
