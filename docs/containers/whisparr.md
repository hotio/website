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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10560" onclick="CopyToClipboard('tag10560');return false;" class="tag-decoration">v2</div><div id="tag26869" onclick="CopyToClipboard('tag26869');return false;" class="tag-decoration">v2-3b89e2e</div><div id="tag5766" onclick="CopyToClipboard('tag5766');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag26286" onclick="CopyToClipboard('tag26286');return false;" class="tag-decoration">v2-v2</div><div id="tag614" onclick="CopyToClipboard('tag614');return false;" class="tag-decoration">v2-v2.2</div><div id="tag16353" onclick="CopyToClipboard('tag16353');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3b89e2e9a15c44c5415047148770ea51241447ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599372066" target="_blank">2026-09-02 06:33:24</a></td></tr>
<tr><td><div id="tag21724" onclick="CopyToClipboard('tag21724');return false;" class="tag-decoration">v2-develop</div><div id="tag14415" onclick="CopyToClipboard('tag14415');return false;" class="tag-decoration">v2-develop-1c0e956</div><div id="tag11453" onclick="CopyToClipboard('tag11453');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag5731" onclick="CopyToClipboard('tag5731');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag10800" onclick="CopyToClipboard('tag10800');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag9924" onclick="CopyToClipboard('tag9924');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1c0e9564c09c7d78cfa5ce72ca00f60cd5afa701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599363470" target="_blank">2026-09-02 06:33:17</a></td></tr>
<tr><td><div id="tag28331" onclick="CopyToClipboard('tag28331');return false;" class="tag-decoration">v3</div><div id="tag28927" onclick="CopyToClipboard('tag28927');return false;" class="tag-decoration">v3-7f610bc</div><div id="tag13234" onclick="CopyToClipboard('tag13234');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag1147" onclick="CopyToClipboard('tag1147');return false;" class="tag-decoration">v3-v3</div><div id="tag6650" onclick="CopyToClipboard('tag6650');return false;" class="tag-decoration">v3-v3.4</div><div id="tag1988" onclick="CopyToClipboard('tag1988');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7f610bcd319101e2d80ae6fc96d350998e687ff0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599360065" target="_blank">2026-09-02 06:33:15</a></td></tr>
<tr><td><div id="tag5513" onclick="CopyToClipboard('tag5513');return false;" class="tag-decoration">v3-develop</div><div id="tag840" onclick="CopyToClipboard('tag840');return false;" class="tag-decoration">v3-develop-9045dfb</div><div id="tag1096" onclick="CopyToClipboard('tag1096');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1534</div><div id="tag29817" onclick="CopyToClipboard('tag29817');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5698" onclick="CopyToClipboard('tag5698');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag29950" onclick="CopyToClipboard('tag29950');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9045dfb3604236b4bd32514bfb68867a303ce60e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33826957474" target="_blank">2026-09-04 01:45:17</a></td></tr>
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
