---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27561" onclick="CopyToClipboard('tag27561');return false;" class="tag-decoration">release</div><div id="tag1065" onclick="CopyToClipboard('tag1065');return false;" class="tag-decoration">release-0fb6956</div><div id="tag469" onclick="CopyToClipboard('tag469');return false;" class="tag-decoration">release-8.9.0</div><div id="tag26669" onclick="CopyToClipboard('tag26669');return false;" class="tag-decoration">release-v8</div><div id="tag26963" onclick="CopyToClipboard('tag26963');return false;" class="tag-decoration">release-v8.9</div><div id="tag24464" onclick="CopyToClipboard('tag24464');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/0fb69562628d34f8004e574e38a835f75d948078" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34356757276" target="_blank">2026-09-09 13:23:20</a></td></tr>
<tr><td><div id="tag29841" onclick="CopyToClipboard('tag29841');return false;" class="tag-decoration">testing</div><div id="tag10896" onclick="CopyToClipboard('tag10896');return false;" class="tag-decoration">testing-869c41d</div><div id="tag24107" onclick="CopyToClipboard('tag24107');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag26824" onclick="CopyToClipboard('tag26824');return false;" class="tag-decoration">testing-v8</div><div id="tag1027" onclick="CopyToClipboard('tag1027');return false;" class="tag-decoration">testing-v8.9</div><div id="tag13123" onclick="CopyToClipboard('tag13123');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/869c41da13eb1000a759b99b7ed90ec28cf98890" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/33781534752" target="_blank">2026-09-03 16:55:39</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
