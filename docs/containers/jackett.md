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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13610" onclick="CopyToClipboard('tag13610');return false;" class="tag-decoration">release</div><div id="tag22006" onclick="CopyToClipboard('tag22006');return false;" class="tag-decoration">release-c290e18</div><div id="tag14011" onclick="CopyToClipboard('tag14011');return false;" class="tag-decoration">release-0.24.2233</div><div id="tag22171" onclick="CopyToClipboard('tag22171');return false;" class="tag-decoration">release-v0</div><div id="tag12374" onclick="CopyToClipboard('tag12374');return false;" class="tag-decoration">release-v0.24</div><div id="tag13086" onclick="CopyToClipboard('tag13086');return false;" class="tag-decoration">release-v0.24.2233</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c290e18aa8e8a7466aa404cf3c9ac1c4a0bbd1dc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29634813409" target="_blank">2026-07-18 06:54:28</a></td></tr>
<tr><td><div id="tag4095" onclick="CopyToClipboard('tag4095');return false;" class="tag-decoration">testing</div><div id="tag18730" onclick="CopyToClipboard('tag18730');return false;" class="tag-decoration">testing-f293fd7</div><div id="tag413" onclick="CopyToClipboard('tag413');return false;" class="tag-decoration">testing-0.24.2233</div><div id="tag24208" onclick="CopyToClipboard('tag24208');return false;" class="tag-decoration">testing-v0</div><div id="tag19542" onclick="CopyToClipboard('tag19542');return false;" class="tag-decoration">testing-v0.24</div><div id="tag29765" onclick="CopyToClipboard('tag29765');return false;" class="tag-decoration">testing-v0.24.2233</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f293fd7d53d7d633218ab9c97b559161f6aa6acd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29634812871" target="_blank">2026-07-18 06:54:27</a></td></tr>
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
