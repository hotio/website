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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12338" onclick="CopyToClipboard('tag12338');return false;" class="tag-decoration">release</div><div id="tag12607" onclick="CopyToClipboard('tag12607');return false;" class="tag-decoration">release-2eca91f</div><div id="tag26898" onclick="CopyToClipboard('tag26898');return false;" class="tag-decoration">release-0.24.887</div><div id="tag20772" onclick="CopyToClipboard('tag20772');return false;" class="tag-decoration">release-v0</div><div id="tag25490" onclick="CopyToClipboard('tag25490');return false;" class="tag-decoration">release-v0.24</div><div id="tag6945" onclick="CopyToClipboard('tag6945');return false;" class="tag-decoration">release-v0.24.887</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2eca91f9058ddfe827ff1da4eb56fe0f142c44e7" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21198328446" target="_blank">2026-01-21 05:24:06</a></td></tr>
<tr><td><div id="tag29165" onclick="CopyToClipboard('tag29165');return false;" class="tag-decoration">testing</div><div id="tag28146" onclick="CopyToClipboard('tag28146');return false;" class="tag-decoration">testing-c8f24b2</div><div id="tag32346" onclick="CopyToClipboard('tag32346');return false;" class="tag-decoration">testing-0.24.887</div><div id="tag25334" onclick="CopyToClipboard('tag25334');return false;" class="tag-decoration">testing-v0</div><div id="tag19220" onclick="CopyToClipboard('tag19220');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2100" onclick="CopyToClipboard('tag2100');return false;" class="tag-decoration">testing-v0.24.887</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c8f24b2fdd56fb609ef15167fae7f03153ea88ea" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21198328859" target="_blank">2026-01-21 05:24:10</a></td></tr>
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
