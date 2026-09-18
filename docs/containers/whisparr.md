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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31929" onclick="CopyToClipboard('tag31929');return false;" class="tag-decoration">v2</div><div id="tag31103" onclick="CopyToClipboard('tag31103');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag15289" onclick="CopyToClipboard('tag15289');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag28975" onclick="CopyToClipboard('tag28975');return false;" class="tag-decoration">v2-v2</div><div id="tag20082" onclick="CopyToClipboard('tag20082');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15498" onclick="CopyToClipboard('tag15498');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag25251" onclick="CopyToClipboard('tag25251');return false;" class="tag-decoration">v2-develop</div><div id="tag17195" onclick="CopyToClipboard('tag17195');return false;" class="tag-decoration">v2-develop-c473b7a</div><div id="tag24623" onclick="CopyToClipboard('tag24623');return false;" class="tag-decoration">v2-develop-2.2.0-develop.376</div><div id="tag7175" onclick="CopyToClipboard('tag7175');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag295" onclick="CopyToClipboard('tag295');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag27880" onclick="CopyToClipboard('tag27880');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c473b7a10b9b5cdded12bf560c050832a189d4e7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35316845715" target="_blank">2026-09-18 06:53:05</a></td></tr>
<tr><td><div id="tag1958" onclick="CopyToClipboard('tag1958');return false;" class="tag-decoration">v3</div><div id="tag16059" onclick="CopyToClipboard('tag16059');return false;" class="tag-decoration">v3-7473cc8</div><div id="tag20328" onclick="CopyToClipboard('tag20328');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag10072" onclick="CopyToClipboard('tag10072');return false;" class="tag-decoration">v3-v3</div><div id="tag11030" onclick="CopyToClipboard('tag11030');return false;" class="tag-decoration">v3-v3.6</div><div id="tag24236" onclick="CopyToClipboard('tag24236');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7473cc8e3c972f571ea0ad6fc177334f9017f959" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297332996" target="_blank">2026-09-18 01:56:18</a></td></tr>
<tr><td><div id="tag22944" onclick="CopyToClipboard('tag22944');return false;" class="tag-decoration">v3-develop</div><div id="tag726" onclick="CopyToClipboard('tag726');return false;" class="tag-decoration">v3-develop-a503800</div><div id="tag24281" onclick="CopyToClipboard('tag24281');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1674</div><div id="tag32612" onclick="CopyToClipboard('tag32612');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6992" onclick="CopyToClipboard('tag6992');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag24344" onclick="CopyToClipboard('tag24344');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a503800e179265535b3d4071e967b9650ff12307" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363841995" target="_blank">2026-09-18 15:40:15</a></td></tr>
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
