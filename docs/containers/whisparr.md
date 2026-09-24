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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19813" onclick="CopyToClipboard('tag19813');return false;" class="tag-decoration">v2</div><div id="tag1737" onclick="CopyToClipboard('tag1737');return false;" class="tag-decoration">v2-b17234c</div><div id="tag31257" onclick="CopyToClipboard('tag31257');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag11331" onclick="CopyToClipboard('tag11331');return false;" class="tag-decoration">v2-v2</div><div id="tag7024" onclick="CopyToClipboard('tag7024');return false;" class="tag-decoration">v2-v2.2</div><div id="tag24195" onclick="CopyToClipboard('tag24195');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag15997" onclick="CopyToClipboard('tag15997');return false;" class="tag-decoration">v2-develop</div><div id="tag2001" onclick="CopyToClipboard('tag2001');return false;" class="tag-decoration">v2-develop-17c4b95</div><div id="tag1176" onclick="CopyToClipboard('tag1176');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag8396" onclick="CopyToClipboard('tag8396');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag17431" onclick="CopyToClipboard('tag17431');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26361" onclick="CopyToClipboard('tag26361');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/17c4b956b22fac6e304c14d97d5b95a431f0c0e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960755350" target="_blank">2026-09-24 05:37:15</a></td></tr>
<tr><td><div id="tag31508" onclick="CopyToClipboard('tag31508');return false;" class="tag-decoration">v3</div><div id="tag15777" onclick="CopyToClipboard('tag15777');return false;" class="tag-decoration">v3-e36c32c</div><div id="tag26290" onclick="CopyToClipboard('tag26290');return false;" class="tag-decoration">v3-3.6.1-release.1708</div><div id="tag21690" onclick="CopyToClipboard('tag21690');return false;" class="tag-decoration">v3-v3</div><div id="tag16663" onclick="CopyToClipboard('tag16663');return false;" class="tag-decoration">v3-v3.6</div><div id="tag23972" onclick="CopyToClipboard('tag23972');return false;" class="tag-decoration">v3-v3.6.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e36c32c5776e543477a023bde7c6a6f366fd35a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527361" target="_blank">2026-09-22 08:00:55</a></td></tr>
<tr><td><div id="tag31796" onclick="CopyToClipboard('tag31796');return false;" class="tag-decoration">v3-develop</div><div id="tag12850" onclick="CopyToClipboard('tag12850');return false;" class="tag-decoration">v3-develop-7f8cd2c</div><div id="tag28482" onclick="CopyToClipboard('tag28482');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1724</div><div id="tag17943" onclick="CopyToClipboard('tag17943');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31564" onclick="CopyToClipboard('tag31564');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag24501" onclick="CopyToClipboard('tag24501');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7f8cd2c5aacf6c62586787806d6f77144baa6b05" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35925128552" target="_blank">2026-09-23 21:52:57</a></td></tr>
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
