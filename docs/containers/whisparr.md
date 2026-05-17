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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14501" onclick="CopyToClipboard('tag14501');return false;" class="tag-decoration">v2</div><div id="tag28612" onclick="CopyToClipboard('tag28612');return false;" class="tag-decoration">v2-abbdf6a</div><div id="tag29349" onclick="CopyToClipboard('tag29349');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag11325" onclick="CopyToClipboard('tag11325');return false;" class="tag-decoration">v2-v2</div><div id="tag27760" onclick="CopyToClipboard('tag27760');return false;" class="tag-decoration">v2-v2.2</div><div id="tag14384" onclick="CopyToClipboard('tag14384');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/abbdf6adaec2f890b128d02e02ae2ae2af58d889" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087564" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag8967" onclick="CopyToClipboard('tag8967');return false;" class="tag-decoration">v2-develop</div><div id="tag6386" onclick="CopyToClipboard('tag6386');return false;" class="tag-decoration">v2-develop-076c1fc</div><div id="tag11041" onclick="CopyToClipboard('tag11041');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag5653" onclick="CopyToClipboard('tag5653');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag4099" onclick="CopyToClipboard('tag4099');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28856" onclick="CopyToClipboard('tag28856');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/076c1fceec6f30576b12e8823ad85b098a7d3a11" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087943" target="_blank">2026-05-17 10:16:42</a></td></tr>
<tr><td><div id="tag29861" onclick="CopyToClipboard('tag29861');return false;" class="tag-decoration">v3</div><div id="tag2079" onclick="CopyToClipboard('tag2079');return false;" class="tag-decoration">v3-7932ed4</div><div id="tag27198" onclick="CopyToClipboard('tag27198');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag28315" onclick="CopyToClipboard('tag28315');return false;" class="tag-decoration">v3-v3</div><div id="tag28702" onclick="CopyToClipboard('tag28702');return false;" class="tag-decoration">v3-v3.3</div><div id="tag11344" onclick="CopyToClipboard('tag11344');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7932ed4668859862bc68a5f4c2e64dc7edd91d46" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087814" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag586" onclick="CopyToClipboard('tag586');return false;" class="tag-decoration">v3-develop</div><div id="tag20062" onclick="CopyToClipboard('tag20062');return false;" class="tag-decoration">v3-develop-4e32145</div><div id="tag22971" onclick="CopyToClipboard('tag22971');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag22327" onclick="CopyToClipboard('tag22327');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31252" onclick="CopyToClipboard('tag31252');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag27416" onclick="CopyToClipboard('tag27416');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4e32145a0d008bda8d2e7dae0c04813241e87f3d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988088066" target="_blank">2026-05-17 10:16:42</a></td></tr>
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
