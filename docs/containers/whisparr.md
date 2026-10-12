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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19736" onclick="CopyToClipboard('tag19736');return false;" class="tag-decoration">v2</div><div id="tag18239" onclick="CopyToClipboard('tag18239');return false;" class="tag-decoration">v2-998495f</div><div id="tag32704" onclick="CopyToClipboard('tag32704');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag17389" onclick="CopyToClipboard('tag17389');return false;" class="tag-decoration">v2-v2</div><div id="tag18544" onclick="CopyToClipboard('tag18544');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7501" onclick="CopyToClipboard('tag7501');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag20353" onclick="CopyToClipboard('tag20353');return false;" class="tag-decoration">v2-develop</div><div id="tag3640" onclick="CopyToClipboard('tag3640');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag4040" onclick="CopyToClipboard('tag4040');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag9442" onclick="CopyToClipboard('tag9442');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19763" onclick="CopyToClipboard('tag19763');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag19252" onclick="CopyToClipboard('tag19252');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag19710" onclick="CopyToClipboard('tag19710');return false;" class="tag-decoration">v3</div><div id="tag8679" onclick="CopyToClipboard('tag8679');return false;" class="tag-decoration">v3-4c2fb89</div><div id="tag23685" onclick="CopyToClipboard('tag23685');return false;" class="tag-decoration">v3-3.6.4-release.1865</div><div id="tag18756" onclick="CopyToClipboard('tag18756');return false;" class="tag-decoration">v3-v3</div><div id="tag32098" onclick="CopyToClipboard('tag32098');return false;" class="tag-decoration">v3-v3.6</div><div id="tag11184" onclick="CopyToClipboard('tag11184');return false;" class="tag-decoration">v3-v3.6.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4c2fb89f8b6cca7c1a5d35e271dc3880061f76fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38173143300" target="_blank">2026-10-11 20:39:42</a></td></tr>
<tr><td><div id="tag13999" onclick="CopyToClipboard('tag13999');return false;" class="tag-decoration">v3-develop</div><div id="tag23005" onclick="CopyToClipboard('tag23005');return false;" class="tag-decoration">v3-develop-aac62be</div><div id="tag29339" onclick="CopyToClipboard('tag29339');return false;" class="tag-decoration">v3-develop-3.6.5-develop.1876</div><div id="tag17614" onclick="CopyToClipboard('tag17614');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag2469" onclick="CopyToClipboard('tag2469');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag11410" onclick="CopyToClipboard('tag11410');return false;" class="tag-decoration">v3-develop-v3.6.5</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/aac62becb8339c543aa80680a5cf1a4d42988348" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38213793959" target="_blank">2026-10-12 06:41:46</a></td></tr>
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
