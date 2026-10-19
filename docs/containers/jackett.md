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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32530" onclick="CopyToClipboard('tag32530');return false;" class="tag-decoration">release</div><div id="tag15502" onclick="CopyToClipboard('tag15502');return false;" class="tag-decoration">release-aec5cf8</div><div id="tag22457" onclick="CopyToClipboard('tag22457');return false;" class="tag-decoration">release-0.24.2875</div><div id="tag26413" onclick="CopyToClipboard('tag26413');return false;" class="tag-decoration">release-v0</div><div id="tag17012" onclick="CopyToClipboard('tag17012');return false;" class="tag-decoration">release-v0.24</div><div id="tag32676" onclick="CopyToClipboard('tag32676');return false;" class="tag-decoration">release-v0.24.2875</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/aec5cf8d09fe82346b53e698dd5f7dd215ad9b35" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/39246353784" target="_blank">2026-10-19 11:40:34</a></td></tr>
<tr><td><div id="tag11287" onclick="CopyToClipboard('tag11287');return false;" class="tag-decoration">testing</div><div id="tag28701" onclick="CopyToClipboard('tag28701');return false;" class="tag-decoration">testing-e52a102</div><div id="tag3767" onclick="CopyToClipboard('tag3767');return false;" class="tag-decoration">testing-0.24.2867</div><div id="tag16810" onclick="CopyToClipboard('tag16810');return false;" class="tag-decoration">testing-v0</div><div id="tag26129" onclick="CopyToClipboard('tag26129');return false;" class="tag-decoration">testing-v0.24</div><div id="tag991" onclick="CopyToClipboard('tag991');return false;" class="tag-decoration">testing-v0.24.2867</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/e52a1029ab8d273fe8ed72917ba653e87d9bce17" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/39126773984" target="_blank">2026-10-18 12:19:01</a></td></tr>
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
