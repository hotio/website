---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag631" onclick="CopyToClipboard('tag631');return false;" class="tag-decoration">release</div><div id="tag16350" onclick="CopyToClipboard('tag16350');return false;" class="tag-decoration">release-cd11a23</div><div id="tag20737" onclick="CopyToClipboard('tag20737');return false;" class="tag-decoration">release-9.3.2</div><div id="tag1662" onclick="CopyToClipboard('tag1662');return false;" class="tag-decoration">release-v9</div><div id="tag28153" onclick="CopyToClipboard('tag28153');return false;" class="tag-decoration">release-v9.3</div><div id="tag8841" onclick="CopyToClipboard('tag8841');return false;" class="tag-decoration">release-v9.3.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/cd11a234391623d210fb6e8467b6f2f49ebc0b4f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/44160481334" target="_blank">2026-11-17 19:36:53</a></td></tr>
<tr><td><div id="tag21652" onclick="CopyToClipboard('tag21652');return false;" class="tag-decoration">testing</div><div id="tag28225" onclick="CopyToClipboard('tag28225');return false;" class="tag-decoration">testing-2024339</div><div id="tag15768" onclick="CopyToClipboard('tag15768');return false;" class="tag-decoration">testing-9.3.3</div><div id="tag12480" onclick="CopyToClipboard('tag12480');return false;" class="tag-decoration">testing-v9</div><div id="tag6813" onclick="CopyToClipboard('tag6813');return false;" class="tag-decoration">testing-v9.3</div><div id="tag24435" onclick="CopyToClipboard('tag24435');return false;" class="tag-decoration">testing-v9.3.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/20243394e5c1e635699d22c46a5be06e638ff2a6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/44592212030" target="_blank">2026-11-19 18:51:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
