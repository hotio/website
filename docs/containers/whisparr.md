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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8725" onclick="CopyToClipboard('tag8725');return false;" class="tag-decoration">v2</div><div id="tag16641" onclick="CopyToClipboard('tag16641');return false;" class="tag-decoration">v2-1879296</div><div id="tag12532" onclick="CopyToClipboard('tag12532');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7773" onclick="CopyToClipboard('tag7773');return false;" class="tag-decoration">v2-v2</div><div id="tag25391" onclick="CopyToClipboard('tag25391');return false;" class="tag-decoration">v2-v2.2</div><div id="tag5891" onclick="CopyToClipboard('tag5891');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1879296a9fd1e316d9a9416686ce4398b7bff5a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580645170" target="_blank">2026-09-02 01:45:31</a></td></tr>
<tr><td><div id="tag413" onclick="CopyToClipboard('tag413');return false;" class="tag-decoration">v2-develop</div><div id="tag26248" onclick="CopyToClipboard('tag26248');return false;" class="tag-decoration">v2-develop-e783aaa</div><div id="tag4749" onclick="CopyToClipboard('tag4749');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag9666" onclick="CopyToClipboard('tag9666');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag30511" onclick="CopyToClipboard('tag30511');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag29757" onclick="CopyToClipboard('tag29757');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e783aaaa0cdc2cf382b6bb473eb2846f7be2e3bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580644274" target="_blank">2026-09-02 01:45:30</a></td></tr>
<tr><td><div id="tag10148" onclick="CopyToClipboard('tag10148');return false;" class="tag-decoration">v3</div><div id="tag20686" onclick="CopyToClipboard('tag20686');return false;" class="tag-decoration">v3-31f4dcc</div><div id="tag26643" onclick="CopyToClipboard('tag26643');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag7239" onclick="CopyToClipboard('tag7239');return false;" class="tag-decoration">v3-v3</div><div id="tag16" onclick="CopyToClipboard('tag16');return false;" class="tag-decoration">v3-v3.4</div><div id="tag7374" onclick="CopyToClipboard('tag7374');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/31f4dcc00894e834723bfcbd40ff8f4f22ff7003" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580646301" target="_blank">2026-09-02 01:45:32</a></td></tr>
<tr><td><div id="tag866" onclick="CopyToClipboard('tag866');return false;" class="tag-decoration">v3-develop</div><div id="tag23558" onclick="CopyToClipboard('tag23558');return false;" class="tag-decoration">v3-develop-cc3d72c</div><div id="tag10893" onclick="CopyToClipboard('tag10893');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1454</div><div id="tag28885" onclick="CopyToClipboard('tag28885');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15919" onclick="CopyToClipboard('tag15919');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag6483" onclick="CopyToClipboard('tag6483');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/cc3d72cbfa3fa7b02035bb388345e3e407b5a661" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33580646245" target="_blank">2026-09-02 01:45:32</a></td></tr>
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
