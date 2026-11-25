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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16698" onclick="CopyToClipboard('tag16698');return false;" class="tag-decoration">v2</div><div id="tag2006" onclick="CopyToClipboard('tag2006');return false;" class="tag-decoration">v2-6bd1507</div><div id="tag146" onclick="CopyToClipboard('tag146');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag10832" onclick="CopyToClipboard('tag10832');return false;" class="tag-decoration">v2-v2</div><div id="tag21532" onclick="CopyToClipboard('tag21532');return false;" class="tag-decoration">v2-v2.3</div><div id="tag6511" onclick="CopyToClipboard('tag6511');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/6bd1507262a6497557281cadb53a8291420ce6ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45548261406" target="_blank">2026-11-25 04:39:18</a></td></tr>
<tr><td><div id="tag13430" onclick="CopyToClipboard('tag13430');return false;" class="tag-decoration">v2-develop</div><div id="tag11604" onclick="CopyToClipboard('tag11604');return false;" class="tag-decoration">v2-develop-6aa0027</div><div id="tag14179" onclick="CopyToClipboard('tag14179');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag18907" onclick="CopyToClipboard('tag18907');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag21562" onclick="CopyToClipboard('tag21562');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag21889" onclick="CopyToClipboard('tag21889');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6aa0027ed1a5fedf153d47232f68649cb8dfac59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493231518" target="_blank">2026-11-24 21:39:00</a></td></tr>
<tr><td><div id="tag14492" onclick="CopyToClipboard('tag14492');return false;" class="tag-decoration">v3</div><div id="tag21716" onclick="CopyToClipboard('tag21716');return false;" class="tag-decoration">v3-8c376cf</div><div id="tag9877" onclick="CopyToClipboard('tag9877');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag28445" onclick="CopyToClipboard('tag28445');return false;" class="tag-decoration">v3-v3</div><div id="tag18797" onclick="CopyToClipboard('tag18797');return false;" class="tag-decoration">v3-v3.6</div><div id="tag17206" onclick="CopyToClipboard('tag17206');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8c376cf15383a59c63a653a62b10b5c80f654696" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45548256225" target="_blank">2026-11-25 04:39:15</a></td></tr>
<tr><td><div id="tag18042" onclick="CopyToClipboard('tag18042');return false;" class="tag-decoration">v3-develop</div><div id="tag29966" onclick="CopyToClipboard('tag29966');return false;" class="tag-decoration">v3-develop-d41469e</div><div id="tag27256" onclick="CopyToClipboard('tag27256');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag26405" onclick="CopyToClipboard('tag26405');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag18969" onclick="CopyToClipboard('tag18969');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag6119" onclick="CopyToClipboard('tag6119');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d41469e76db609d0dde4c5fe9baac086e534db7a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45548260508" target="_blank">2026-11-25 04:39:17</a></td></tr>
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
