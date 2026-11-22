---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2496" onclick="CopyToClipboard('tag2496');return false;" class="tag-decoration">release</div><div id="tag29202" onclick="CopyToClipboard('tag29202');return false;" class="tag-decoration">release-f46e7c0</div><div id="tag27245" onclick="CopyToClipboard('tag27245');return false;" class="tag-decoration">release-0.25.24</div><div id="tag10410" onclick="CopyToClipboard('tag10410');return false;" class="tag-decoration">release-v0</div><div id="tag9135" onclick="CopyToClipboard('tag9135');return false;" class="tag-decoration">release-v0.25</div><div id="tag1025" onclick="CopyToClipboard('tag1025');return false;" class="tag-decoration">release-v0.25.24</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f46e7c0a3868148d001b570ca9994d501664bd29" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45024908566" target="_blank">2026-11-22 12:57:04</a></td></tr>
<tr><td><div id="tag13922" onclick="CopyToClipboard('tag13922');return false;" class="tag-decoration">testing</div><div id="tag10308" onclick="CopyToClipboard('tag10308');return false;" class="tag-decoration">testing-508fbf7</div><div id="tag23284" onclick="CopyToClipboard('tag23284');return false;" class="tag-decoration">testing-0.25.20</div><div id="tag24025" onclick="CopyToClipboard('tag24025');return false;" class="tag-decoration">testing-v0</div><div id="tag1315" onclick="CopyToClipboard('tag1315');return false;" class="tag-decoration">testing-v0.25</div><div id="tag27683" onclick="CopyToClipboard('tag27683');return false;" class="tag-decoration">testing-v0.25.20</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/508fbf720d99ab44e2370b4e04fbc91c95873bc0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/44901381150" target="_blank">2026-11-21 11:55:23</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
