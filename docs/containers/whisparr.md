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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22668" onclick="CopyToClipboard('tag22668');return false;" class="tag-decoration">v2</div><div id="tag30725" onclick="CopyToClipboard('tag30725');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag25631" onclick="CopyToClipboard('tag25631');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag24995" onclick="CopyToClipboard('tag24995');return false;" class="tag-decoration">v2-v2</div><div id="tag2276" onclick="CopyToClipboard('tag2276');return false;" class="tag-decoration">v2-v2.2</div><div id="tag4753" onclick="CopyToClipboard('tag4753');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag16003" onclick="CopyToClipboard('tag16003');return false;" class="tag-decoration">v2-develop</div><div id="tag8254" onclick="CopyToClipboard('tag8254');return false;" class="tag-decoration">v2-develop-5574480</div><div id="tag15709" onclick="CopyToClipboard('tag15709');return false;" class="tag-decoration">v2-develop-2.2.0-develop.380</div><div id="tag26458" onclick="CopyToClipboard('tag26458');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag32552" onclick="CopyToClipboard('tag32552');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag6289" onclick="CopyToClipboard('tag6289');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5574480ba93983a57e6b3e4ed191c77a04c34351" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363855676" target="_blank">2026-09-18 15:40:23</a></td></tr>
<tr><td><div id="tag11653" onclick="CopyToClipboard('tag11653');return false;" class="tag-decoration">v3</div><div id="tag25091" onclick="CopyToClipboard('tag25091');return false;" class="tag-decoration">v3-44c7018</div><div id="tag5527" onclick="CopyToClipboard('tag5527');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag18204" onclick="CopyToClipboard('tag18204');return false;" class="tag-decoration">v3-v3</div><div id="tag2376" onclick="CopyToClipboard('tag2376');return false;" class="tag-decoration">v3-v3.6</div><div id="tag3624" onclick="CopyToClipboard('tag3624');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/44c70188b212c0edcc5a8dd8de67fef16b6994a1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363850436" target="_blank">2026-09-18 15:40:20</a></td></tr>
<tr><td><div id="tag4985" onclick="CopyToClipboard('tag4985');return false;" class="tag-decoration">v3-develop</div><div id="tag5801" onclick="CopyToClipboard('tag5801');return false;" class="tag-decoration">v3-develop-a503800</div><div id="tag1534" onclick="CopyToClipboard('tag1534');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1674</div><div id="tag31657" onclick="CopyToClipboard('tag31657');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30051" onclick="CopyToClipboard('tag30051');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag1337" onclick="CopyToClipboard('tag1337');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a503800e179265535b3d4071e967b9650ff12307" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363841995" target="_blank">2026-09-18 15:40:15</a></td></tr>
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
