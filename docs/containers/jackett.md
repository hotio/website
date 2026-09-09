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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12011" onclick="CopyToClipboard('tag12011');return false;" class="tag-decoration">release</div><div id="tag932" onclick="CopyToClipboard('tag932');return false;" class="tag-decoration">release-b5807c7</div><div id="tag6853" onclick="CopyToClipboard('tag6853');return false;" class="tag-decoration">release-0.24.2551</div><div id="tag18164" onclick="CopyToClipboard('tag18164');return false;" class="tag-decoration">release-v0</div><div id="tag24515" onclick="CopyToClipboard('tag24515');return false;" class="tag-decoration">release-v0.24</div><div id="tag7127" onclick="CopyToClipboard('tag7127');return false;" class="tag-decoration">release-v0.24.2551</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b5807c74abdf3483c043b3c689c54e0eb4666c54" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34418068615" target="_blank">2026-09-09 23:41:55</a></td></tr>
<tr><td><div id="tag6753" onclick="CopyToClipboard('tag6753');return false;" class="tag-decoration">testing</div><div id="tag26392" onclick="CopyToClipboard('tag26392');return false;" class="tag-decoration">testing-2c3149b</div><div id="tag1634" onclick="CopyToClipboard('tag1634');return false;" class="tag-decoration">testing-0.24.2551</div><div id="tag27245" onclick="CopyToClipboard('tag27245');return false;" class="tag-decoration">testing-v0</div><div id="tag8050" onclick="CopyToClipboard('tag8050');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11250" onclick="CopyToClipboard('tag11250');return false;" class="tag-decoration">testing-v0.24.2551</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/2c3149b0b48eca83a15919924a3ff6c02a49b6dd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34418069006" target="_blank">2026-09-09 23:41:55</a></td></tr>
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
