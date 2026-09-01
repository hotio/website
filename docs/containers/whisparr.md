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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22250" onclick="CopyToClipboard('tag22250');return false;" class="tag-decoration">v2</div><div id="tag5338" onclick="CopyToClipboard('tag5338');return false;" class="tag-decoration">v2-640b6d0</div><div id="tag18647" onclick="CopyToClipboard('tag18647');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag4676" onclick="CopyToClipboard('tag4676');return false;" class="tag-decoration">v2-v2</div><div id="tag28683" onclick="CopyToClipboard('tag28683');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21806" onclick="CopyToClipboard('tag21806');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/640b6d02dacd2ffb7e9228a830a5ec50e512fa39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498575525" target="_blank">2026-09-01 10:39:59</a></td></tr>
<tr><td><div id="tag3836" onclick="CopyToClipboard('tag3836');return false;" class="tag-decoration">v2-develop</div><div id="tag21913" onclick="CopyToClipboard('tag21913');return false;" class="tag-decoration">v2-develop-2f81abc</div><div id="tag21010" onclick="CopyToClipboard('tag21010');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag27893" onclick="CopyToClipboard('tag27893');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag17816" onclick="CopyToClipboard('tag17816');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag21101" onclick="CopyToClipboard('tag21101');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2f81abc9270dfb188870f2400cc35a0bddde711d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498580887" target="_blank">2026-09-01 10:40:02</a></td></tr>
<tr><td><div id="tag23201" onclick="CopyToClipboard('tag23201');return false;" class="tag-decoration">v3</div><div id="tag25419" onclick="CopyToClipboard('tag25419');return false;" class="tag-decoration">v3-95602df</div><div id="tag107" onclick="CopyToClipboard('tag107');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag9835" onclick="CopyToClipboard('tag9835');return false;" class="tag-decoration">v3-v3</div><div id="tag390" onclick="CopyToClipboard('tag390');return false;" class="tag-decoration">v3-v3.4</div><div id="tag29748" onclick="CopyToClipboard('tag29748');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/95602df96618f60fba7689422ce10d74d6d90cd3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498583927" target="_blank">2026-09-01 10:40:05</a></td></tr>
<tr><td><div id="tag14785" onclick="CopyToClipboard('tag14785');return false;" class="tag-decoration">v3-develop</div><div id="tag14431" onclick="CopyToClipboard('tag14431');return false;" class="tag-decoration">v3-develop-47fd5ca</div><div id="tag32505" onclick="CopyToClipboard('tag32505');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1444</div><div id="tag768" onclick="CopyToClipboard('tag768');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10982" onclick="CopyToClipboard('tag10982');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag24048" onclick="CopyToClipboard('tag24048');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/47fd5cabf12d2cdd44c13074e487817d7b8c5ce8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498579749" target="_blank">2026-09-01 10:40:02</a></td></tr>
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
