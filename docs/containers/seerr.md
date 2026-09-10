---
hide:
  - toc
title: hotio/seerr
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
<tr><td><div id="tag6634" onclick="CopyToClipboard('tag6634');return false;" class="tag-decoration">nightly</div><div id="tag5358" onclick="CopyToClipboard('tag5358');return false;" class="tag-decoration">nightly-8346964</div><div id="tag4741" onclick="CopyToClipboard('tag4741');return false;" class="tag-decoration">nightly-68c5bc8c7d8560d295387adeeee73982ea518e8f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/83469640f82c9930ecc3d7b3ef7ba43899b3303b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34435341960" target="_blank">2026-09-10 03:58:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24506" onclick="CopyToClipboard('tag24506');return false;" class="tag-decoration">release</div><div id="tag25802" onclick="CopyToClipboard('tag25802');return false;" class="tag-decoration">release-6a6ebc3</div><div id="tag20703" onclick="CopyToClipboard('tag20703');return false;" class="tag-decoration">release-3.4.1</div><div id="tag1033" onclick="CopyToClipboard('tag1033');return false;" class="tag-decoration">release-v3</div><div id="tag20834" onclick="CopyToClipboard('tag20834');return false;" class="tag-decoration">release-v3.4</div><div id="tag10862" onclick="CopyToClipboard('tag10862');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/6a6ebc34cde3d875f9ad1865a579b359c6409ea9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34435332822" target="_blank">2026-09-10 03:58:03</a></td></tr>
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
