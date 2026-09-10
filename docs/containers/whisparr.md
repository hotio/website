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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23170" onclick="CopyToClipboard('tag23170');return false;" class="tag-decoration">v2</div><div id="tag3073" onclick="CopyToClipboard('tag3073');return false;" class="tag-decoration">v2-aa0f0d2</div><div id="tag8775" onclick="CopyToClipboard('tag8775');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag26618" onclick="CopyToClipboard('tag26618');return false;" class="tag-decoration">v2-v2</div><div id="tag3997" onclick="CopyToClipboard('tag3997');return false;" class="tag-decoration">v2-v2.2</div><div id="tag3536" onclick="CopyToClipboard('tag3536');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa0f0d26e4d2f049b755c376d333254de06c29ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496182974" target="_blank">2026-09-10 15:31:17</a></td></tr>
<tr><td><div id="tag11172" onclick="CopyToClipboard('tag11172');return false;" class="tag-decoration">v2-develop</div><div id="tag31247" onclick="CopyToClipboard('tag31247');return false;" class="tag-decoration">v2-develop-f11c090</div><div id="tag5322" onclick="CopyToClipboard('tag5322');return false;" class="tag-decoration">v2-develop-2.2.0-develop.337</div><div id="tag12787" onclick="CopyToClipboard('tag12787');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag15320" onclick="CopyToClipboard('tag15320');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15068" onclick="CopyToClipboard('tag15068');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f11c0909978109156ef58ac5b4948503b204d171" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34516422502" target="_blank">2026-09-10 18:46:47</a></td></tr>
<tr><td><div id="tag2408" onclick="CopyToClipboard('tag2408');return false;" class="tag-decoration">v3</div><div id="tag29622" onclick="CopyToClipboard('tag29622');return false;" class="tag-decoration">v3-70ef522</div><div id="tag16126" onclick="CopyToClipboard('tag16126');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag10311" onclick="CopyToClipboard('tag10311');return false;" class="tag-decoration">v3-v3</div><div id="tag12500" onclick="CopyToClipboard('tag12500');return false;" class="tag-decoration">v3-v3.5</div><div id="tag6880" onclick="CopyToClipboard('tag6880');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70ef52211c01fbf7244fc912f128af3db4311133" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496194322" target="_blank">2026-09-10 15:31:23</a></td></tr>
<tr><td><div id="tag458" onclick="CopyToClipboard('tag458');return false;" class="tag-decoration">v3-develop</div><div id="tag8953" onclick="CopyToClipboard('tag8953');return false;" class="tag-decoration">v3-develop-542099b</div><div id="tag14106" onclick="CopyToClipboard('tag14106');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1598</div><div id="tag15984" onclick="CopyToClipboard('tag15984');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag27164" onclick="CopyToClipboard('tag27164');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag4298" onclick="CopyToClipboard('tag4298');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/542099b1a2a807cb244db84612584785be297f46" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34531302141" target="_blank">2026-09-10 21:16:51</a></td></tr>
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
