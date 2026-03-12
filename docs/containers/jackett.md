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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26519" onclick="CopyToClipboard('tag26519');return false;" class="tag-decoration">release</div><div id="tag17079" onclick="CopyToClipboard('tag17079');return false;" class="tag-decoration">release-324d243</div><div id="tag7822" onclick="CopyToClipboard('tag7822');return false;" class="tag-decoration">release-0.24.1341</div><div id="tag28255" onclick="CopyToClipboard('tag28255');return false;" class="tag-decoration">release-v0</div><div id="tag15327" onclick="CopyToClipboard('tag15327');return false;" class="tag-decoration">release-v0.24</div><div id="tag16938" onclick="CopyToClipboard('tag16938');return false;" class="tag-decoration">release-v0.24.1341</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/324d2435097c5f586585c3d840a865255638b9c9" target="_blank">Version update: 0.24.1332 => 0.24.1341</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22940813500" target="_blank">2026-03-11 07:01:04</a></td></tr>
<tr><td><div id="tag12897" onclick="CopyToClipboard('tag12897');return false;" class="tag-decoration">testing</div><div id="tag2875" onclick="CopyToClipboard('tag2875');return false;" class="tag-decoration">testing-c0da0f3</div><div id="tag24091" onclick="CopyToClipboard('tag24091');return false;" class="tag-decoration">testing-0.24.1350</div><div id="tag16102" onclick="CopyToClipboard('tag16102');return false;" class="tag-decoration">testing-v0</div><div id="tag12764" onclick="CopyToClipboard('tag12764');return false;" class="tag-decoration">testing-v0.24</div><div id="tag7613" onclick="CopyToClipboard('tag7613');return false;" class="tag-decoration">testing-v0.24.1350</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c0da0f346058182286e6a807c222f3d614f23c09" target="_blank">Version update: 0.24.1341 => 0.24.1350</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22990458076" target="_blank">2026-03-12 07:02:56</a></td></tr>
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
