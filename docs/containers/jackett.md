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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29295" onclick="CopyToClipboard('tag29295');return false;" class="tag-decoration">release</div><div id="tag10255" onclick="CopyToClipboard('tag10255');return false;" class="tag-decoration">release-9bd3018</div><div id="tag6297" onclick="CopyToClipboard('tag6297');return false;" class="tag-decoration">release-0.24.2342</div><div id="tag29442" onclick="CopyToClipboard('tag29442');return false;" class="tag-decoration">release-v0</div><div id="tag16007" onclick="CopyToClipboard('tag16007');return false;" class="tag-decoration">release-v0.24</div><div id="tag27211" onclick="CopyToClipboard('tag27211');return false;" class="tag-decoration">release-v0.24.2342</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/9bd3018cc9a1b8ea5a846bfa407a6446cfd65c81" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31152745849" target="_blank">2026-08-07 06:05:20</a></td></tr>
<tr><td><div id="tag25905" onclick="CopyToClipboard('tag25905');return false;" class="tag-decoration">testing</div><div id="tag6710" onclick="CopyToClipboard('tag6710');return false;" class="tag-decoration">testing-c4aafb9</div><div id="tag13752" onclick="CopyToClipboard('tag13752');return false;" class="tag-decoration">testing-0.24.2342</div><div id="tag24068" onclick="CopyToClipboard('tag24068');return false;" class="tag-decoration">testing-v0</div><div id="tag27631" onclick="CopyToClipboard('tag27631');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10810" onclick="CopyToClipboard('tag10810');return false;" class="tag-decoration">testing-v0.24.2342</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c4aafb923884ce593c62d7c8161222a1c1156fa5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31152741430" target="_blank">2026-08-07 06:05:15</a></td></tr>
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
