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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6091" onclick="CopyToClipboard('tag6091');return false;" class="tag-decoration">release</div><div id="tag8320" onclick="CopyToClipboard('tag8320');return false;" class="tag-decoration">release-97df5e1</div><div id="tag15642" onclick="CopyToClipboard('tag15642');return false;" class="tag-decoration">release-0.24.2949</div><div id="tag5250" onclick="CopyToClipboard('tag5250');return false;" class="tag-decoration">release-v0</div><div id="tag27114" onclick="CopyToClipboard('tag27114');return false;" class="tag-decoration">release-v0.24</div><div id="tag12883" onclick="CopyToClipboard('tag12883');return false;" class="tag-decoration">release-v0.24.2949</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/97df5e19d074e656891535dd69544c3a902d4aa0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40670249455" target="_blank">2026-10-28 10:12:15</a></td></tr>
<tr><td><div id="tag19174" onclick="CopyToClipboard('tag19174');return false;" class="tag-decoration">testing</div><div id="tag17988" onclick="CopyToClipboard('tag17988');return false;" class="tag-decoration">testing-9ff4aa8</div><div id="tag27245" onclick="CopyToClipboard('tag27245');return false;" class="tag-decoration">testing-0.24.2949</div><div id="tag11282" onclick="CopyToClipboard('tag11282');return false;" class="tag-decoration">testing-v0</div><div id="tag26833" onclick="CopyToClipboard('tag26833');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25945" onclick="CopyToClipboard('tag25945');return false;" class="tag-decoration">testing-v0.24.2949</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/9ff4aa8b1590bb6b6f2d41c6bdd8e8748e491645" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40670250502" target="_blank">2026-10-28 10:12:15</a></td></tr>
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
