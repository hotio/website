---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28405" onclick="CopyToClipboard('tag28405');return false;" class="tag-decoration">release</div><div id="tag29888" onclick="CopyToClipboard('tag29888');return false;" class="tag-decoration">release-8c5e88a</div><div id="tag21529" onclick="CopyToClipboard('tag21529');return false;" class="tag-decoration">release-0.24.2517</div><div id="tag19115" onclick="CopyToClipboard('tag19115');return false;" class="tag-decoration">release-v0</div><div id="tag23409" onclick="CopyToClipboard('tag23409');return false;" class="tag-decoration">release-v0.24</div><div id="tag22243" onclick="CopyToClipboard('tag22243');return false;" class="tag-decoration">release-v0.24.2517</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8c5e88a86280ecbcba5ecfb857b584d2532df67e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33547236424" target="_blank">2026-09-01 19:03:05</a></td></tr>
<tr><td><div id="tag3085" onclick="CopyToClipboard('tag3085');return false;" class="tag-decoration">testing</div><div id="tag20633" onclick="CopyToClipboard('tag20633');return false;" class="tag-decoration">testing-bc02d2d</div><div id="tag30465" onclick="CopyToClipboard('tag30465');return false;" class="tag-decoration">testing-0.24.2517</div><div id="tag32071" onclick="CopyToClipboard('tag32071');return false;" class="tag-decoration">testing-v0</div><div id="tag29096" onclick="CopyToClipboard('tag29096');return false;" class="tag-decoration">testing-v0.24</div><div id="tag29760" onclick="CopyToClipboard('tag29760');return false;" class="tag-decoration">testing-v0.24.2517</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/bc02d2dbe21f64ef7f07077783a49fb4589df75a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33547228219" target="_blank">2026-09-01 19:03:00</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
