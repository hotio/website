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
<tr><td><div id="tag27573" onclick="CopyToClipboard('tag27573');return false;" class="tag-decoration">nightly</div><div id="tag28673" onclick="CopyToClipboard('tag28673');return false;" class="tag-decoration">nightly-3354609</div><div id="tag29520" onclick="CopyToClipboard('tag29520');return false;" class="tag-decoration">nightly-9a5c89fb967bdf609a68afba803534e9348d7d69</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/3354609f7db4a90a510560b371b217c8ab09a864" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/37405857448" target="_blank">2026-10-06 02:47:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6503" onclick="CopyToClipboard('tag6503');return false;" class="tag-decoration">release</div><div id="tag15698" onclick="CopyToClipboard('tag15698');return false;" class="tag-decoration">release-f2db770</div><div id="tag25078" onclick="CopyToClipboard('tag25078');return false;" class="tag-decoration">release-3.5.0</div><div id="tag30215" onclick="CopyToClipboard('tag30215');return false;" class="tag-decoration">release-v3</div><div id="tag14849" onclick="CopyToClipboard('tag14849');return false;" class="tag-decoration">release-v3.5</div><div id="tag21885" onclick="CopyToClipboard('tag21885');return false;" class="tag-decoration">release-v3.5.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/f2db7701ee5daba62431722c6023907a7e9ece2c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/37405866802" target="_blank">2026-10-06 02:47:38</a></td></tr>
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
