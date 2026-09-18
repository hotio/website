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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12396" onclick="CopyToClipboard('tag12396');return false;" class="tag-decoration">v2</div><div id="tag15761" onclick="CopyToClipboard('tag15761');return false;" class="tag-decoration">v2-708fe0c</div><div id="tag30204" onclick="CopyToClipboard('tag30204');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag10103" onclick="CopyToClipboard('tag10103');return false;" class="tag-decoration">v2-v2</div><div id="tag9967" onclick="CopyToClipboard('tag9967');return false;" class="tag-decoration">v2-v2.2</div><div id="tag26579" onclick="CopyToClipboard('tag26579');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/708fe0ccacf65faa0432f75d254d222b105e9a8c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297339382" target="_blank">2026-09-18 01:56:24</a></td></tr>
<tr><td><div id="tag29955" onclick="CopyToClipboard('tag29955');return false;" class="tag-decoration">v2-develop</div><div id="tag16074" onclick="CopyToClipboard('tag16074');return false;" class="tag-decoration">v2-develop-ad6d4d2</div><div id="tag10512" onclick="CopyToClipboard('tag10512');return false;" class="tag-decoration">v2-develop-2.2.0-develop.353</div><div id="tag29354" onclick="CopyToClipboard('tag29354');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag1462" onclick="CopyToClipboard('tag1462');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17185" onclick="CopyToClipboard('tag17185');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ad6d4d20b850aaaf3fdb4ce51b47c0b4e1af82bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35272261703" target="_blank">2026-09-17 20:40:47</a></td></tr>
<tr><td><div id="tag20108" onclick="CopyToClipboard('tag20108');return false;" class="tag-decoration">v3</div><div id="tag11050" onclick="CopyToClipboard('tag11050');return false;" class="tag-decoration">v3-012cdd4</div><div id="tag15960" onclick="CopyToClipboard('tag15960');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag2214" onclick="CopyToClipboard('tag2214');return false;" class="tag-decoration">v3-v3</div><div id="tag8013" onclick="CopyToClipboard('tag8013');return false;" class="tag-decoration">v3-v3.5</div><div id="tag2569" onclick="CopyToClipboard('tag2569');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/012cdd4e65b2c95aeb9331eafb9cad7b21222b73" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35272261777" target="_blank">2026-09-17 20:40:47</a></td></tr>
<tr><td><div id="tag12653" onclick="CopyToClipboard('tag12653');return false;" class="tag-decoration">v3-develop</div><div id="tag17187" onclick="CopyToClipboard('tag17187');return false;" class="tag-decoration">v3-develop-fefe407</div><div id="tag5497" onclick="CopyToClipboard('tag5497');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1639</div><div id="tag18882" onclick="CopyToClipboard('tag18882');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30505" onclick="CopyToClipboard('tag30505');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag12884" onclick="CopyToClipboard('tag12884');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fefe40709c3e644b87bb3f89147e88987141fc08" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35254982583" target="_blank">2026-09-17 17:48:33</a></td></tr>
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
