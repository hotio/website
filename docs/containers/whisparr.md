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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28156" onclick="CopyToClipboard('tag28156');return false;" class="tag-decoration">v2</div><div id="tag21780" onclick="CopyToClipboard('tag21780');return false;" class="tag-decoration">v2-aa0f0d2</div><div id="tag10197" onclick="CopyToClipboard('tag10197');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7539" onclick="CopyToClipboard('tag7539');return false;" class="tag-decoration">v2-v2</div><div id="tag16842" onclick="CopyToClipboard('tag16842');return false;" class="tag-decoration">v2-v2.2</div><div id="tag4974" onclick="CopyToClipboard('tag4974');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa0f0d26e4d2f049b755c376d333254de06c29ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496182974" target="_blank">2026-09-10 15:31:17</a></td></tr>
<tr><td><div id="tag24000" onclick="CopyToClipboard('tag24000');return false;" class="tag-decoration">v2-develop</div><div id="tag5774" onclick="CopyToClipboard('tag5774');return false;" class="tag-decoration">v2-develop-24b6c11</div><div id="tag31957" onclick="CopyToClipboard('tag31957');return false;" class="tag-decoration">v2-develop-2.2.0-develop.337</div><div id="tag3198" onclick="CopyToClipboard('tag3198');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag32483" onclick="CopyToClipboard('tag32483');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag27267" onclick="CopyToClipboard('tag27267');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/24b6c116eebdcbdf3ea9c059c2e8a33d2d9d000d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34968199088" target="_blank">2026-09-15 12:19:35</a></td></tr>
<tr><td><div id="tag7667" onclick="CopyToClipboard('tag7667');return false;" class="tag-decoration">v3</div><div id="tag2776" onclick="CopyToClipboard('tag2776');return false;" class="tag-decoration">v3-70ef522</div><div id="tag26126" onclick="CopyToClipboard('tag26126');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag17290" onclick="CopyToClipboard('tag17290');return false;" class="tag-decoration">v3-v3</div><div id="tag6797" onclick="CopyToClipboard('tag6797');return false;" class="tag-decoration">v3-v3.5</div><div id="tag20630" onclick="CopyToClipboard('tag20630');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70ef52211c01fbf7244fc912f128af3db4311133" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496194322" target="_blank">2026-09-10 15:31:23</a></td></tr>
<tr><td><div id="tag30192" onclick="CopyToClipboard('tag30192');return false;" class="tag-decoration">v3-develop</div><div id="tag15796" onclick="CopyToClipboard('tag15796');return false;" class="tag-decoration">v3-develop-15f4460</div><div id="tag29604" onclick="CopyToClipboard('tag29604');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1624</div><div id="tag10899" onclick="CopyToClipboard('tag10899');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20891" onclick="CopyToClipboard('tag20891');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag17718" onclick="CopyToClipboard('tag17718');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/15f4460b2079ab0dc8e2d1c30cb3af6793f649dc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34890221356" target="_blank">2026-09-14 19:59:45</a></td></tr>
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
