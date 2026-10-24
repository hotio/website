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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7113" onclick="CopyToClipboard('tag7113');return false;" class="tag-decoration">v2</div><div id="tag11616" onclick="CopyToClipboard('tag11616');return false;" class="tag-decoration">v2-0a0eaeb</div><div id="tag14875" onclick="CopyToClipboard('tag14875');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag4528" onclick="CopyToClipboard('tag4528');return false;" class="tag-decoration">v2-v2</div><div id="tag31286" onclick="CopyToClipboard('tag31286');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17342" onclick="CopyToClipboard('tag17342');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0a0eaeba32fe888e16179725ddffe4ebeaccbe0c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070912628" target="_blank">2026-10-24 06:37:04</a></td></tr>
<tr><td><div id="tag4714" onclick="CopyToClipboard('tag4714');return false;" class="tag-decoration">v2-develop</div><div id="tag1811" onclick="CopyToClipboard('tag1811');return false;" class="tag-decoration">v2-develop-2c67e73</div><div id="tag27226" onclick="CopyToClipboard('tag27226');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag4845" onclick="CopyToClipboard('tag4845');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag1028" onclick="CopyToClipboard('tag1028');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag2635" onclick="CopyToClipboard('tag2635');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2c67e7393903510b35e0cd1776f445860fe305ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646374016" target="_blank">2026-10-21 17:43:44</a></td></tr>
<tr><td><div id="tag23853" onclick="CopyToClipboard('tag23853');return false;" class="tag-decoration">v3</div><div id="tag19549" onclick="CopyToClipboard('tag19549');return false;" class="tag-decoration">v3-2f7567a</div><div id="tag1100" onclick="CopyToClipboard('tag1100');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag11497" onclick="CopyToClipboard('tag11497');return false;" class="tag-decoration">v3-v3</div><div id="tag31603" onclick="CopyToClipboard('tag31603');return false;" class="tag-decoration">v3-v3.6</div><div id="tag30805" onclick="CopyToClipboard('tag30805');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/2f7567ac9afe8543f9534d645152abf2765a4f49" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39674895749" target="_blank">2026-10-21 20:58:21</a></td></tr>
<tr><td><div id="tag8817" onclick="CopyToClipboard('tag8817');return false;" class="tag-decoration">v3-develop</div><div id="tag30372" onclick="CopyToClipboard('tag30372');return false;" class="tag-decoration">v3-develop-0a811a3</div><div id="tag29123" onclick="CopyToClipboard('tag29123');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag9019" onclick="CopyToClipboard('tag9019');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14078" onclick="CopyToClipboard('tag14078');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag4389" onclick="CopyToClipboard('tag4389');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0a811a35eecb51b15b44c3edc57c0179c1458fe9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070918872" target="_blank">2026-10-24 06:37:09</a></td></tr>
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
