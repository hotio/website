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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7963" onclick="CopyToClipboard('tag7963');return false;" class="tag-decoration">release</div><div id="tag4464" onclick="CopyToClipboard('tag4464');return false;" class="tag-decoration">release-493b294</div><div id="tag29121" onclick="CopyToClipboard('tag29121');return false;" class="tag-decoration">release-0.24.1552</div><div id="tag14431" onclick="CopyToClipboard('tag14431');return false;" class="tag-decoration">release-v0</div><div id="tag27033" onclick="CopyToClipboard('tag27033');return false;" class="tag-decoration">release-v0.24</div><div id="tag6628" onclick="CopyToClipboard('tag6628');return false;" class="tag-decoration">release-v0.24.1552</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/493b2945a1fa7e2611e3b375297e4ef8defd6253" target="_blank">Version update: 0.24.1542 => 0.24.1552</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24068564097" target="_blank">2026-04-07 06:54:33</a></td></tr>
<tr><td><div id="tag20048" onclick="CopyToClipboard('tag20048');return false;" class="tag-decoration">testing</div><div id="tag16383" onclick="CopyToClipboard('tag16383');return false;" class="tag-decoration">testing-6d5cd5b</div><div id="tag19055" onclick="CopyToClipboard('tag19055');return false;" class="tag-decoration">testing-0.24.1554</div><div id="tag3360" onclick="CopyToClipboard('tag3360');return false;" class="tag-decoration">testing-v0</div><div id="tag23720" onclick="CopyToClipboard('tag23720');return false;" class="tag-decoration">testing-v0.24</div><div id="tag21710" onclick="CopyToClipboard('tag21710');return false;" class="tag-decoration">testing-v0.24.1554</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6d5cd5b74ad9e089d2fe8bedd6f83e2f9aeec00a" target="_blank">Version update: 0.24.1552 => 0.24.1554</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24122210000" target="_blank">2026-04-08 06:54:41</a></td></tr>
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
