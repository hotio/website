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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4759" onclick="CopyToClipboard('tag4759');return false;" class="tag-decoration">v2</div><div id="tag5614" onclick="CopyToClipboard('tag5614');return false;" class="tag-decoration">v2-998495f</div><div id="tag14541" onclick="CopyToClipboard('tag14541');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag10207" onclick="CopyToClipboard('tag10207');return false;" class="tag-decoration">v2-v2</div><div id="tag16814" onclick="CopyToClipboard('tag16814');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30588" onclick="CopyToClipboard('tag30588');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag20454" onclick="CopyToClipboard('tag20454');return false;" class="tag-decoration">v2-develop</div><div id="tag7116" onclick="CopyToClipboard('tag7116');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag6108" onclick="CopyToClipboard('tag6108');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag28643" onclick="CopyToClipboard('tag28643');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag1683" onclick="CopyToClipboard('tag1683');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11459" onclick="CopyToClipboard('tag11459');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag27830" onclick="CopyToClipboard('tag27830');return false;" class="tag-decoration">v3</div><div id="tag9629" onclick="CopyToClipboard('tag9629');return false;" class="tag-decoration">v3-7fb9b23</div><div id="tag32449" onclick="CopyToClipboard('tag32449');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag10264" onclick="CopyToClipboard('tag10264');return false;" class="tag-decoration">v3-v3</div><div id="tag19136" onclick="CopyToClipboard('tag19136');return false;" class="tag-decoration">v3-v3.6</div><div id="tag19189" onclick="CopyToClipboard('tag19189');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7fb9b2395ccc8060763d457df9946db9e183be64" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38456159836" target="_blank">2026-10-13 19:36:17</a></td></tr>
<tr><td><div id="tag1537" onclick="CopyToClipboard('tag1537');return false;" class="tag-decoration">v3-develop</div><div id="tag28478" onclick="CopyToClipboard('tag28478');return false;" class="tag-decoration">v3-develop-eb7b104</div><div id="tag25929" onclick="CopyToClipboard('tag25929');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag2771" onclick="CopyToClipboard('tag2771');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9662" onclick="CopyToClipboard('tag9662');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag17875" onclick="CopyToClipboard('tag17875');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/eb7b10487653e67df05dff8675b9cdb232f25d69" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38988416479" target="_blank">2026-10-17 00:53:09</a></td></tr>
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
