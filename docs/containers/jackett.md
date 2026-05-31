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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23417" onclick="CopyToClipboard('tag23417');return false;" class="tag-decoration">release</div><div id="tag10533" onclick="CopyToClipboard('tag10533');return false;" class="tag-decoration">release-a90eee8</div><div id="tag3473" onclick="CopyToClipboard('tag3473');return false;" class="tag-decoration">release-0.24.1985</div><div id="tag28932" onclick="CopyToClipboard('tag28932');return false;" class="tag-decoration">release-v0</div><div id="tag14841" onclick="CopyToClipboard('tag14841');return false;" class="tag-decoration">release-v0.24</div><div id="tag29924" onclick="CopyToClipboard('tag29924');return false;" class="tag-decoration">release-v0.24.1985</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a90eee86e503ab07d11504ab073cb79bbd22edbb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26705833208" target="_blank">2026-05-31 06:52:50</a></td></tr>
<tr><td><div id="tag20421" onclick="CopyToClipboard('tag20421');return false;" class="tag-decoration">testing</div><div id="tag10628" onclick="CopyToClipboard('tag10628');return false;" class="tag-decoration">testing-1d0c520</div><div id="tag6456" onclick="CopyToClipboard('tag6456');return false;" class="tag-decoration">testing-0.24.1974</div><div id="tag27041" onclick="CopyToClipboard('tag27041');return false;" class="tag-decoration">testing-v0</div><div id="tag323" onclick="CopyToClipboard('tag323');return false;" class="tag-decoration">testing-v0.24</div><div id="tag12969" onclick="CopyToClipboard('tag12969');return false;" class="tag-decoration">testing-v0.24.1974</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/1d0c520f4dce7ca5f380c25d47bbd6ce5f995982" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26676668393" target="_blank">2026-05-30 06:17:16</a></td></tr>
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
