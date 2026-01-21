---
hide:
  - toc
title: hotio/qui
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qui){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qui){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/autobrr/qui){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6763" onclick="CopyToClipboard('tag6763');return false;" class="tag-decoration">release</div><div id="tag3067" onclick="CopyToClipboard('tag3067');return false;" class="tag-decoration">release-cb44cf5</div><div id="tag10613" onclick="CopyToClipboard('tag10613');return false;" class="tag-decoration">release-1.12.0</div><div id="tag2178" onclick="CopyToClipboard('tag2178');return false;" class="tag-decoration">release-v1</div><div id="tag29942" onclick="CopyToClipboard('tag29942');return false;" class="tag-decoration">release-v1.12</div><div id="tag5985" onclick="CopyToClipboard('tag5985');return false;" class="tag-decoration">release-v1.12.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qui/commit/cb44cf5f929a2aca9fc5f5df3aab026186efbd23" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/qui/actions/runs/21200267194" target="_blank">2026-01-21 06:57:52</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qui" \
        -p 7476:7476 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7476/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/qui
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qui:
        container_name: qui
        image: ghcr.io/hotio/qui
        ports:
          - "7476:7476"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7476/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
