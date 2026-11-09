---
hide:
  - toc
title: hotio/slskd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag28059" onclick="CopyToClipboard('tag28059');return false;" class="tag-decoration">nightly</div><div id="tag8783" onclick="CopyToClipboard('tag8783');return false;" class="tag-decoration">nightly-3ae5c6b</div><div id="tag17715" onclick="CopyToClipboard('tag17715');return false;" class="tag-decoration">nightly-0.26.2.65534-2622c9b6</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/3ae5c6bd769ea774116844526fc0c8838543bcf6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/42570147419" target="_blank">2026-11-09 05:56:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29709" onclick="CopyToClipboard('tag29709');return false;" class="tag-decoration">release</div><div id="tag30690" onclick="CopyToClipboard('tag30690');return false;" class="tag-decoration">release-7d6659e</div><div id="tag4787" onclick="CopyToClipboard('tag4787');return false;" class="tag-decoration">release-0.26.2</div><div id="tag4160" onclick="CopyToClipboard('tag4160');return false;" class="tag-decoration">release-v0</div><div id="tag1697" onclick="CopyToClipboard('tag1697');return false;" class="tag-decoration">release-v0.26</div><div id="tag25686" onclick="CopyToClipboard('tag25686');return false;" class="tag-decoration">release-v0.26.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/7d6659efe36489ed86c977a5d5427e02662eb4d7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/42308580170" target="_blank">2026-11-06 22:58:09</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
