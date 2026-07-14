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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29944" onclick="CopyToClipboard('tag29944');return false;" class="tag-decoration">v2</div><div id="tag24648" onclick="CopyToClipboard('tag24648');return false;" class="tag-decoration">v2-9422f24</div><div id="tag23383" onclick="CopyToClipboard('tag23383');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag9245" onclick="CopyToClipboard('tag9245');return false;" class="tag-decoration">v2-v2</div><div id="tag29374" onclick="CopyToClipboard('tag29374');return false;" class="tag-decoration">v2-v2.2</div><div id="tag25852" onclick="CopyToClipboard('tag25852');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9422f2405e40a0ac77d1ae1ebe8665f01e1d87b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322801194" target="_blank">2026-07-14 09:44:03</a></td></tr>
<tr><td><div id="tag29613" onclick="CopyToClipboard('tag29613');return false;" class="tag-decoration">v2-develop</div><div id="tag24879" onclick="CopyToClipboard('tag24879');return false;" class="tag-decoration">v2-develop-3e573cd</div><div id="tag29702" onclick="CopyToClipboard('tag29702');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag21211" onclick="CopyToClipboard('tag21211');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12990" onclick="CopyToClipboard('tag12990');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22757" onclick="CopyToClipboard('tag22757');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e573cd13f78f65341dd9fa843ce16aa58204fcf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356438023" target="_blank">2026-07-14 18:05:11</a></td></tr>
<tr><td><div id="tag2350" onclick="CopyToClipboard('tag2350');return false;" class="tag-decoration">v3</div><div id="tag5786" onclick="CopyToClipboard('tag5786');return false;" class="tag-decoration">v3-96c927c</div><div id="tag17899" onclick="CopyToClipboard('tag17899');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag23181" onclick="CopyToClipboard('tag23181');return false;" class="tag-decoration">v3-v3</div><div id="tag30619" onclick="CopyToClipboard('tag30619');return false;" class="tag-decoration">v3-v3.3</div><div id="tag31829" onclick="CopyToClipboard('tag31829');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/96c927c999444dcf3e635c4d14a11fabf4836ba2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322796800" target="_blank">2026-07-14 09:43:58</a></td></tr>
<tr><td><div id="tag21239" onclick="CopyToClipboard('tag21239');return false;" class="tag-decoration">v3-develop</div><div id="tag26331" onclick="CopyToClipboard('tag26331');return false;" class="tag-decoration">v3-develop-8a8108f</div><div id="tag18676" onclick="CopyToClipboard('tag18676');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag32600" onclick="CopyToClipboard('tag32600');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag1119" onclick="CopyToClipboard('tag1119');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag30982" onclick="CopyToClipboard('tag30982');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8a8108fa1ae6ac29a992c8e8ac3410e94301a740" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356445651" target="_blank">2026-07-14 18:05:18</a></td></tr>
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
