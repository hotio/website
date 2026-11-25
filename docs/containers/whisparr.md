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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26050" onclick="CopyToClipboard('tag26050');return false;" class="tag-decoration">v2</div><div id="tag113" onclick="CopyToClipboard('tag113');return false;" class="tag-decoration">v2-6bd1507</div><div id="tag29578" onclick="CopyToClipboard('tag29578');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag29006" onclick="CopyToClipboard('tag29006');return false;" class="tag-decoration">v2-v2</div><div id="tag18537" onclick="CopyToClipboard('tag18537');return false;" class="tag-decoration">v2-v2.3</div><div id="tag8414" onclick="CopyToClipboard('tag8414');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/6bd1507262a6497557281cadb53a8291420ce6ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45548261406" target="_blank">2026-11-25 04:39:18</a></td></tr>
<tr><td><div id="tag6184" onclick="CopyToClipboard('tag6184');return false;" class="tag-decoration">v2-develop</div><div id="tag31543" onclick="CopyToClipboard('tag31543');return false;" class="tag-decoration">v2-develop-6aa0027</div><div id="tag17702" onclick="CopyToClipboard('tag17702');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag6557" onclick="CopyToClipboard('tag6557');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag24057" onclick="CopyToClipboard('tag24057');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag12096" onclick="CopyToClipboard('tag12096');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6aa0027ed1a5fedf153d47232f68649cb8dfac59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493231518" target="_blank">2026-11-24 21:39:00</a></td></tr>
<tr><td><div id="tag18261" onclick="CopyToClipboard('tag18261');return false;" class="tag-decoration">v3</div><div id="tag32675" onclick="CopyToClipboard('tag32675');return false;" class="tag-decoration">v3-4eb09fa</div><div id="tag25167" onclick="CopyToClipboard('tag25167');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag19382" onclick="CopyToClipboard('tag19382');return false;" class="tag-decoration">v3-v3</div><div id="tag24209" onclick="CopyToClipboard('tag24209');return false;" class="tag-decoration">v3-v3.6</div><div id="tag23879" onclick="CopyToClipboard('tag23879');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4eb09fa76d1d1dde83c9dcaa879cd4087a560b18" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493224431" target="_blank">2026-11-24 21:38:57</a></td></tr>
<tr><td><div id="tag21422" onclick="CopyToClipboard('tag21422');return false;" class="tag-decoration">v3-develop</div><div id="tag26879" onclick="CopyToClipboard('tag26879');return false;" class="tag-decoration">v3-develop-4757b23</div><div id="tag18948" onclick="CopyToClipboard('tag18948');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag3783" onclick="CopyToClipboard('tag3783');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19442" onclick="CopyToClipboard('tag19442');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag9440" onclick="CopyToClipboard('tag9440');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4757b23dd9fb03b1011f087840503a7f2289c8df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493242963" target="_blank">2026-11-24 21:39:04</a></td></tr>
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
