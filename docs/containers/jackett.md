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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5097" onclick="CopyToClipboard('tag5097');return false;" class="tag-decoration">release</div><div id="tag29854" onclick="CopyToClipboard('tag29854');return false;" class="tag-decoration">release-6a58cb3</div><div id="tag16238" onclick="CopyToClipboard('tag16238');return false;" class="tag-decoration">release-0.24.1970</div><div id="tag8225" onclick="CopyToClipboard('tag8225');return false;" class="tag-decoration">release-v0</div><div id="tag19240" onclick="CopyToClipboard('tag19240');return false;" class="tag-decoration">release-v0.24</div><div id="tag6317" onclick="CopyToClipboard('tag6317');return false;" class="tag-decoration">release-v0.24.1970</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6a58cb336dde90783857f16c571da189ebb8f258" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26629986574" target="_blank">2026-05-29 09:39:10</a></td></tr>
<tr><td><div id="tag31839" onclick="CopyToClipboard('tag31839');return false;" class="tag-decoration">testing</div><div id="tag29454" onclick="CopyToClipboard('tag29454');return false;" class="tag-decoration">testing-5bd719a</div><div id="tag13381" onclick="CopyToClipboard('tag13381');return false;" class="tag-decoration">testing-0.24.1968</div><div id="tag25776" onclick="CopyToClipboard('tag25776');return false;" class="tag-decoration">testing-v0</div><div id="tag23935" onclick="CopyToClipboard('tag23935');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30590" onclick="CopyToClipboard('tag30590');return false;" class="tag-decoration">testing-v0.24.1968</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/5bd719a328d5e2bb750a0f9c534ed450a8c66766" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26559315025" target="_blank">2026-05-28 06:45:41</a></td></tr>
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
