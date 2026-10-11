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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15484" onclick="CopyToClipboard('tag15484');return false;" class="tag-decoration">v2</div><div id="tag21940" onclick="CopyToClipboard('tag21940');return false;" class="tag-decoration">v2-998495f</div><div id="tag27153" onclick="CopyToClipboard('tag27153');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag2462" onclick="CopyToClipboard('tag2462');return false;" class="tag-decoration">v2-v2</div><div id="tag10151" onclick="CopyToClipboard('tag10151');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10385" onclick="CopyToClipboard('tag10385');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag6277" onclick="CopyToClipboard('tag6277');return false;" class="tag-decoration">v2-develop</div><div id="tag14855" onclick="CopyToClipboard('tag14855');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag11511" onclick="CopyToClipboard('tag11511');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag3051" onclick="CopyToClipboard('tag3051');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12371" onclick="CopyToClipboard('tag12371');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag32373" onclick="CopyToClipboard('tag32373');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag31482" onclick="CopyToClipboard('tag31482');return false;" class="tag-decoration">v3</div><div id="tag4804" onclick="CopyToClipboard('tag4804');return false;" class="tag-decoration">v3-4c2fb89</div><div id="tag12663" onclick="CopyToClipboard('tag12663');return false;" class="tag-decoration">v3-3.6.4-release.1865</div><div id="tag29220" onclick="CopyToClipboard('tag29220');return false;" class="tag-decoration">v3-v3</div><div id="tag6100" onclick="CopyToClipboard('tag6100');return false;" class="tag-decoration">v3-v3.6</div><div id="tag19861" onclick="CopyToClipboard('tag19861');return false;" class="tag-decoration">v3-v3.6.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4c2fb89f8b6cca7c1a5d35e271dc3880061f76fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38173143300" target="_blank">2026-10-11 20:39:42</a></td></tr>
<tr><td><div id="tag26362" onclick="CopyToClipboard('tag26362');return false;" class="tag-decoration">v3-develop</div><div id="tag2766" onclick="CopyToClipboard('tag2766');return false;" class="tag-decoration">v3-develop-b4eef5e</div><div id="tag10482" onclick="CopyToClipboard('tag10482');return false;" class="tag-decoration">v3-develop-3.6.4-develop.1863</div><div id="tag22074" onclick="CopyToClipboard('tag22074');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6224" onclick="CopyToClipboard('tag6224');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag6187" onclick="CopyToClipboard('tag6187');return false;" class="tag-decoration">v3-develop-v3.6.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b4eef5ef0c801083a8668ccfda7a533df96912fd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38173142793" target="_blank">2026-10-11 20:39:41</a></td></tr>
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
