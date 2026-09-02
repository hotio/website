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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32374" onclick="CopyToClipboard('tag32374');return false;" class="tag-decoration">v2</div><div id="tag9145" onclick="CopyToClipboard('tag9145');return false;" class="tag-decoration">v2-1879296</div><div id="tag7247" onclick="CopyToClipboard('tag7247');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag23779" onclick="CopyToClipboard('tag23779');return false;" class="tag-decoration">v2-v2</div><div id="tag6916" onclick="CopyToClipboard('tag6916');return false;" class="tag-decoration">v2-v2.2</div><div id="tag28584" onclick="CopyToClipboard('tag28584');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1879296a9fd1e316d9a9416686ce4398b7bff5a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580645170" target="_blank">2026-09-02 01:45:31</a></td></tr>
<tr><td><div id="tag2150" onclick="CopyToClipboard('tag2150');return false;" class="tag-decoration">v2-develop</div><div id="tag2764" onclick="CopyToClipboard('tag2764');return false;" class="tag-decoration">v2-develop-e783aaa</div><div id="tag29046" onclick="CopyToClipboard('tag29046');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag27441" onclick="CopyToClipboard('tag27441');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19402" onclick="CopyToClipboard('tag19402');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag18859" onclick="CopyToClipboard('tag18859');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e783aaaa0cdc2cf382b6bb473eb2846f7be2e3bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580644274" target="_blank">2026-09-02 01:45:30</a></td></tr>
<tr><td><div id="tag16724" onclick="CopyToClipboard('tag16724');return false;" class="tag-decoration">v3</div><div id="tag17132" onclick="CopyToClipboard('tag17132');return false;" class="tag-decoration">v3-31f4dcc</div><div id="tag11314" onclick="CopyToClipboard('tag11314');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag6906" onclick="CopyToClipboard('tag6906');return false;" class="tag-decoration">v3-v3</div><div id="tag29672" onclick="CopyToClipboard('tag29672');return false;" class="tag-decoration">v3-v3.4</div><div id="tag13449" onclick="CopyToClipboard('tag13449');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/31f4dcc00894e834723bfcbd40ff8f4f22ff7003" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580646301" target="_blank">2026-09-02 01:45:32</a></td></tr>
<tr><td><div id="tag11101" onclick="CopyToClipboard('tag11101');return false;" class="tag-decoration">v3-develop</div><div id="tag25675" onclick="CopyToClipboard('tag25675');return false;" class="tag-decoration">v3-develop-f20eb50</div><div id="tag6631" onclick="CopyToClipboard('tag6631');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1468</div><div id="tag18284" onclick="CopyToClipboard('tag18284');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4208" onclick="CopyToClipboard('tag4208');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag412" onclick="CopyToClipboard('tag412');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f20eb502939663be6eb80a4437876aab2166f06e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599365692" target="_blank">2026-09-02 06:33:19</a></td></tr>
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
