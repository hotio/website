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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3329" onclick="CopyToClipboard('tag3329');return false;" class="tag-decoration">v2</div><div id="tag20474" onclick="CopyToClipboard('tag20474');return false;" class="tag-decoration">v2-5239dde</div><div id="tag14973" onclick="CopyToClipboard('tag14973');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag28090" onclick="CopyToClipboard('tag28090');return false;" class="tag-decoration">v2-v2</div><div id="tag32056" onclick="CopyToClipboard('tag32056');return false;" class="tag-decoration">v2-v2.2</div><div id="tag4031" onclick="CopyToClipboard('tag4031');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5239dde3f330c6dcf880592b4fbb9607a06640b6" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931441459" target="_blank">2026-05-15 17:20:23</a></td></tr>
<tr><td><div id="tag11795" onclick="CopyToClipboard('tag11795');return false;" class="tag-decoration">v2-develop</div><div id="tag8786" onclick="CopyToClipboard('tag8786');return false;" class="tag-decoration">v2-develop-2d9661d</div><div id="tag31363" onclick="CopyToClipboard('tag31363');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag28079" onclick="CopyToClipboard('tag28079');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag25407" onclick="CopyToClipboard('tag25407');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag8990" onclick="CopyToClipboard('tag8990');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2d9661dbe6017cee3ba05f6b38b08e23761ff9d7" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25927511014" target="_blank">2026-05-15 15:55:16</a></td></tr>
<tr><td><div id="tag14477" onclick="CopyToClipboard('tag14477');return false;" class="tag-decoration">v3</div><div id="tag351" onclick="CopyToClipboard('tag351');return false;" class="tag-decoration">v3-05868f4</div><div id="tag25936" onclick="CopyToClipboard('tag25936');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag485" onclick="CopyToClipboard('tag485');return false;" class="tag-decoration">v3-v3</div><div id="tag16564" onclick="CopyToClipboard('tag16564');return false;" class="tag-decoration">v3-v3.3</div><div id="tag14801" onclick="CopyToClipboard('tag14801');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/05868f4160fbd5c11dca809d582262c0e2eede20" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25927508449" target="_blank">2026-05-15 15:55:13</a></td></tr>
<tr><td><div id="tag28405" onclick="CopyToClipboard('tag28405');return false;" class="tag-decoration">v3-develop</div><div id="tag20832" onclick="CopyToClipboard('tag20832');return false;" class="tag-decoration">v3-develop-4e0975d</div><div id="tag17286" onclick="CopyToClipboard('tag17286');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag10778" onclick="CopyToClipboard('tag10778');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag26045" onclick="CopyToClipboard('tag26045');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag29260" onclick="CopyToClipboard('tag29260');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4e0975dfed351fc725a1b2865a32ea085b372088" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25927508364" target="_blank">2026-05-15 15:55:13</a></td></tr>
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
