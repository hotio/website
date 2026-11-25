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
<tr><td><div id="tag32713" onclick="CopyToClipboard('tag32713');return false;" class="tag-decoration">nightly</div><div id="tag5253" onclick="CopyToClipboard('tag5253');return false;" class="tag-decoration">nightly-a21498a</div><div id="tag7060" onclick="CopyToClipboard('tag7060');return false;" class="tag-decoration">nightly-3f3fee5e6166a45599caa02f217e356a1b0719d3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a21498aed3d2dbb13b78f0eddd7141ce6e41a835" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/45530282175" target="_blank">2026-11-25 02:04:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14352" onclick="CopyToClipboard('tag14352');return false;" class="tag-decoration">release</div><div id="tag7912" onclick="CopyToClipboard('tag7912');return false;" class="tag-decoration">release-d2d2ccd</div><div id="tag21443" onclick="CopyToClipboard('tag21443');return false;" class="tag-decoration">release-3.5.2</div><div id="tag28015" onclick="CopyToClipboard('tag28015');return false;" class="tag-decoration">release-v3</div><div id="tag26513" onclick="CopyToClipboard('tag26513');return false;" class="tag-decoration">release-v3.5</div><div id="tag6007" onclick="CopyToClipboard('tag6007');return false;" class="tag-decoration">release-v3.5.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/d2d2ccd79e0c8e6e31c2c1f109299c16e07f91ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/45530270123" target="_blank">2026-11-25 02:04:00</a></td></tr>
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
