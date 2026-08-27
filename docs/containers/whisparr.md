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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3102" onclick="CopyToClipboard('tag3102');return false;" class="tag-decoration">v2</div><div id="tag29709" onclick="CopyToClipboard('tag29709');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag1727" onclick="CopyToClipboard('tag1727');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag27812" onclick="CopyToClipboard('tag27812');return false;" class="tag-decoration">v2-v2</div><div id="tag6629" onclick="CopyToClipboard('tag6629');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31527" onclick="CopyToClipboard('tag31527');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag17239" onclick="CopyToClipboard('tag17239');return false;" class="tag-decoration">v2-develop</div><div id="tag1879" onclick="CopyToClipboard('tag1879');return false;" class="tag-decoration">v2-develop-02a0a52</div><div id="tag2746" onclick="CopyToClipboard('tag2746');return false;" class="tag-decoration">v2-develop-2.2.0-develop.242</div><div id="tag12968" onclick="CopyToClipboard('tag12968');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag21824" onclick="CopyToClipboard('tag21824');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag21291" onclick="CopyToClipboard('tag21291');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/02a0a52a064c98ee75ffedaeb13cfe69485f3c80" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33075888278" target="_blank">2026-08-27 13:15:25</a></td></tr>
<tr><td><div id="tag2222" onclick="CopyToClipboard('tag2222');return false;" class="tag-decoration">v3</div><div id="tag17048" onclick="CopyToClipboard('tag17048');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag23236" onclick="CopyToClipboard('tag23236');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag6513" onclick="CopyToClipboard('tag6513');return false;" class="tag-decoration">v3-v3</div><div id="tag30167" onclick="CopyToClipboard('tag30167');return false;" class="tag-decoration">v3-v3.3</div><div id="tag22267" onclick="CopyToClipboard('tag22267');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag23954" onclick="CopyToClipboard('tag23954');return false;" class="tag-decoration">v3-develop</div><div id="tag27200" onclick="CopyToClipboard('tag27200');return false;" class="tag-decoration">v3-develop-889e6e3</div><div id="tag15466" onclick="CopyToClipboard('tag15466');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1290</div><div id="tag7240" onclick="CopyToClipboard('tag7240');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag16105" onclick="CopyToClipboard('tag16105');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag29567" onclick="CopyToClipboard('tag29567');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/889e6e3be95d828df5a540ceec2d5814a370034f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33001478094" target="_blank">2026-08-26 18:45:42</a></td></tr>
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
