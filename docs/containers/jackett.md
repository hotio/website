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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5290" onclick="CopyToClipboard('tag5290');return false;" class="tag-decoration">release</div><div id="tag16860" onclick="CopyToClipboard('tag16860');return false;" class="tag-decoration">release-4085b12</div><div id="tag21149" onclick="CopyToClipboard('tag21149');return false;" class="tag-decoration">release-0.24.2554</div><div id="tag5530" onclick="CopyToClipboard('tag5530');return false;" class="tag-decoration">release-v0</div><div id="tag19038" onclick="CopyToClipboard('tag19038');return false;" class="tag-decoration">release-v0.24</div><div id="tag21828" onclick="CopyToClipboard('tag21828');return false;" class="tag-decoration">release-v0.24.2554</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/4085b12a5460c061609f908ad0365a741f078bda" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34477257237" target="_blank">2026-09-10 12:31:59</a></td></tr>
<tr><td><div id="tag9235" onclick="CopyToClipboard('tag9235');return false;" class="tag-decoration">testing</div><div id="tag21264" onclick="CopyToClipboard('tag21264');return false;" class="tag-decoration">testing-2b67654</div><div id="tag19547" onclick="CopyToClipboard('tag19547');return false;" class="tag-decoration">testing-0.24.2554</div><div id="tag27615" onclick="CopyToClipboard('tag27615');return false;" class="tag-decoration">testing-v0</div><div id="tag32717" onclick="CopyToClipboard('tag32717');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5065" onclick="CopyToClipboard('tag5065');return false;" class="tag-decoration">testing-v0.24.2554</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/2b6765475404e2b427718230becdd9eb7c62dcf6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34477282057" target="_blank">2026-09-10 12:32:15</a></td></tr>
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
