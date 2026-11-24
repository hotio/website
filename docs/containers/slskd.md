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
<tr><td><div id="tag32584" onclick="CopyToClipboard('tag32584');return false;" class="tag-decoration">nightly</div><div id="tag6028" onclick="CopyToClipboard('tag6028');return false;" class="tag-decoration">nightly-6d4265d</div><div id="tag12286" onclick="CopyToClipboard('tag12286');return false;" class="tag-decoration">nightly-0.26.2.65534-02f7849e</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/6d4265d1fe455778517d4c1ecf0b5c66e5117c68" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/45343838732" target="_blank">2026-11-24 06:53:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27332" onclick="CopyToClipboard('tag27332');return false;" class="tag-decoration">release</div><div id="tag177" onclick="CopyToClipboard('tag177');return false;" class="tag-decoration">release-2196426</div><div id="tag19981" onclick="CopyToClipboard('tag19981');return false;" class="tag-decoration">release-0.26.2</div><div id="tag16544" onclick="CopyToClipboard('tag16544');return false;" class="tag-decoration">release-v0</div><div id="tag28928" onclick="CopyToClipboard('tag28928');return false;" class="tag-decoration">release-v0.26</div><div id="tag16053" onclick="CopyToClipboard('tag16053');return false;" class="tag-decoration">release-v0.26.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/2196426d519a799c594c23eb7399475e58419425" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/45463397553" target="_blank">2026-11-24 18:47:58</a></td></tr>
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
