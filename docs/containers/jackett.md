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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19944" onclick="CopyToClipboard('tag19944');return false;" class="tag-decoration">release</div><div id="tag11974" onclick="CopyToClipboard('tag11974');return false;" class="tag-decoration">release-a938454</div><div id="tag26608" onclick="CopyToClipboard('tag26608');return false;" class="tag-decoration">release-0.24.1470</div><div id="tag19440" onclick="CopyToClipboard('tag19440');return false;" class="tag-decoration">release-v0</div><div id="tag9428" onclick="CopyToClipboard('tag9428');return false;" class="tag-decoration">release-v0.24</div><div id="tag13164" onclick="CopyToClipboard('tag13164');return false;" class="tag-decoration">release-v0.24.1470</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a938454d8d9e9e946d75f4d1d0720c3113959fcc" target="_blank">Version update: 0.24.1465 => 0.24.1470</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23634556553" target="_blank">2026-03-27 06:39:47</a></td></tr>
<tr><td><div id="tag22457" onclick="CopyToClipboard('tag22457');return false;" class="tag-decoration">testing</div><div id="tag29170" onclick="CopyToClipboard('tag29170');return false;" class="tag-decoration">testing-96e3dc2</div><div id="tag25395" onclick="CopyToClipboard('tag25395');return false;" class="tag-decoration">testing-0.24.1465</div><div id="tag26278" onclick="CopyToClipboard('tag26278');return false;" class="tag-decoration">testing-v0</div><div id="tag15342" onclick="CopyToClipboard('tag15342');return false;" class="tag-decoration">testing-v0.24</div><div id="tag138" onclick="CopyToClipboard('tag138');return false;" class="tag-decoration">testing-v0.24.1465</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/96e3dc20808133ff815e3f422a94d3e83ccbca5c" target="_blank">Version update: 0.24.1464 => 0.24.1465</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23581267288" target="_blank">2026-03-26 06:45:53</a></td></tr>
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
