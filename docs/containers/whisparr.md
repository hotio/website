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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16515" onclick="CopyToClipboard('tag16515');return false;" class="tag-decoration">v2</div><div id="tag2800" onclick="CopyToClipboard('tag2800');return false;" class="tag-decoration">v2-a5e82ed</div><div id="tag26503" onclick="CopyToClipboard('tag26503');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag31808" onclick="CopyToClipboard('tag31808');return false;" class="tag-decoration">v2-v2</div><div id="tag19279" onclick="CopyToClipboard('tag19279');return false;" class="tag-decoration">v2-v2.2</div><div id="tag1547" onclick="CopyToClipboard('tag1547');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a5e82ed216cdcb7da19ff249a280b02c26c4afad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446318899" target="_blank">2026-06-30 13:02:02</a></td></tr>
<tr><td><div id="tag9448" onclick="CopyToClipboard('tag9448');return false;" class="tag-decoration">v2-develop</div><div id="tag8262" onclick="CopyToClipboard('tag8262');return false;" class="tag-decoration">v2-develop-f89e86e</div><div id="tag11173" onclick="CopyToClipboard('tag11173');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag31577" onclick="CopyToClipboard('tag31577');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26995" onclick="CopyToClipboard('tag26995');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag29808" onclick="CopyToClipboard('tag29808');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f89e86e6e83b59aa19c3ec0cb2fad495892cb9be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446312286" target="_blank">2026-06-30 13:01:57</a></td></tr>
<tr><td><div id="tag20077" onclick="CopyToClipboard('tag20077');return false;" class="tag-decoration">v3</div><div id="tag22323" onclick="CopyToClipboard('tag22323');return false;" class="tag-decoration">v3-c514abc</div><div id="tag30246" onclick="CopyToClipboard('tag30246');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag30330" onclick="CopyToClipboard('tag30330');return false;" class="tag-decoration">v3-v3</div><div id="tag7253" onclick="CopyToClipboard('tag7253');return false;" class="tag-decoration">v3-v3.3</div><div id="tag19477" onclick="CopyToClipboard('tag19477');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/c514abcc95b2d169b93f9aa8c6e4846252f8008c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591501776" target="_blank">2026-07-02 12:52:54</a></td></tr>
<tr><td><div id="tag15896" onclick="CopyToClipboard('tag15896');return false;" class="tag-decoration">v3-develop</div><div id="tag16838" onclick="CopyToClipboard('tag16838');return false;" class="tag-decoration">v3-develop-8e1ff14</div><div id="tag29497" onclick="CopyToClipboard('tag29497');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag10732" onclick="CopyToClipboard('tag10732');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag1548" onclick="CopyToClipboard('tag1548');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag26630" onclick="CopyToClipboard('tag26630');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8e1ff141e1ceb80b9fa804d72b6e80369bd87eaa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446320852" target="_blank">2026-06-30 13:02:06</a></td></tr>
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
