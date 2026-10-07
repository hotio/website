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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag590" onclick="CopyToClipboard('tag590');return false;" class="tag-decoration">v2</div><div id="tag24349" onclick="CopyToClipboard('tag24349');return false;" class="tag-decoration">v2-5de9807</div><div id="tag225" onclick="CopyToClipboard('tag225');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag32673" onclick="CopyToClipboard('tag32673');return false;" class="tag-decoration">v2-v2</div><div id="tag15433" onclick="CopyToClipboard('tag15433');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8120" onclick="CopyToClipboard('tag8120');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5de9807bb0627d27981ec70abe9983b8dcc7eac5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474605896" target="_blank">2026-10-06 13:54:46</a></td></tr>
<tr><td><div id="tag29936" onclick="CopyToClipboard('tag29936');return false;" class="tag-decoration">v2-develop</div><div id="tag26682" onclick="CopyToClipboard('tag26682');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag19920" onclick="CopyToClipboard('tag19920');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag25421" onclick="CopyToClipboard('tag25421');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19426" onclick="CopyToClipboard('tag19426');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag9952" onclick="CopyToClipboard('tag9952');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag10062" onclick="CopyToClipboard('tag10062');return false;" class="tag-decoration">v3</div><div id="tag7334" onclick="CopyToClipboard('tag7334');return false;" class="tag-decoration">v3-95a07d1</div><div id="tag10333" onclick="CopyToClipboard('tag10333');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag20446" onclick="CopyToClipboard('tag20446');return false;" class="tag-decoration">v3-v3</div><div id="tag21174" onclick="CopyToClipboard('tag21174');return false;" class="tag-decoration">v3-v3.6</div><div id="tag16479" onclick="CopyToClipboard('tag16479');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/95a07d19c6386f3907ae728814a92b946bb6b755" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474608462" target="_blank">2026-10-06 13:54:52</a></td></tr>
<tr><td><div id="tag4998" onclick="CopyToClipboard('tag4998');return false;" class="tag-decoration">v3-develop</div><div id="tag2301" onclick="CopyToClipboard('tag2301');return false;" class="tag-decoration">v3-develop-410e400</div><div id="tag15479" onclick="CopyToClipboard('tag15479');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag27787" onclick="CopyToClipboard('tag27787');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag13506" onclick="CopyToClipboard('tag13506');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag27187" onclick="CopyToClipboard('tag27187');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/410e400a8b082a27a4c4eb921b0f0fe3304b06eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474608372" target="_blank">2026-10-06 13:54:44</a></td></tr>
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
