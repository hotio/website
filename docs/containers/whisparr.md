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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22825" onclick="CopyToClipboard('tag22825');return false;" class="tag-decoration">v2</div><div id="tag27772" onclick="CopyToClipboard('tag27772');return false;" class="tag-decoration">v2-aa0f0d2</div><div id="tag7348" onclick="CopyToClipboard('tag7348');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag30635" onclick="CopyToClipboard('tag30635');return false;" class="tag-decoration">v2-v2</div><div id="tag26705" onclick="CopyToClipboard('tag26705');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19569" onclick="CopyToClipboard('tag19569');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa0f0d26e4d2f049b755c376d333254de06c29ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496182974" target="_blank">2026-09-10 15:31:17</a></td></tr>
<tr><td><div id="tag16291" onclick="CopyToClipboard('tag16291');return false;" class="tag-decoration">v2-develop</div><div id="tag11603" onclick="CopyToClipboard('tag11603');return false;" class="tag-decoration">v2-develop-f11c090</div><div id="tag8496" onclick="CopyToClipboard('tag8496');return false;" class="tag-decoration">v2-develop-2.2.0-develop.337</div><div id="tag16803" onclick="CopyToClipboard('tag16803');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29189" onclick="CopyToClipboard('tag29189');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag6936" onclick="CopyToClipboard('tag6936');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f11c0909978109156ef58ac5b4948503b204d171" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34516422502" target="_blank">2026-09-10 18:46:47</a></td></tr>
<tr><td><div id="tag21319" onclick="CopyToClipboard('tag21319');return false;" class="tag-decoration">v3</div><div id="tag20099" onclick="CopyToClipboard('tag20099');return false;" class="tag-decoration">v3-70ef522</div><div id="tag4817" onclick="CopyToClipboard('tag4817');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag9703" onclick="CopyToClipboard('tag9703');return false;" class="tag-decoration">v3-v3</div><div id="tag30841" onclick="CopyToClipboard('tag30841');return false;" class="tag-decoration">v3-v3.5</div><div id="tag7920" onclick="CopyToClipboard('tag7920');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70ef52211c01fbf7244fc912f128af3db4311133" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496194322" target="_blank">2026-09-10 15:31:23</a></td></tr>
<tr><td><div id="tag3707" onclick="CopyToClipboard('tag3707');return false;" class="tag-decoration">v3-develop</div><div id="tag26262" onclick="CopyToClipboard('tag26262');return false;" class="tag-decoration">v3-develop-0d51f18</div><div id="tag20513" onclick="CopyToClipboard('tag20513');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1610</div><div id="tag31030" onclick="CopyToClipboard('tag31030');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag18052" onclick="CopyToClipboard('tag18052');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag19530" onclick="CopyToClipboard('tag19530');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0d51f1878dc3d248a2c6a921a62ae35c73b5de8d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34731455412" target="_blank">2026-09-13 01:48:35</a></td></tr>
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
