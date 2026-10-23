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
<tr><td><div id="tag28074" onclick="CopyToClipboard('tag28074');return false;" class="tag-decoration">nightly</div><div id="tag24580" onclick="CopyToClipboard('tag24580');return false;" class="tag-decoration">nightly-34727f7</div><div id="tag24790" onclick="CopyToClipboard('tag24790');return false;" class="tag-decoration">nightly-3153656fc6549ebc5437f5c682d235a9a9a2377d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/34727f7bae804c0f69021a279d185f3f27a1e3c9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/39972597343" target="_blank">2026-10-23 14:47:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11057" onclick="CopyToClipboard('tag11057');return false;" class="tag-decoration">release</div><div id="tag23610" onclick="CopyToClipboard('tag23610');return false;" class="tag-decoration">release-3c4b7a1</div><div id="tag19108" onclick="CopyToClipboard('tag19108');return false;" class="tag-decoration">release-3.5.1</div><div id="tag10924" onclick="CopyToClipboard('tag10924');return false;" class="tag-decoration">release-v3</div><div id="tag2206" onclick="CopyToClipboard('tag2206');return false;" class="tag-decoration">release-v3.5</div><div id="tag5946" onclick="CopyToClipboard('tag5946');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/3c4b7a1f0d3bd323c94ae839a306090437838896" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/39691265227" target="_blank">2026-10-21 23:06:59</a></td></tr>
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
