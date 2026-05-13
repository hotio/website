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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28008" onclick="CopyToClipboard('tag28008');return false;" class="tag-decoration">release</div><div id="tag1733" onclick="CopyToClipboard('tag1733');return false;" class="tag-decoration">release-0fa246f</div><div id="tag2817" onclick="CopyToClipboard('tag2817');return false;" class="tag-decoration">release-0.24.1849</div><div id="tag18188" onclick="CopyToClipboard('tag18188');return false;" class="tag-decoration">release-v0</div><div id="tag27980" onclick="CopyToClipboard('tag27980');return false;" class="tag-decoration">release-v0.24</div><div id="tag5951" onclick="CopyToClipboard('tag5951');return false;" class="tag-decoration">release-v0.24.1849</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0fa246f22696989d6197422e11088c0f715ed6e3" target="_blank">Version update: 0.24.1846 => 0.24.1849</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25787462469" target="_blank">2026-05-13 08:24:53</a></td></tr>
<tr><td><div id="tag5072" onclick="CopyToClipboard('tag5072');return false;" class="tag-decoration">testing</div><div id="tag27495" onclick="CopyToClipboard('tag27495');return false;" class="tag-decoration">testing-bb63eb5</div><div id="tag951" onclick="CopyToClipboard('tag951');return false;" class="tag-decoration">testing-0.24.1849</div><div id="tag29411" onclick="CopyToClipboard('tag29411');return false;" class="tag-decoration">testing-v0</div><div id="tag2" onclick="CopyToClipboard('tag2');return false;" class="tag-decoration">testing-v0.24</div><div id="tag12632" onclick="CopyToClipboard('tag12632');return false;" class="tag-decoration">testing-v0.24.1849</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/bb63eb5778dfdf8604b5c4ecce6dbdf9503e0639" target="_blank">Version update: 0.24.1846 => 0.24.1849</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25787463823" target="_blank">2026-05-13 08:24:55</a></td></tr>
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
