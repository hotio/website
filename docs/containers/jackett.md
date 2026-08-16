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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4900" onclick="CopyToClipboard('tag4900');return false;" class="tag-decoration">release</div><div id="tag1089" onclick="CopyToClipboard('tag1089');return false;" class="tag-decoration">release-fce8daa</div><div id="tag14416" onclick="CopyToClipboard('tag14416');return false;" class="tag-decoration">release-0.24.2413</div><div id="tag23915" onclick="CopyToClipboard('tag23915');return false;" class="tag-decoration">release-v0</div><div id="tag27912" onclick="CopyToClipboard('tag27912');return false;" class="tag-decoration">release-v0.24</div><div id="tag733" onclick="CopyToClipboard('tag733');return false;" class="tag-decoration">release-v0.24.2413</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fce8daaacdd064ad80d3cd91195d20889722fdb9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31931357545" target="_blank">2026-08-16 06:24:50</a></td></tr>
<tr><td><div id="tag5089" onclick="CopyToClipboard('tag5089');return false;" class="tag-decoration">testing</div><div id="tag7343" onclick="CopyToClipboard('tag7343');return false;" class="tag-decoration">testing-d59f2ea</div><div id="tag16484" onclick="CopyToClipboard('tag16484');return false;" class="tag-decoration">testing-0.24.2413</div><div id="tag29281" onclick="CopyToClipboard('tag29281');return false;" class="tag-decoration">testing-v0</div><div id="tag10944" onclick="CopyToClipboard('tag10944');return false;" class="tag-decoration">testing-v0.24</div><div id="tag20142" onclick="CopyToClipboard('tag20142');return false;" class="tag-decoration">testing-v0.24.2413</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d59f2eacb04824ddb0c7a73d91048ddee9d6c9fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31931357935" target="_blank">2026-08-16 06:24:50</a></td></tr>
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
