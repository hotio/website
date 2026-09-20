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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6028" onclick="CopyToClipboard('tag6028');return false;" class="tag-decoration">v2</div><div id="tag25385" onclick="CopyToClipboard('tag25385');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag17390" onclick="CopyToClipboard('tag17390');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag8788" onclick="CopyToClipboard('tag8788');return false;" class="tag-decoration">v2-v2</div><div id="tag17871" onclick="CopyToClipboard('tag17871');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13549" onclick="CopyToClipboard('tag13549');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag17498" onclick="CopyToClipboard('tag17498');return false;" class="tag-decoration">v2-develop</div><div id="tag26601" onclick="CopyToClipboard('tag26601');return false;" class="tag-decoration">v2-develop-3e1a116</div><div id="tag8924" onclick="CopyToClipboard('tag8924');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag2732" onclick="CopyToClipboard('tag2732');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag28759" onclick="CopyToClipboard('tag28759');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17720" onclick="CopyToClipboard('tag17720');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e1a116cef3b0a89ab1a64ddc1757f8f5a1039ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35471710899" target="_blank">2026-09-19 21:52:39</a></td></tr>
<tr><td><div id="tag30410" onclick="CopyToClipboard('tag30410');return false;" class="tag-decoration">v3</div><div id="tag13400" onclick="CopyToClipboard('tag13400');return false;" class="tag-decoration">v3-44c7018</div><div id="tag30938" onclick="CopyToClipboard('tag30938');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag980" onclick="CopyToClipboard('tag980');return false;" class="tag-decoration">v3-v3</div><div id="tag32100" onclick="CopyToClipboard('tag32100');return false;" class="tag-decoration">v3-v3.6</div><div id="tag2702" onclick="CopyToClipboard('tag2702');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/44c70188b212c0edcc5a8dd8de67fef16b6994a1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363850436" target="_blank">2026-09-18 15:40:20</a></td></tr>
<tr><td><div id="tag22310" onclick="CopyToClipboard('tag22310');return false;" class="tag-decoration">v3-develop</div><div id="tag29208" onclick="CopyToClipboard('tag29208');return false;" class="tag-decoration">v3-develop-155ef85</div><div id="tag24976" onclick="CopyToClipboard('tag24976');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1706</div><div id="tag19768" onclick="CopyToClipboard('tag19768');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31409" onclick="CopyToClipboard('tag31409');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag17650" onclick="CopyToClipboard('tag17650');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/155ef85f63e9267563f6adf2ed752f27613344fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35483056645" target="_blank">2026-09-20 02:05:08</a></td></tr>
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
