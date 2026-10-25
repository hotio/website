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
<tr><td><div id="tag10562" onclick="CopyToClipboard('tag10562');return false;" class="tag-decoration">nightly</div><div id="tag32385" onclick="CopyToClipboard('tag32385');return false;" class="tag-decoration">nightly-4e1e31a</div><div id="tag6819" onclick="CopyToClipboard('tag6819');return false;" class="tag-decoration">nightly-0.26.2.65534-a4cce04d</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/4e1e31aa2bc627228284870d8c2cee4d3a0873af" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/40220698906" target="_blank">2026-10-25 18:19:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag176" onclick="CopyToClipboard('tag176');return false;" class="tag-decoration">release</div><div id="tag18300" onclick="CopyToClipboard('tag18300');return false;" class="tag-decoration">release-d69e13e</div><div id="tag2647" onclick="CopyToClipboard('tag2647');return false;" class="tag-decoration">release-0.26.2</div><div id="tag20450" onclick="CopyToClipboard('tag20450');return false;" class="tag-decoration">release-v0</div><div id="tag12881" onclick="CopyToClipboard('tag12881');return false;" class="tag-decoration">release-v0.26</div><div id="tag8564" onclick="CopyToClipboard('tag8564');return false;" class="tag-decoration">release-v0.26.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/d69e13e63028d74e21202758d48becb4c63cfbb5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/40220702209" target="_blank">2026-10-25 18:19:31</a></td></tr>
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
