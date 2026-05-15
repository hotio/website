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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30823" onclick="CopyToClipboard('tag30823');return false;" class="tag-decoration">v2</div><div id="tag2902" onclick="CopyToClipboard('tag2902');return false;" class="tag-decoration">v2-5239dde</div><div id="tag12441" onclick="CopyToClipboard('tag12441');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag11723" onclick="CopyToClipboard('tag11723');return false;" class="tag-decoration">v2-v2</div><div id="tag9806" onclick="CopyToClipboard('tag9806');return false;" class="tag-decoration">v2-v2.2</div><div id="tag26868" onclick="CopyToClipboard('tag26868');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5239dde3f330c6dcf880592b4fbb9607a06640b6" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931441459" target="_blank">2026-05-15 17:20:23</a></td></tr>
<tr><td><div id="tag12061" onclick="CopyToClipboard('tag12061');return false;" class="tag-decoration">v2-develop</div><div id="tag16705" onclick="CopyToClipboard('tag16705');return false;" class="tag-decoration">v2-develop-0c6a4a0</div><div id="tag23223" onclick="CopyToClipboard('tag23223');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag6627" onclick="CopyToClipboard('tag6627');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag21523" onclick="CopyToClipboard('tag21523');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15834" onclick="CopyToClipboard('tag15834');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0c6a4a07e3d0b0973b36f84e4ca47065db885838" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931444565" target="_blank">2026-05-15 17:20:26</a></td></tr>
<tr><td><div id="tag26659" onclick="CopyToClipboard('tag26659');return false;" class="tag-decoration">v3</div><div id="tag8293" onclick="CopyToClipboard('tag8293');return false;" class="tag-decoration">v3-05868f4</div><div id="tag23891" onclick="CopyToClipboard('tag23891');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag19063" onclick="CopyToClipboard('tag19063');return false;" class="tag-decoration">v3-v3</div><div id="tag31313" onclick="CopyToClipboard('tag31313');return false;" class="tag-decoration">v3-v3.3</div><div id="tag27590" onclick="CopyToClipboard('tag27590');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/05868f4160fbd5c11dca809d582262c0e2eede20" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25927508449" target="_blank">2026-05-15 15:55:13</a></td></tr>
<tr><td><div id="tag12088" onclick="CopyToClipboard('tag12088');return false;" class="tag-decoration">v3-develop</div><div id="tag13675" onclick="CopyToClipboard('tag13675');return false;" class="tag-decoration">v3-develop-4e0975d</div><div id="tag20632" onclick="CopyToClipboard('tag20632');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag6110" onclick="CopyToClipboard('tag6110');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30539" onclick="CopyToClipboard('tag30539');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag28201" onclick="CopyToClipboard('tag28201');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4e0975dfed351fc725a1b2865a32ea085b372088" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25927508364" target="_blank">2026-05-15 15:55:13</a></td></tr>
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
