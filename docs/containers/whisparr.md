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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24165" onclick="CopyToClipboard('tag24165');return false;" class="tag-decoration">nightly</div><div id="tag25055" onclick="CopyToClipboard('tag25055');return false;" class="tag-decoration">nightly-4594503</div><div id="tag16096" onclick="CopyToClipboard('tag16096');return false;" class="tag-decoration">nightly-2.0.0.2130</div></td><td>nightly</td><td><a href="https://github.com/hotio/whisparr/commit/459450367dd28104cc5d3efb792f583c48ee6176" target="_blank">Version update: 2.0.0.2125 => 2.0.0.2130</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21086684538" target="_blank">2026-01-17 02:08:25</a></td></tr>
<tr><td><div id="tag21822" onclick="CopyToClipboard('tag21822');return false;" class="tag-decoration">v3</div><div id="tag12898" onclick="CopyToClipboard('tag12898');return false;" class="tag-decoration">v3-8ac4afc</div><div id="tag10144" onclick="CopyToClipboard('tag10144');return false;" class="tag-decoration">v3-3.1.0.2116</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8ac4afce6648d1c2b1bff4f74f360952911c3ed3" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21090402246" target="_blank">2026-01-17 07:02:04</a></td></tr>
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
