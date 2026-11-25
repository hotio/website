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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10938" onclick="CopyToClipboard('tag10938');return false;" class="tag-decoration">v2</div><div id="tag22091" onclick="CopyToClipboard('tag22091');return false;" class="tag-decoration">v2-6bd1507</div><div id="tag13748" onclick="CopyToClipboard('tag13748');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag27278" onclick="CopyToClipboard('tag27278');return false;" class="tag-decoration">v2-v2</div><div id="tag24348" onclick="CopyToClipboard('tag24348');return false;" class="tag-decoration">v2-v2.3</div><div id="tag12801" onclick="CopyToClipboard('tag12801');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/6bd1507262a6497557281cadb53a8291420ce6ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45548261406" target="_blank">2026-11-25 04:39:18</a></td></tr>
<tr><td><div id="tag15990" onclick="CopyToClipboard('tag15990');return false;" class="tag-decoration">v2-develop</div><div id="tag12848" onclick="CopyToClipboard('tag12848');return false;" class="tag-decoration">v2-develop-6aa0027</div><div id="tag3735" onclick="CopyToClipboard('tag3735');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag12332" onclick="CopyToClipboard('tag12332');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11776" onclick="CopyToClipboard('tag11776');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag21453" onclick="CopyToClipboard('tag21453');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6aa0027ed1a5fedf153d47232f68649cb8dfac59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493231518" target="_blank">2026-11-24 21:39:00</a></td></tr>
<tr><td><div id="tag15815" onclick="CopyToClipboard('tag15815');return false;" class="tag-decoration">v3</div><div id="tag6628" onclick="CopyToClipboard('tag6628');return false;" class="tag-decoration">v3-4eb09fa</div><div id="tag3254" onclick="CopyToClipboard('tag3254');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag10574" onclick="CopyToClipboard('tag10574');return false;" class="tag-decoration">v3-v3</div><div id="tag25863" onclick="CopyToClipboard('tag25863');return false;" class="tag-decoration">v3-v3.6</div><div id="tag2775" onclick="CopyToClipboard('tag2775');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4eb09fa76d1d1dde83c9dcaa879cd4087a560b18" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493224431" target="_blank">2026-11-24 21:38:57</a></td></tr>
<tr><td><div id="tag4250" onclick="CopyToClipboard('tag4250');return false;" class="tag-decoration">v3-develop</div><div id="tag2202" onclick="CopyToClipboard('tag2202');return false;" class="tag-decoration">v3-develop-d41469e</div><div id="tag26451" onclick="CopyToClipboard('tag26451');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag24294" onclick="CopyToClipboard('tag24294');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag22689" onclick="CopyToClipboard('tag22689');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag25364" onclick="CopyToClipboard('tag25364');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d41469e76db609d0dde4c5fe9baac086e534db7a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45548260508" target="_blank">2026-11-25 04:39:17</a></td></tr>
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
