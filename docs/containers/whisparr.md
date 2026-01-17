---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14984" onclick="CopyToClipboard('tag14984');return false;" class="tag-decoration">nightly</div><div id="tag22960" onclick="CopyToClipboard('tag22960');return false;" class="tag-decoration">nightly-4594503</div><div id="tag28503" onclick="CopyToClipboard('tag28503');return false;" class="tag-decoration">nightly-2.0.0.2130</div></td><td>nightly</td><td><a href="https://github.com/hotio/whisparr/commit/459450367dd28104cc5d3efb792f583c48ee6176" target="_blank">Version update: 2.0.0.2125 => 2.0.0.2130</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21086684538" target="_blank">2026-01-17 02:08:25</a></td></tr>
<tr><td><div id="tag30325" onclick="CopyToClipboard('tag30325');return false;" class="tag-decoration">v3</div><div id="tag1931" onclick="CopyToClipboard('tag1931');return false;" class="tag-decoration">v3-17b2c40</div><div id="tag19772" onclick="CopyToClipboard('tag19772');return false;" class="tag-decoration">v3-3.1.0.2116</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/17b2c4000e8ec03b1464dd4fd1f844a75735b424" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21065748922" target="_blank">2026-01-16 11:53:15</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
