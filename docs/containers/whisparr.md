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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31799" onclick="CopyToClipboard('tag31799');return false;" class="tag-decoration">v2</div><div id="tag18827" onclick="CopyToClipboard('tag18827');return false;" class="tag-decoration">v2-998495f</div><div id="tag5909" onclick="CopyToClipboard('tag5909');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag31146" onclick="CopyToClipboard('tag31146');return false;" class="tag-decoration">v2-v2</div><div id="tag20821" onclick="CopyToClipboard('tag20821');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7120" onclick="CopyToClipboard('tag7120');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag12220" onclick="CopyToClipboard('tag12220');return false;" class="tag-decoration">v2-develop</div><div id="tag477" onclick="CopyToClipboard('tag477');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag28974" onclick="CopyToClipboard('tag28974');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag1801" onclick="CopyToClipboard('tag1801');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12770" onclick="CopyToClipboard('tag12770');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16703" onclick="CopyToClipboard('tag16703');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag25047" onclick="CopyToClipboard('tag25047');return false;" class="tag-decoration">v3</div><div id="tag8340" onclick="CopyToClipboard('tag8340');return false;" class="tag-decoration">v3-8bd3823</div><div id="tag1240" onclick="CopyToClipboard('tag1240');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag7166" onclick="CopyToClipboard('tag7166');return false;" class="tag-decoration">v3-v3</div><div id="tag7172" onclick="CopyToClipboard('tag7172');return false;" class="tag-decoration">v3-v3.6</div><div id="tag32155" onclick="CopyToClipboard('tag32155');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8bd3823cd1cb0f9d88447aaabf54b3ab2e003fa0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565018980" target="_blank">2026-10-07 03:04:14</a></td></tr>
<tr><td><div id="tag15286" onclick="CopyToClipboard('tag15286');return false;" class="tag-decoration">v3-develop</div><div id="tag23667" onclick="CopyToClipboard('tag23667');return false;" class="tag-decoration">v3-develop-573a82c</div><div id="tag1302" onclick="CopyToClipboard('tag1302');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1817</div><div id="tag29456" onclick="CopyToClipboard('tag29456');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19445" onclick="CopyToClipboard('tag19445');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag2369" onclick="CopyToClipboard('tag2369');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/573a82cc5b84ad6b040717cdc766e757635c3670" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37960888149" target="_blank">2026-10-09 16:41:06</a></td></tr>
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
