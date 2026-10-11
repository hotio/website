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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20324" onclick="CopyToClipboard('tag20324');return false;" class="tag-decoration">v2</div><div id="tag19892" onclick="CopyToClipboard('tag19892');return false;" class="tag-decoration">v2-998495f</div><div id="tag10509" onclick="CopyToClipboard('tag10509');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag20434" onclick="CopyToClipboard('tag20434');return false;" class="tag-decoration">v2-v2</div><div id="tag19393" onclick="CopyToClipboard('tag19393');return false;" class="tag-decoration">v2-v2.2</div><div id="tag20200" onclick="CopyToClipboard('tag20200');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag13444" onclick="CopyToClipboard('tag13444');return false;" class="tag-decoration">v2-develop</div><div id="tag6313" onclick="CopyToClipboard('tag6313');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag13201" onclick="CopyToClipboard('tag13201');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag21794" onclick="CopyToClipboard('tag21794');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag10054" onclick="CopyToClipboard('tag10054');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10305" onclick="CopyToClipboard('tag10305');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag7260" onclick="CopyToClipboard('tag7260');return false;" class="tag-decoration">v3</div><div id="tag8418" onclick="CopyToClipboard('tag8418');return false;" class="tag-decoration">v3-4c2fb89</div><div id="tag3431" onclick="CopyToClipboard('tag3431');return false;" class="tag-decoration">v3-3.6.4-release.1865</div><div id="tag30696" onclick="CopyToClipboard('tag30696');return false;" class="tag-decoration">v3-v3</div><div id="tag2579" onclick="CopyToClipboard('tag2579');return false;" class="tag-decoration">v3-v3.6</div><div id="tag18963" onclick="CopyToClipboard('tag18963');return false;" class="tag-decoration">v3-v3.6.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4c2fb89f8b6cca7c1a5d35e271dc3880061f76fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38173143300" target="_blank">2026-10-11 20:39:42</a></td></tr>
<tr><td><div id="tag30299" onclick="CopyToClipboard('tag30299');return false;" class="tag-decoration">v3-develop</div><div id="tag13228" onclick="CopyToClipboard('tag13228');return false;" class="tag-decoration">v3-develop-bff89c5</div><div id="tag29583" onclick="CopyToClipboard('tag29583');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1849</div><div id="tag13868" onclick="CopyToClipboard('tag13868');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag21423" onclick="CopyToClipboard('tag21423');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag9685" onclick="CopyToClipboard('tag9685');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/bff89c5f6b71b4be08ba48efff191a339ab12eab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38128288395" target="_blank">2026-10-11 09:24:56</a></td></tr>
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
