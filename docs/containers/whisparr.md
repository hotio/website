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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8871" onclick="CopyToClipboard('tag8871');return false;" class="tag-decoration">v2</div><div id="tag6347" onclick="CopyToClipboard('tag6347');return false;" class="tag-decoration">v2-aa1914d</div><div id="tag24884" onclick="CopyToClipboard('tag24884');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag3796" onclick="CopyToClipboard('tag3796');return false;" class="tag-decoration">v2-v2</div><div id="tag24333" onclick="CopyToClipboard('tag24333');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7544" onclick="CopyToClipboard('tag7544');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa1914d70212e1e14ae67f4a62cc2cb25ae5bc59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919589942" target="_blank">2026-09-04 21:07:15</a></td></tr>
<tr><td><div id="tag25909" onclick="CopyToClipboard('tag25909');return false;" class="tag-decoration">v2-develop</div><div id="tag31623" onclick="CopyToClipboard('tag31623');return false;" class="tag-decoration">v2-develop-e83f36c</div><div id="tag7983" onclick="CopyToClipboard('tag7983');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag24312" onclick="CopyToClipboard('tag24312');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag16676" onclick="CopyToClipboard('tag16676');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag21258" onclick="CopyToClipboard('tag21258');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e83f36cde5eb5902e50183666fb74b2b76c8ae3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919592194" target="_blank">2026-09-04 21:07:17</a></td></tr>
<tr><td><div id="tag21586" onclick="CopyToClipboard('tag21586');return false;" class="tag-decoration">v3</div><div id="tag2316" onclick="CopyToClipboard('tag2316');return false;" class="tag-decoration">v3-b8885e6</div><div id="tag5262" onclick="CopyToClipboard('tag5262');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag1437" onclick="CopyToClipboard('tag1437');return false;" class="tag-decoration">v3-v3</div><div id="tag3951" onclick="CopyToClipboard('tag3951');return false;" class="tag-decoration">v3-v3.4</div><div id="tag9096" onclick="CopyToClipboard('tag9096');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b8885e6212135f291e116db88b7a8708aac9bae6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919594938" target="_blank">2026-09-04 21:07:19</a></td></tr>
<tr><td><div id="tag546" onclick="CopyToClipboard('tag546');return false;" class="tag-decoration">v3-develop</div><div id="tag27095" onclick="CopyToClipboard('tag27095');return false;" class="tag-decoration">v3-develop-f427981</div><div id="tag12121" onclick="CopyToClipboard('tag12121');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1566</div><div id="tag11749" onclick="CopyToClipboard('tag11749');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag16930" onclick="CopyToClipboard('tag16930');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag20205" onclick="CopyToClipboard('tag20205');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f4279814116393925f34250497dce404316c4f47" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33937152796" target="_blank">2026-09-05 01:46:20</a></td></tr>
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
