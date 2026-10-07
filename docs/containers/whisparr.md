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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26368" onclick="CopyToClipboard('tag26368');return false;" class="tag-decoration">v2</div><div id="tag18798" onclick="CopyToClipboard('tag18798');return false;" class="tag-decoration">v2-5de9807</div><div id="tag2675" onclick="CopyToClipboard('tag2675');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag15760" onclick="CopyToClipboard('tag15760');return false;" class="tag-decoration">v2-v2</div><div id="tag1494" onclick="CopyToClipboard('tag1494');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21515" onclick="CopyToClipboard('tag21515');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5de9807bb0627d27981ec70abe9983b8dcc7eac5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474605896" target="_blank">2026-10-06 13:54:46</a></td></tr>
<tr><td><div id="tag959" onclick="CopyToClipboard('tag959');return false;" class="tag-decoration">v2-develop</div><div id="tag4047" onclick="CopyToClipboard('tag4047');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag22724" onclick="CopyToClipboard('tag22724');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag13112" onclick="CopyToClipboard('tag13112');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag20566" onclick="CopyToClipboard('tag20566');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag643" onclick="CopyToClipboard('tag643');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag5763" onclick="CopyToClipboard('tag5763');return false;" class="tag-decoration">v3</div><div id="tag5924" onclick="CopyToClipboard('tag5924');return false;" class="tag-decoration">v3-8bd3823</div><div id="tag23946" onclick="CopyToClipboard('tag23946');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag31047" onclick="CopyToClipboard('tag31047');return false;" class="tag-decoration">v3-v3</div><div id="tag18738" onclick="CopyToClipboard('tag18738');return false;" class="tag-decoration">v3-v3.6</div><div id="tag31570" onclick="CopyToClipboard('tag31570');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8bd3823cd1cb0f9d88447aaabf54b3ab2e003fa0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565018980" target="_blank">2026-10-07 03:04:14</a></td></tr>
<tr><td><div id="tag26776" onclick="CopyToClipboard('tag26776');return false;" class="tag-decoration">v3-develop</div><div id="tag6152" onclick="CopyToClipboard('tag6152');return false;" class="tag-decoration">v3-develop-410e400</div><div id="tag8195" onclick="CopyToClipboard('tag8195');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag9069" onclick="CopyToClipboard('tag9069');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19548" onclick="CopyToClipboard('tag19548');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag15510" onclick="CopyToClipboard('tag15510');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/410e400a8b082a27a4c4eb921b0f0fe3304b06eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474608372" target="_blank">2026-10-06 13:54:44</a></td></tr>
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
