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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32406" onclick="CopyToClipboard('tag32406');return false;" class="tag-decoration">release</div><div id="tag15212" onclick="CopyToClipboard('tag15212');return false;" class="tag-decoration">release-175cf0e</div><div id="tag28100" onclick="CopyToClipboard('tag28100');return false;" class="tag-decoration">release-0.24.1779</div><div id="tag10081" onclick="CopyToClipboard('tag10081');return false;" class="tag-decoration">release-v0</div><div id="tag14411" onclick="CopyToClipboard('tag14411');return false;" class="tag-decoration">release-v0.24</div><div id="tag19952" onclick="CopyToClipboard('tag19952');return false;" class="tag-decoration">release-v0.24.1779</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/175cf0ed8d86c94dc1557e3fe8f21663ada36528" target="_blank">Version update: 0.24.1764 => 0.24.1779</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24949925860" target="_blank">2026-04-26 06:15:11</a></td></tr>
<tr><td><div id="tag26714" onclick="CopyToClipboard('tag26714');return false;" class="tag-decoration">testing</div><div id="tag20490" onclick="CopyToClipboard('tag20490');return false;" class="tag-decoration">testing-ad04672</div><div id="tag26916" onclick="CopyToClipboard('tag26916');return false;" class="tag-decoration">testing-0.24.1779</div><div id="tag23412" onclick="CopyToClipboard('tag23412');return false;" class="tag-decoration">testing-v0</div><div id="tag11897" onclick="CopyToClipboard('tag11897');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16774" onclick="CopyToClipboard('tag16774');return false;" class="tag-decoration">testing-v0.24.1779</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/ad046724586ca789a581d5e83b78748e497193f7" target="_blank">Version update: 0.24.1764 => 0.24.1779</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24949926212" target="_blank">2026-04-26 06:15:12</a></td></tr>
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
