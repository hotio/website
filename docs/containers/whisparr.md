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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7822" onclick="CopyToClipboard('tag7822');return false;" class="tag-decoration">v2</div><div id="tag2276" onclick="CopyToClipboard('tag2276');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag24813" onclick="CopyToClipboard('tag24813');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag16479" onclick="CopyToClipboard('tag16479');return false;" class="tag-decoration">v2-v2</div><div id="tag29447" onclick="CopyToClipboard('tag29447');return false;" class="tag-decoration">v2-v2.2</div><div id="tag29345" onclick="CopyToClipboard('tag29345');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag23549" onclick="CopyToClipboard('tag23549');return false;" class="tag-decoration">v2-develop</div><div id="tag5023" onclick="CopyToClipboard('tag5023');return false;" class="tag-decoration">v2-develop-5a3234e</div><div id="tag16037" onclick="CopyToClipboard('tag16037');return false;" class="tag-decoration">v2-develop-2.2.0-develop.291</div><div id="tag2919" onclick="CopyToClipboard('tag2919');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19566" onclick="CopyToClipboard('tag19566');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag18066" onclick="CopyToClipboard('tag18066');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5a3234e43ace1c08600b3b15899a7b332b34d827" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33229238381" target="_blank">2026-08-29 02:33:02</a></td></tr>
<tr><td><div id="tag22289" onclick="CopyToClipboard('tag22289');return false;" class="tag-decoration">v3</div><div id="tag15116" onclick="CopyToClipboard('tag15116');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag29232" onclick="CopyToClipboard('tag29232');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag19396" onclick="CopyToClipboard('tag19396');return false;" class="tag-decoration">v3-v3</div><div id="tag10059" onclick="CopyToClipboard('tag10059');return false;" class="tag-decoration">v3-v3.3</div><div id="tag21840" onclick="CopyToClipboard('tag21840');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag13035" onclick="CopyToClipboard('tag13035');return false;" class="tag-decoration">v3-develop</div><div id="tag10553" onclick="CopyToClipboard('tag10553');return false;" class="tag-decoration">v3-develop-8b14f70</div><div id="tag6413" onclick="CopyToClipboard('tag6413');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1353</div><div id="tag21714" onclick="CopyToClipboard('tag21714');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6399" onclick="CopyToClipboard('tag6399');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag16130" onclick="CopyToClipboard('tag16130');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8b14f70e0fb2d006dc5d4a3ab44627d79da3a437" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33205088829" target="_blank">2026-08-28 19:43:03</a></td></tr>
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
