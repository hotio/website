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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4324" onclick="CopyToClipboard('tag4324');return false;" class="tag-decoration">release</div><div id="tag25379" onclick="CopyToClipboard('tag25379');return false;" class="tag-decoration">release-1c5cc08</div><div id="tag29547" onclick="CopyToClipboard('tag29547');return false;" class="tag-decoration">release-0.24.2605</div><div id="tag25037" onclick="CopyToClipboard('tag25037');return false;" class="tag-decoration">release-v0</div><div id="tag10670" onclick="CopyToClipboard('tag10670');return false;" class="tag-decoration">release-v0.24</div><div id="tag25299" onclick="CopyToClipboard('tag25299');return false;" class="tag-decoration">release-v0.24.2605</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1c5cc08e46beb2f40b8ad821b11c54a7e01d38fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35198544161" target="_blank">2026-09-17 08:13:33</a></td></tr>
<tr><td><div id="tag7328" onclick="CopyToClipboard('tag7328');return false;" class="tag-decoration">testing</div><div id="tag12698" onclick="CopyToClipboard('tag12698');return false;" class="tag-decoration">testing-6ca21f1</div><div id="tag24381" onclick="CopyToClipboard('tag24381');return false;" class="tag-decoration">testing-0.24.2605</div><div id="tag28357" onclick="CopyToClipboard('tag28357');return false;" class="tag-decoration">testing-v0</div><div id="tag2703" onclick="CopyToClipboard('tag2703');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28587" onclick="CopyToClipboard('tag28587');return false;" class="tag-decoration">testing-v0.24.2605</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6ca21f12ae2393b8d02a902e436de28ff940f83b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35230574826" target="_blank">2026-09-17 13:59:06</a></td></tr>
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
