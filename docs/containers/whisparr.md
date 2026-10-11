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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15468" onclick="CopyToClipboard('tag15468');return false;" class="tag-decoration">v2</div><div id="tag6458" onclick="CopyToClipboard('tag6458');return false;" class="tag-decoration">v2-998495f</div><div id="tag28416" onclick="CopyToClipboard('tag28416');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag4648" onclick="CopyToClipboard('tag4648');return false;" class="tag-decoration">v2-v2</div><div id="tag14256" onclick="CopyToClipboard('tag14256');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8654" onclick="CopyToClipboard('tag8654');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag15298" onclick="CopyToClipboard('tag15298');return false;" class="tag-decoration">v2-develop</div><div id="tag31407" onclick="CopyToClipboard('tag31407');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag23519" onclick="CopyToClipboard('tag23519');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag10361" onclick="CopyToClipboard('tag10361');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26490" onclick="CopyToClipboard('tag26490');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26142" onclick="CopyToClipboard('tag26142');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag4156" onclick="CopyToClipboard('tag4156');return false;" class="tag-decoration">v3</div><div id="tag6339" onclick="CopyToClipboard('tag6339');return false;" class="tag-decoration">v3-8bd3823</div><div id="tag6469" onclick="CopyToClipboard('tag6469');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag15441" onclick="CopyToClipboard('tag15441');return false;" class="tag-decoration">v3-v3</div><div id="tag27945" onclick="CopyToClipboard('tag27945');return false;" class="tag-decoration">v3-v3.6</div><div id="tag1376" onclick="CopyToClipboard('tag1376');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8bd3823cd1cb0f9d88447aaabf54b3ab2e003fa0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565018980" target="_blank">2026-10-07 03:04:14</a></td></tr>
<tr><td><div id="tag16312" onclick="CopyToClipboard('tag16312');return false;" class="tag-decoration">v3-develop</div><div id="tag5629" onclick="CopyToClipboard('tag5629');return false;" class="tag-decoration">v3-develop-be5ff3d</div><div id="tag13922" onclick="CopyToClipboard('tag13922');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1845</div><div id="tag30181" onclick="CopyToClipboard('tag30181');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag23369" onclick="CopyToClipboard('tag23369');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag8988" onclick="CopyToClipboard('tag8988');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/be5ff3d313083ab437c3b5e24ccb233e4ada941e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38105769534" target="_blank">2026-10-11 02:37:45</a></td></tr>
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
