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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16512" onclick="CopyToClipboard('tag16512');return false;" class="tag-decoration">v2</div><div id="tag2565" onclick="CopyToClipboard('tag2565');return false;" class="tag-decoration">v2-1879296</div><div id="tag16518" onclick="CopyToClipboard('tag16518');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7429" onclick="CopyToClipboard('tag7429');return false;" class="tag-decoration">v2-v2</div><div id="tag31801" onclick="CopyToClipboard('tag31801');return false;" class="tag-decoration">v2-v2.2</div><div id="tag12882" onclick="CopyToClipboard('tag12882');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1879296a9fd1e316d9a9416686ce4398b7bff5a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580645170" target="_blank">2026-09-02 01:45:31</a></td></tr>
<tr><td><div id="tag12460" onclick="CopyToClipboard('tag12460');return false;" class="tag-decoration">v2-develop</div><div id="tag14665" onclick="CopyToClipboard('tag14665');return false;" class="tag-decoration">v2-develop-1c0e956</div><div id="tag5605" onclick="CopyToClipboard('tag5605');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag8203" onclick="CopyToClipboard('tag8203');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29106" onclick="CopyToClipboard('tag29106');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag20758" onclick="CopyToClipboard('tag20758');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1c0e9564c09c7d78cfa5ce72ca00f60cd5afa701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599363470" target="_blank">2026-09-02 06:33:17</a></td></tr>
<tr><td><div id="tag32348" onclick="CopyToClipboard('tag32348');return false;" class="tag-decoration">v3</div><div id="tag27367" onclick="CopyToClipboard('tag27367');return false;" class="tag-decoration">v3-7f610bc</div><div id="tag22213" onclick="CopyToClipboard('tag22213');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag31550" onclick="CopyToClipboard('tag31550');return false;" class="tag-decoration">v3-v3</div><div id="tag10580" onclick="CopyToClipboard('tag10580');return false;" class="tag-decoration">v3-v3.4</div><div id="tag923" onclick="CopyToClipboard('tag923');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7f610bcd319101e2d80ae6fc96d350998e687ff0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599360065" target="_blank">2026-09-02 06:33:15</a></td></tr>
<tr><td><div id="tag19445" onclick="CopyToClipboard('tag19445');return false;" class="tag-decoration">v3-develop</div><div id="tag10227" onclick="CopyToClipboard('tag10227');return false;" class="tag-decoration">v3-develop-f20eb50</div><div id="tag27524" onclick="CopyToClipboard('tag27524');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1468</div><div id="tag17195" onclick="CopyToClipboard('tag17195');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17035" onclick="CopyToClipboard('tag17035');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag2777" onclick="CopyToClipboard('tag2777');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f20eb502939663be6eb80a4437876aab2166f06e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599365692" target="_blank">2026-09-02 06:33:19</a></td></tr>
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
