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
<tr><td><div id="tag8521" onclick="CopyToClipboard('tag8521');return false;" class="tag-decoration">nightly</div><div id="tag9690" onclick="CopyToClipboard('tag9690');return false;" class="tag-decoration">nightly-374a161</div><div id="tag31259" onclick="CopyToClipboard('tag31259');return false;" class="tag-decoration">nightly-cf8720515c98130436fa321fc8498b3b1df38772</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/374a161dc811127a58cc97526fda762116e52854" target="_blank">Version update: dfde4d34e69732935c0ffa72da4d1f15469b6774 => cf8720515c98130436fa321fc8498b3b1df38772</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25772582168" target="_blank">2026-05-13 01:31:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19992" onclick="CopyToClipboard('tag19992');return false;" class="tag-decoration">release</div><div id="tag31629" onclick="CopyToClipboard('tag31629');return false;" class="tag-decoration">release-515b38f</div><div id="tag19158" onclick="CopyToClipboard('tag19158');return false;" class="tag-decoration">release-3.2.0</div><div id="tag22579" onclick="CopyToClipboard('tag22579');return false;" class="tag-decoration">release-v3</div><div id="tag5002" onclick="CopyToClipboard('tag5002');return false;" class="tag-decoration">release-v3.2</div><div id="tag25047" onclick="CopyToClipboard('tag25047');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/515b38fe138874f893bf72af5f6e90d4e0996d96" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25715025698" target="_blank">2026-05-12 05:18:50</a></td></tr>
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
