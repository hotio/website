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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag650" onclick="CopyToClipboard('tag650');return false;" class="tag-decoration">v2</div><div id="tag3748" onclick="CopyToClipboard('tag3748');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag28213" onclick="CopyToClipboard('tag28213');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag30115" onclick="CopyToClipboard('tag30115');return false;" class="tag-decoration">v2-v2</div><div id="tag1133" onclick="CopyToClipboard('tag1133');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31124" onclick="CopyToClipboard('tag31124');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag23236" onclick="CopyToClipboard('tag23236');return false;" class="tag-decoration">v2-develop</div><div id="tag15127" onclick="CopyToClipboard('tag15127');return false;" class="tag-decoration">v2-develop-5a3234e</div><div id="tag13879" onclick="CopyToClipboard('tag13879');return false;" class="tag-decoration">v2-develop-2.2.0-develop.291</div><div id="tag7145" onclick="CopyToClipboard('tag7145');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5899" onclick="CopyToClipboard('tag5899');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag19023" onclick="CopyToClipboard('tag19023');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5a3234e43ace1c08600b3b15899a7b332b34d827" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33229238381" target="_blank">2026-08-29 02:33:02</a></td></tr>
<tr><td><div id="tag6693" onclick="CopyToClipboard('tag6693');return false;" class="tag-decoration">v3</div><div id="tag27848" onclick="CopyToClipboard('tag27848');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag28501" onclick="CopyToClipboard('tag28501');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag4434" onclick="CopyToClipboard('tag4434');return false;" class="tag-decoration">v3-v3</div><div id="tag18669" onclick="CopyToClipboard('tag18669');return false;" class="tag-decoration">v3-v3.3</div><div id="tag21270" onclick="CopyToClipboard('tag21270');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag4123" onclick="CopyToClipboard('tag4123');return false;" class="tag-decoration">v3-develop</div><div id="tag22991" onclick="CopyToClipboard('tag22991');return false;" class="tag-decoration">v3-develop-5aecd97</div><div id="tag30727" onclick="CopyToClipboard('tag30727');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1359</div><div id="tag839" onclick="CopyToClipboard('tag839');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24865" onclick="CopyToClipboard('tag24865');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag19135" onclick="CopyToClipboard('tag19135');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5aecd9788421090d236a08b1a572b68359f594ef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33229241784" target="_blank">2026-08-29 02:33:06</a></td></tr>
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
