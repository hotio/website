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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17062" onclick="CopyToClipboard('tag17062');return false;" class="tag-decoration">release</div><div id="tag4344" onclick="CopyToClipboard('tag4344');return false;" class="tag-decoration">release-0800a12</div><div id="tag15582" onclick="CopyToClipboard('tag15582');return false;" class="tag-decoration">release-0.24.2748</div><div id="tag10343" onclick="CopyToClipboard('tag10343');return false;" class="tag-decoration">release-v0</div><div id="tag2031" onclick="CopyToClipboard('tag2031');return false;" class="tag-decoration">release-v0.24</div><div id="tag17251" onclick="CopyToClipboard('tag17251');return false;" class="tag-decoration">release-v0.24.2748</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0800a125e45e8e29e9330adb04717e5c0f524fd6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36918315432" target="_blank">2026-10-01 19:59:30</a></td></tr>
<tr><td><div id="tag24542" onclick="CopyToClipboard('tag24542');return false;" class="tag-decoration">testing</div><div id="tag13130" onclick="CopyToClipboard('tag13130');return false;" class="tag-decoration">testing-c3af587</div><div id="tag6469" onclick="CopyToClipboard('tag6469');return false;" class="tag-decoration">testing-0.24.2748</div><div id="tag14165" onclick="CopyToClipboard('tag14165');return false;" class="tag-decoration">testing-v0</div><div id="tag29580" onclick="CopyToClipboard('tag29580');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14553" onclick="CopyToClipboard('tag14553');return false;" class="tag-decoration">testing-v0.24.2748</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c3af5873911195977f9b5aeb9f18dc0127abecf6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36826409481" target="_blank">2026-10-01 06:44:36</a></td></tr>
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
