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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26718" onclick="CopyToClipboard('tag26718');return false;" class="tag-decoration">v2</div><div id="tag10874" onclick="CopyToClipboard('tag10874');return false;" class="tag-decoration">v2-a5e82ed</div><div id="tag875" onclick="CopyToClipboard('tag875');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag20061" onclick="CopyToClipboard('tag20061');return false;" class="tag-decoration">v2-v2</div><div id="tag10062" onclick="CopyToClipboard('tag10062');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7966" onclick="CopyToClipboard('tag7966');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a5e82ed216cdcb7da19ff249a280b02c26c4afad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446318899" target="_blank">2026-06-30 13:02:02</a></td></tr>
<tr><td><div id="tag8728" onclick="CopyToClipboard('tag8728');return false;" class="tag-decoration">v2-develop</div><div id="tag14551" onclick="CopyToClipboard('tag14551');return false;" class="tag-decoration">v2-develop-f89e86e</div><div id="tag1592" onclick="CopyToClipboard('tag1592');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag17668" onclick="CopyToClipboard('tag17668');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag27456" onclick="CopyToClipboard('tag27456');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag6682" onclick="CopyToClipboard('tag6682');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f89e86e6e83b59aa19c3ec0cb2fad495892cb9be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446312286" target="_blank">2026-06-30 13:01:57</a></td></tr>
<tr><td><div id="tag15932" onclick="CopyToClipboard('tag15932');return false;" class="tag-decoration">v3</div><div id="tag429" onclick="CopyToClipboard('tag429');return false;" class="tag-decoration">v3-e28b35c</div><div id="tag11594" onclick="CopyToClipboard('tag11594');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag29339" onclick="CopyToClipboard('tag29339');return false;" class="tag-decoration">v3-v3</div><div id="tag17889" onclick="CopyToClipboard('tag17889');return false;" class="tag-decoration">v3-v3.3</div><div id="tag14515" onclick="CopyToClipboard('tag14515');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e28b35c45131e5cc421b92a5cbe27a277d12aebc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446312811" target="_blank">2026-06-30 13:01:59</a></td></tr>
<tr><td><div id="tag30915" onclick="CopyToClipboard('tag30915');return false;" class="tag-decoration">v3-develop</div><div id="tag6970" onclick="CopyToClipboard('tag6970');return false;" class="tag-decoration">v3-develop-47e7b82</div><div id="tag30956" onclick="CopyToClipboard('tag30956');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag17098" onclick="CopyToClipboard('tag17098');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19427" onclick="CopyToClipboard('tag19427');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag1866" onclick="CopyToClipboard('tag1866');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/47e7b82111cae0f8d612b5c0ea42ff88d0e114d1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395536353" target="_blank">2026-06-29 18:56:44</a></td></tr>
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
