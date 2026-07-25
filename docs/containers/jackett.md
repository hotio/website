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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8122" onclick="CopyToClipboard('tag8122');return false;" class="tag-decoration">release</div><div id="tag24255" onclick="CopyToClipboard('tag24255');return false;" class="tag-decoration">release-2d9c387</div><div id="tag26481" onclick="CopyToClipboard('tag26481');return false;" class="tag-decoration">release-0.24.2267</div><div id="tag2402" onclick="CopyToClipboard('tag2402');return false;" class="tag-decoration">release-v0</div><div id="tag22605" onclick="CopyToClipboard('tag22605');return false;" class="tag-decoration">release-v0.24</div><div id="tag65" onclick="CopyToClipboard('tag65');return false;" class="tag-decoration">release-v0.24.2267</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2d9c387f112d86ac198036b2dc04389ad8e1a9d4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30147212680" target="_blank">2026-07-25 06:16:14</a></td></tr>
<tr><td><div id="tag20115" onclick="CopyToClipboard('tag20115');return false;" class="tag-decoration">testing</div><div id="tag28675" onclick="CopyToClipboard('tag28675');return false;" class="tag-decoration">testing-535f456</div><div id="tag23267" onclick="CopyToClipboard('tag23267');return false;" class="tag-decoration">testing-0.24.2265</div><div id="tag10227" onclick="CopyToClipboard('tag10227');return false;" class="tag-decoration">testing-v0</div><div id="tag7093" onclick="CopyToClipboard('tag7093');return false;" class="tag-decoration">testing-v0.24</div><div id="tag21900" onclick="CopyToClipboard('tag21900');return false;" class="tag-decoration">testing-v0.24.2265</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/535f456e479ba23add5e1539812d6efd7916e1ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30077997195" target="_blank">2026-07-24 08:10:29</a></td></tr>
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
