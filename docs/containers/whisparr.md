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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21160" onclick="CopyToClipboard('tag21160');return false;" class="tag-decoration">v2</div><div id="tag16139" onclick="CopyToClipboard('tag16139');return false;" class="tag-decoration">v2-a5e82ed</div><div id="tag13264" onclick="CopyToClipboard('tag13264');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag30656" onclick="CopyToClipboard('tag30656');return false;" class="tag-decoration">v2-v2</div><div id="tag8053" onclick="CopyToClipboard('tag8053');return false;" class="tag-decoration">v2-v2.2</div><div id="tag28244" onclick="CopyToClipboard('tag28244');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a5e82ed216cdcb7da19ff249a280b02c26c4afad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446318899" target="_blank">2026-06-30 13:02:02</a></td></tr>
<tr><td><div id="tag23044" onclick="CopyToClipboard('tag23044');return false;" class="tag-decoration">v2-develop</div><div id="tag7556" onclick="CopyToClipboard('tag7556');return false;" class="tag-decoration">v2-develop-f89e86e</div><div id="tag30305" onclick="CopyToClipboard('tag30305');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag16924" onclick="CopyToClipboard('tag16924');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9395" onclick="CopyToClipboard('tag9395');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15579" onclick="CopyToClipboard('tag15579');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f89e86e6e83b59aa19c3ec0cb2fad495892cb9be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446312286" target="_blank">2026-06-30 13:01:57</a></td></tr>
<tr><td><div id="tag27864" onclick="CopyToClipboard('tag27864');return false;" class="tag-decoration">v3</div><div id="tag19294" onclick="CopyToClipboard('tag19294');return false;" class="tag-decoration">v3-e28b35c</div><div id="tag15568" onclick="CopyToClipboard('tag15568');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag1354" onclick="CopyToClipboard('tag1354');return false;" class="tag-decoration">v3-v3</div><div id="tag4463" onclick="CopyToClipboard('tag4463');return false;" class="tag-decoration">v3-v3.3</div><div id="tag5037" onclick="CopyToClipboard('tag5037');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e28b35c45131e5cc421b92a5cbe27a277d12aebc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446312811" target="_blank">2026-06-30 13:01:59</a></td></tr>
<tr><td><div id="tag15076" onclick="CopyToClipboard('tag15076');return false;" class="tag-decoration">v3-develop</div><div id="tag15396" onclick="CopyToClipboard('tag15396');return false;" class="tag-decoration">v3-develop-8e1ff14</div><div id="tag1085" onclick="CopyToClipboard('tag1085');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag8053" onclick="CopyToClipboard('tag8053');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4758" onclick="CopyToClipboard('tag4758');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag6361" onclick="CopyToClipboard('tag6361');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8e1ff141e1ceb80b9fa804d72b6e80369bd87eaa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446320852" target="_blank">2026-06-30 13:02:06</a></td></tr>
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
