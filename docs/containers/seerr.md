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
<tr><td><div id="tag23982" onclick="CopyToClipboard('tag23982');return false;" class="tag-decoration">nightly</div><div id="tag13787" onclick="CopyToClipboard('tag13787');return false;" class="tag-decoration">nightly-a6593c0</div><div id="tag32616" onclick="CopyToClipboard('tag32616');return false;" class="tag-decoration">nightly-4ed29cf1c5e9ee8852f557ed62013bd9b68dfc01</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a6593c076b72708d69913b194f0f6b1d4db53bf8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26371551028" target="_blank">2026-05-24 20:10:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6295" onclick="CopyToClipboard('tag6295');return false;" class="tag-decoration">release</div><div id="tag9093" onclick="CopyToClipboard('tag9093');return false;" class="tag-decoration">release-46c910f</div><div id="tag10652" onclick="CopyToClipboard('tag10652');return false;" class="tag-decoration">release-3.2.0</div><div id="tag19937" onclick="CopyToClipboard('tag19937');return false;" class="tag-decoration">release-v3</div><div id="tag443" onclick="CopyToClipboard('tag443');return false;" class="tag-decoration">release-v3.2</div><div id="tag32007" onclick="CopyToClipboard('tag32007');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/46c910fd420e717e3a4e1c267780898d4ba71835" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26363879226" target="_blank">2026-05-24 14:27:20</a></td></tr>
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
