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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2063" onclick="CopyToClipboard('tag2063');return false;" class="tag-decoration">v2</div><div id="tag4080" onclick="CopyToClipboard('tag4080');return false;" class="tag-decoration">v2-3168972</div><div id="tag21668" onclick="CopyToClipboard('tag21668');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag1420" onclick="CopyToClipboard('tag1420');return false;" class="tag-decoration">v2-v2</div><div id="tag12664" onclick="CopyToClipboard('tag12664');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19248" onclick="CopyToClipboard('tag19248');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3168972a270b87e5c5c16715a9f74a7d908a1f11" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968211953" target="_blank">2026-09-15 12:19:44</a></td></tr>
<tr><td><div id="tag1064" onclick="CopyToClipboard('tag1064');return false;" class="tag-decoration">v2-develop</div><div id="tag16734" onclick="CopyToClipboard('tag16734');return false;" class="tag-decoration">v2-develop-d70569e</div><div id="tag25876" onclick="CopyToClipboard('tag25876');return false;" class="tag-decoration">v2-develop-2.2.0-develop.339</div><div id="tag31765" onclick="CopyToClipboard('tag31765');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag880" onclick="CopyToClipboard('tag880');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag84" onclick="CopyToClipboard('tag84');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d70569e1c50e5410ce844de3dc80773fa047d123" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35130458272" target="_blank">2026-09-16 17:48:24</a></td></tr>
<tr><td><div id="tag27334" onclick="CopyToClipboard('tag27334');return false;" class="tag-decoration">v3</div><div id="tag23910" onclick="CopyToClipboard('tag23910');return false;" class="tag-decoration">v3-b2c1fc6</div><div id="tag704" onclick="CopyToClipboard('tag704');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag31052" onclick="CopyToClipboard('tag31052');return false;" class="tag-decoration">v3-v3</div><div id="tag19339" onclick="CopyToClipboard('tag19339');return false;" class="tag-decoration">v3-v3.5</div><div id="tag27124" onclick="CopyToClipboard('tag27124');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b2c1fc63c5f660a77ff67f2a17e3eb7da4894c4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968203212" target="_blank">2026-09-15 12:19:38</a></td></tr>
<tr><td><div id="tag30212" onclick="CopyToClipboard('tag30212');return false;" class="tag-decoration">v3-develop</div><div id="tag19667" onclick="CopyToClipboard('tag19667');return false;" class="tag-decoration">v3-develop-66681bd</div><div id="tag6091" onclick="CopyToClipboard('tag6091');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1629</div><div id="tag1049" onclick="CopyToClipboard('tag1049');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20579" onclick="CopyToClipboard('tag20579');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag4994" onclick="CopyToClipboard('tag4994');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/66681bde0b63673599ba3713e919105836d8ab3a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35147309954" target="_blank">2026-09-16 20:33:55</a></td></tr>
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
