---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15997" onclick="CopyToClipboard('tag15997');return false;" class="tag-decoration">v2</div><div id="tag17292" onclick="CopyToClipboard('tag17292');return false;" class="tag-decoration">v2-3b89e2e</div><div id="tag2375" onclick="CopyToClipboard('tag2375');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag28028" onclick="CopyToClipboard('tag28028');return false;" class="tag-decoration">v2-v2</div><div id="tag15956" onclick="CopyToClipboard('tag15956');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8870" onclick="CopyToClipboard('tag8870');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3b89e2e9a15c44c5415047148770ea51241447ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599372066" target="_blank">2026-09-02 06:33:24</a></td></tr>
<tr><td><div id="tag15494" onclick="CopyToClipboard('tag15494');return false;" class="tag-decoration">v2-develop</div><div id="tag26638" onclick="CopyToClipboard('tag26638');return false;" class="tag-decoration">v2-develop-1c0e956</div><div id="tag2894" onclick="CopyToClipboard('tag2894');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag21052" onclick="CopyToClipboard('tag21052');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag7477" onclick="CopyToClipboard('tag7477');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22581" onclick="CopyToClipboard('tag22581');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1c0e9564c09c7d78cfa5ce72ca00f60cd5afa701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599363470" target="_blank">2026-09-02 06:33:17</a></td></tr>
<tr><td><div id="tag4367" onclick="CopyToClipboard('tag4367');return false;" class="tag-decoration">v3</div><div id="tag30515" onclick="CopyToClipboard('tag30515');return false;" class="tag-decoration">v3-7f610bc</div><div id="tag2811" onclick="CopyToClipboard('tag2811');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag7947" onclick="CopyToClipboard('tag7947');return false;" class="tag-decoration">v3-v3</div><div id="tag16390" onclick="CopyToClipboard('tag16390');return false;" class="tag-decoration">v3-v3.4</div><div id="tag8364" onclick="CopyToClipboard('tag8364');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7f610bcd319101e2d80ae6fc96d350998e687ff0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599360065" target="_blank">2026-09-02 06:33:15</a></td></tr>
<tr><td><div id="tag18992" onclick="CopyToClipboard('tag18992');return false;" class="tag-decoration">v3-develop</div><div id="tag20358" onclick="CopyToClipboard('tag20358');return false;" class="tag-decoration">v3-develop-d4b7c18</div><div id="tag23101" onclick="CopyToClipboard('tag23101');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1492</div><div id="tag2850" onclick="CopyToClipboard('tag2850');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag27500" onclick="CopyToClipboard('tag27500');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag16797" onclick="CopyToClipboard('tag16797');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d4b7c18d8509b04d63b395a994d094493775b702" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33688562693" target="_blank">2026-09-02 22:05:01</a></td></tr>
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
