---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25466" onclick="CopyToClipboard('tag25466');return false;" class="tag-decoration">release</div><div id="tag6992" onclick="CopyToClipboard('tag6992');return false;" class="tag-decoration">release-2d9c387</div><div id="tag27823" onclick="CopyToClipboard('tag27823');return false;" class="tag-decoration">release-0.24.2267</div><div id="tag433" onclick="CopyToClipboard('tag433');return false;" class="tag-decoration">release-v0</div><div id="tag3589" onclick="CopyToClipboard('tag3589');return false;" class="tag-decoration">release-v0.24</div><div id="tag29383" onclick="CopyToClipboard('tag29383');return false;" class="tag-decoration">release-v0.24.2267</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2d9c387f112d86ac198036b2dc04389ad8e1a9d4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30147212680" target="_blank">2026-07-25 06:16:14</a></td></tr>
<tr><td><div id="tag15687" onclick="CopyToClipboard('tag15687');return false;" class="tag-decoration">testing</div><div id="tag31440" onclick="CopyToClipboard('tag31440');return false;" class="tag-decoration">testing-347cf00</div><div id="tag30371" onclick="CopyToClipboard('tag30371');return false;" class="tag-decoration">testing-0.24.2267</div><div id="tag12891" onclick="CopyToClipboard('tag12891');return false;" class="tag-decoration">testing-v0</div><div id="tag17480" onclick="CopyToClipboard('tag17480');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13379" onclick="CopyToClipboard('tag13379');return false;" class="tag-decoration">testing-v0.24.2267</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/347cf00ef26a065b32e0fc87597b7658ee8bbf36" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30147212363" target="_blank">2026-07-25 06:16:13</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
