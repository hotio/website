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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30906" onclick="CopyToClipboard('tag30906');return false;" class="tag-decoration">v2</div><div id="tag12875" onclick="CopyToClipboard('tag12875');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag23803" onclick="CopyToClipboard('tag23803');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag11744" onclick="CopyToClipboard('tag11744');return false;" class="tag-decoration">v2-v2</div><div id="tag26622" onclick="CopyToClipboard('tag26622');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32357" onclick="CopyToClipboard('tag32357');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag17754" onclick="CopyToClipboard('tag17754');return false;" class="tag-decoration">v2-develop</div><div id="tag25239" onclick="CopyToClipboard('tag25239');return false;" class="tag-decoration">v2-develop-3e1ae40</div><div id="tag13337" onclick="CopyToClipboard('tag13337');return false;" class="tag-decoration">v2-develop-2.2.0-develop.311</div><div id="tag8405" onclick="CopyToClipboard('tag8405');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag31988" onclick="CopyToClipboard('tag31988');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28186" onclick="CopyToClipboard('tag28186');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e1ae4069cc424699ea4ec6707588cbd72063f37" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33279674227" target="_blank">2026-08-29 22:53:27</a></td></tr>
<tr><td><div id="tag27863" onclick="CopyToClipboard('tag27863');return false;" class="tag-decoration">v3</div><div id="tag544" onclick="CopyToClipboard('tag544');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag30752" onclick="CopyToClipboard('tag30752');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag12792" onclick="CopyToClipboard('tag12792');return false;" class="tag-decoration">v3-v3</div><div id="tag2830" onclick="CopyToClipboard('tag2830');return false;" class="tag-decoration">v3-v3.3</div><div id="tag22468" onclick="CopyToClipboard('tag22468');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag20159" onclick="CopyToClipboard('tag20159');return false;" class="tag-decoration">v3-develop</div><div id="tag19223" onclick="CopyToClipboard('tag19223');return false;" class="tag-decoration">v3-develop-dc1b4ee</div><div id="tag8176" onclick="CopyToClipboard('tag8176');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1378</div><div id="tag938" onclick="CopyToClipboard('tag938');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30735" onclick="CopyToClipboard('tag30735');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag23897" onclick="CopyToClipboard('tag23897');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/dc1b4eed714c721cfe73b4b3c26e41aa4b28117a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33245622204" target="_blank">2026-08-29 09:29:49</a></td></tr>
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
