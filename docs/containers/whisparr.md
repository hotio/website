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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16162" onclick="CopyToClipboard('tag16162');return false;" class="tag-decoration">v2</div><div id="tag8110" onclick="CopyToClipboard('tag8110');return false;" class="tag-decoration">v2-abbdf6a</div><div id="tag7982" onclick="CopyToClipboard('tag7982');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag3588" onclick="CopyToClipboard('tag3588');return false;" class="tag-decoration">v2-v2</div><div id="tag10788" onclick="CopyToClipboard('tag10788');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15767" onclick="CopyToClipboard('tag15767');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/abbdf6adaec2f890b128d02e02ae2ae2af58d889" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087564" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag20776" onclick="CopyToClipboard('tag20776');return false;" class="tag-decoration">v2-develop</div><div id="tag15541" onclick="CopyToClipboard('tag15541');return false;" class="tag-decoration">v2-develop-f3710c9</div><div id="tag19198" onclick="CopyToClipboard('tag19198');return false;" class="tag-decoration">v2-develop-2.2.0-develop.131</div><div id="tag17195" onclick="CopyToClipboard('tag17195');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag28896" onclick="CopyToClipboard('tag28896');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag4844" onclick="CopyToClipboard('tag4844');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f3710c9e324ab4b0bd927de7a77f2abc02d92f39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/26313926583" target="_blank">2026-05-22 21:56:34</a></td></tr>
<tr><td><div id="tag28188" onclick="CopyToClipboard('tag28188');return false;" class="tag-decoration">v3</div><div id="tag29910" onclick="CopyToClipboard('tag29910');return false;" class="tag-decoration">v3-7932ed4</div><div id="tag12906" onclick="CopyToClipboard('tag12906');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag13303" onclick="CopyToClipboard('tag13303');return false;" class="tag-decoration">v3-v3</div><div id="tag16235" onclick="CopyToClipboard('tag16235');return false;" class="tag-decoration">v3-v3.3</div><div id="tag4885" onclick="CopyToClipboard('tag4885');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7932ed4668859862bc68a5f4c2e64dc7edd91d46" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087814" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag21929" onclick="CopyToClipboard('tag21929');return false;" class="tag-decoration">v3-develop</div><div id="tag22686" onclick="CopyToClipboard('tag22686');return false;" class="tag-decoration">v3-develop-4e32145</div><div id="tag25044" onclick="CopyToClipboard('tag25044');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag25182" onclick="CopyToClipboard('tag25182');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag26845" onclick="CopyToClipboard('tag26845');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag26626" onclick="CopyToClipboard('tag26626');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4e32145a0d008bda8d2e7dae0c04813241e87f3d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988088066" target="_blank">2026-05-17 10:16:42</a></td></tr>
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
