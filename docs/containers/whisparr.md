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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31088" onclick="CopyToClipboard('tag31088');return false;" class="tag-decoration">v2</div><div id="tag78" onclick="CopyToClipboard('tag78');return false;" class="tag-decoration">v2-b4cafd0</div><div id="tag5487" onclick="CopyToClipboard('tag5487');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag30451" onclick="CopyToClipboard('tag30451');return false;" class="tag-decoration">v2-v2</div><div id="tag25741" onclick="CopyToClipboard('tag25741');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8423" onclick="CopyToClipboard('tag8423');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b4cafd068010be73de87e6dea8491badfba85189" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395539195" target="_blank">2026-06-29 18:56:47</a></td></tr>
<tr><td><div id="tag17114" onclick="CopyToClipboard('tag17114');return false;" class="tag-decoration">v2-develop</div><div id="tag1756" onclick="CopyToClipboard('tag1756');return false;" class="tag-decoration">v2-develop-a3c8876</div><div id="tag31527" onclick="CopyToClipboard('tag31527');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag21171" onclick="CopyToClipboard('tag21171');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag420" onclick="CopyToClipboard('tag420');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28450" onclick="CopyToClipboard('tag28450');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a3c8876a45e18e05e43e2e3d226e80154e92b3e6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395536367" target="_blank">2026-06-29 18:56:44</a></td></tr>
<tr><td><div id="tag12334" onclick="CopyToClipboard('tag12334');return false;" class="tag-decoration">v3</div><div id="tag6321" onclick="CopyToClipboard('tag6321');return false;" class="tag-decoration">v3-0833a29</div><div id="tag31730" onclick="CopyToClipboard('tag31730');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag28838" onclick="CopyToClipboard('tag28838');return false;" class="tag-decoration">v3-v3</div><div id="tag398" onclick="CopyToClipboard('tag398');return false;" class="tag-decoration">v3-v3.3</div><div id="tag20919" onclick="CopyToClipboard('tag20919');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0833a293ece2a5beab18413ea2ce1fff34dd272c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395534716" target="_blank">2026-06-29 18:56:42</a></td></tr>
<tr><td><div id="tag28166" onclick="CopyToClipboard('tag28166');return false;" class="tag-decoration">v3-develop</div><div id="tag23497" onclick="CopyToClipboard('tag23497');return false;" class="tag-decoration">v3-develop-2e947fd</div><div id="tag23453" onclick="CopyToClipboard('tag23453');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag3268" onclick="CopyToClipboard('tag3268');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10725" onclick="CopyToClipboard('tag10725');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag8699" onclick="CopyToClipboard('tag8699');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2e947fd542ee61c162cbd3c89111cd4f14dd7370" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28012666109" target="_blank">2026-06-23 08:23:10</a></td></tr>
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
