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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16294" onclick="CopyToClipboard('tag16294');return false;" class="tag-decoration">release</div><div id="tag11770" onclick="CopyToClipboard('tag11770');return false;" class="tag-decoration">release-051a914</div><div id="tag4610" onclick="CopyToClipboard('tag4610');return false;" class="tag-decoration">release-0.24.887</div><div id="tag16570" onclick="CopyToClipboard('tag16570');return false;" class="tag-decoration">release-v0</div><div id="tag11441" onclick="CopyToClipboard('tag11441');return false;" class="tag-decoration">release-v0.24</div><div id="tag30477" onclick="CopyToClipboard('tag30477');return false;" class="tag-decoration">release-v0.24.887</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/051a9148bf5d5e45e0025f8c803c61080738ff92" target="_blank">Version update: 0.24.879 => 0.24.887</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21127979729" target="_blank">2026-01-19 06:46:53</a></td></tr>
<tr><td><div id="tag22057" onclick="CopyToClipboard('tag22057');return false;" class="tag-decoration">testing</div><div id="tag7785" onclick="CopyToClipboard('tag7785');return false;" class="tag-decoration">testing-933440a</div><div id="tag24128" onclick="CopyToClipboard('tag24128');return false;" class="tag-decoration">testing-0.24.887</div><div id="tag2160" onclick="CopyToClipboard('tag2160');return false;" class="tag-decoration">testing-v0</div><div id="tag582" onclick="CopyToClipboard('tag582');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30864" onclick="CopyToClipboard('tag30864');return false;" class="tag-decoration">testing-v0.24.887</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/933440a8c5693e0e18c0c183c784efccc26a03cb" target="_blank">Version update: 0.24.879 => 0.24.887</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21127980046" target="_blank">2026-01-19 06:46:54</a></td></tr>
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
