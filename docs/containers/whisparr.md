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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23726" onclick="CopyToClipboard('tag23726');return false;" class="tag-decoration">v2</div><div id="tag10417" onclick="CopyToClipboard('tag10417');return false;" class="tag-decoration">v2-3b89e2e</div><div id="tag10648" onclick="CopyToClipboard('tag10648');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag11002" onclick="CopyToClipboard('tag11002');return false;" class="tag-decoration">v2-v2</div><div id="tag16587" onclick="CopyToClipboard('tag16587');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11368" onclick="CopyToClipboard('tag11368');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3b89e2e9a15c44c5415047148770ea51241447ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599372066" target="_blank">2026-09-02 06:33:24</a></td></tr>
<tr><td><div id="tag18042" onclick="CopyToClipboard('tag18042');return false;" class="tag-decoration">v2-develop</div><div id="tag19950" onclick="CopyToClipboard('tag19950');return false;" class="tag-decoration">v2-develop-1c0e956</div><div id="tag3891" onclick="CopyToClipboard('tag3891');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag2145" onclick="CopyToClipboard('tag2145');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag6898" onclick="CopyToClipboard('tag6898');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28012" onclick="CopyToClipboard('tag28012');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1c0e9564c09c7d78cfa5ce72ca00f60cd5afa701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599363470" target="_blank">2026-09-02 06:33:17</a></td></tr>
<tr><td><div id="tag2436" onclick="CopyToClipboard('tag2436');return false;" class="tag-decoration">v3</div><div id="tag7956" onclick="CopyToClipboard('tag7956');return false;" class="tag-decoration">v3-b8885e6</div><div id="tag17184" onclick="CopyToClipboard('tag17184');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag23250" onclick="CopyToClipboard('tag23250');return false;" class="tag-decoration">v3-v3</div><div id="tag113" onclick="CopyToClipboard('tag113');return false;" class="tag-decoration">v3-v3.4</div><div id="tag28391" onclick="CopyToClipboard('tag28391');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/b8885e6212135f291e116db88b7a8708aac9bae6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33919594938" target="_blank">2026-09-04 21:07:19</a></td></tr>
<tr><td><div id="tag8296" onclick="CopyToClipboard('tag8296');return false;" class="tag-decoration">v3-develop</div><div id="tag20209" onclick="CopyToClipboard('tag20209');return false;" class="tag-decoration">v3-develop-c8624b1</div><div id="tag24392" onclick="CopyToClipboard('tag24392');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1555</div><div id="tag23176" onclick="CopyToClipboard('tag23176');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15994" onclick="CopyToClipboard('tag15994');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag11373" onclick="CopyToClipboard('tag11373');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c8624b1a6babbaabd20adc2003017fbe3f5c0f83" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33907044120" target="_blank">2026-09-04 18:39:05</a></td></tr>
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
