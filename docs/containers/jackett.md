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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27051" onclick="CopyToClipboard('tag27051');return false;" class="tag-decoration">release</div><div id="tag8202" onclick="CopyToClipboard('tag8202');return false;" class="tag-decoration">release-c21f76e</div><div id="tag2346" onclick="CopyToClipboard('tag2346');return false;" class="tag-decoration">release-0.24.2581</div><div id="tag9676" onclick="CopyToClipboard('tag9676');return false;" class="tag-decoration">release-v0</div><div id="tag10475" onclick="CopyToClipboard('tag10475');return false;" class="tag-decoration">release-v0.24</div><div id="tag15700" onclick="CopyToClipboard('tag15700');return false;" class="tag-decoration">release-v0.24.2581</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c21f76e9eb1b41f9e7caed1fbbdafd0595f0b584" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34746205246" target="_blank">2026-09-13 07:50:18</a></td></tr>
<tr><td><div id="tag29962" onclick="CopyToClipboard('tag29962');return false;" class="tag-decoration">testing</div><div id="tag1367" onclick="CopyToClipboard('tag1367');return false;" class="tag-decoration">testing-d44c37d</div><div id="tag21623" onclick="CopyToClipboard('tag21623');return false;" class="tag-decoration">testing-0.24.2572</div><div id="tag25813" onclick="CopyToClipboard('tag25813');return false;" class="tag-decoration">testing-v0</div><div id="tag30868" onclick="CopyToClipboard('tag30868');return false;" class="tag-decoration">testing-v0.24</div><div id="tag31017" onclick="CopyToClipboard('tag31017');return false;" class="tag-decoration">testing-v0.24.2572</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d44c37dbea758477b2d0726ce01d840981248712" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34680874539" target="_blank">2026-09-12 07:29:39</a></td></tr>
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
