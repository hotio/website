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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6747" onclick="CopyToClipboard('tag6747');return false;" class="tag-decoration">v2</div><div id="tag23731" onclick="CopyToClipboard('tag23731');return false;" class="tag-decoration">v2-aa0f0d2</div><div id="tag27156" onclick="CopyToClipboard('tag27156');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag16812" onclick="CopyToClipboard('tag16812');return false;" class="tag-decoration">v2-v2</div><div id="tag13811" onclick="CopyToClipboard('tag13811');return false;" class="tag-decoration">v2-v2.2</div><div id="tag23289" onclick="CopyToClipboard('tag23289');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa0f0d26e4d2f049b755c376d333254de06c29ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496182974" target="_blank">2026-09-10 15:31:17</a></td></tr>
<tr><td><div id="tag13770" onclick="CopyToClipboard('tag13770');return false;" class="tag-decoration">v2-develop</div><div id="tag3269" onclick="CopyToClipboard('tag3269');return false;" class="tag-decoration">v2-develop-604b7ba</div><div id="tag18115" onclick="CopyToClipboard('tag18115');return false;" class="tag-decoration">v2-develop-2.2.0-develop.336</div><div id="tag24765" onclick="CopyToClipboard('tag24765');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag27488" onclick="CopyToClipboard('tag27488');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag7446" onclick="CopyToClipboard('tag7446');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/604b7ba5bba395a839639419f849187037ebb68a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427135068" target="_blank">2026-09-10 01:51:29</a></td></tr>
<tr><td><div id="tag19099" onclick="CopyToClipboard('tag19099');return false;" class="tag-decoration">v3</div><div id="tag31079" onclick="CopyToClipboard('tag31079');return false;" class="tag-decoration">v3-25553ab</div><div id="tag26821" onclick="CopyToClipboard('tag26821');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag14522" onclick="CopyToClipboard('tag14522');return false;" class="tag-decoration">v3-v3</div><div id="tag23445" onclick="CopyToClipboard('tag23445');return false;" class="tag-decoration">v3-v3.5</div><div id="tag4977" onclick="CopyToClipboard('tag4977');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/25553ab6a3a41207526ac746b0bab9f21be57b2f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427140096" target="_blank">2026-09-10 01:51:34</a></td></tr>
<tr><td><div id="tag32601" onclick="CopyToClipboard('tag32601');return false;" class="tag-decoration">v3-develop</div><div id="tag23686" onclick="CopyToClipboard('tag23686');return false;" class="tag-decoration">v3-develop-1199b2a</div><div id="tag17461" onclick="CopyToClipboard('tag17461');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1591</div><div id="tag17317" onclick="CopyToClipboard('tag17317');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31860" onclick="CopyToClipboard('tag31860');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag30551" onclick="CopyToClipboard('tag30551');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1199b2abe88f4d7c9ed256435e186b431a67be4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427144393" target="_blank">2026-09-10 01:51:37</a></td></tr>
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
