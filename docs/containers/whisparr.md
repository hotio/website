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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12291" onclick="CopyToClipboard('tag12291');return false;" class="tag-decoration">v2</div><div id="tag19967" onclick="CopyToClipboard('tag19967');return false;" class="tag-decoration">v2-3b89e2e</div><div id="tag23060" onclick="CopyToClipboard('tag23060');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag2817" onclick="CopyToClipboard('tag2817');return false;" class="tag-decoration">v2-v2</div><div id="tag13898" onclick="CopyToClipboard('tag13898');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15244" onclick="CopyToClipboard('tag15244');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3b89e2e9a15c44c5415047148770ea51241447ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599372066" target="_blank">2026-09-02 06:33:24</a></td></tr>
<tr><td><div id="tag19227" onclick="CopyToClipboard('tag19227');return false;" class="tag-decoration">v2-develop</div><div id="tag11579" onclick="CopyToClipboard('tag11579');return false;" class="tag-decoration">v2-develop-1c0e956</div><div id="tag16266" onclick="CopyToClipboard('tag16266');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag29560" onclick="CopyToClipboard('tag29560');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag16467" onclick="CopyToClipboard('tag16467');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10313" onclick="CopyToClipboard('tag10313');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1c0e9564c09c7d78cfa5ce72ca00f60cd5afa701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599363470" target="_blank">2026-09-02 06:33:17</a></td></tr>
<tr><td><div id="tag19182" onclick="CopyToClipboard('tag19182');return false;" class="tag-decoration">v3</div><div id="tag14717" onclick="CopyToClipboard('tag14717');return false;" class="tag-decoration">v3-7f610bc</div><div id="tag3983" onclick="CopyToClipboard('tag3983');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag7223" onclick="CopyToClipboard('tag7223');return false;" class="tag-decoration">v3-v3</div><div id="tag11082" onclick="CopyToClipboard('tag11082');return false;" class="tag-decoration">v3-v3.4</div><div id="tag21044" onclick="CopyToClipboard('tag21044');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7f610bcd319101e2d80ae6fc96d350998e687ff0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599360065" target="_blank">2026-09-02 06:33:15</a></td></tr>
<tr><td><div id="tag3176" onclick="CopyToClipboard('tag3176');return false;" class="tag-decoration">v3-develop</div><div id="tag16003" onclick="CopyToClipboard('tag16003');return false;" class="tag-decoration">v3-develop-209a102</div><div id="tag30428" onclick="CopyToClipboard('tag30428');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1480</div><div id="tag1538" onclick="CopyToClipboard('tag1538');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4036" onclick="CopyToClipboard('tag4036');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag14981" onclick="CopyToClipboard('tag14981');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/209a10210b11206288506b435cad7b9257f33bf4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33670877050" target="_blank">2026-09-02 19:02:13</a></td></tr>
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
