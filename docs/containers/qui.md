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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9611" onclick="CopyToClipboard('tag9611');return false;" class="tag-decoration">release</div><div id="tag4212" onclick="CopyToClipboard('tag4212');return false;" class="tag-decoration">release-d0b94bb</div><div id="tag9454" onclick="CopyToClipboard('tag9454');return false;" class="tag-decoration">release-1.14.1</div><div id="tag15213" onclick="CopyToClipboard('tag15213');return false;" class="tag-decoration">release-v1</div><div id="tag27606" onclick="CopyToClipboard('tag27606');return false;" class="tag-decoration">release-v1.14</div><div id="tag4211" onclick="CopyToClipboard('tag4211');return false;" class="tag-decoration">release-v1.14.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qui/commit/d0b94bb25a9bca01b6603c001687084d40879550" target="_blank">Version update: 1.14.0 => 1.14.1</a></td><td><a href="https://github.com/hotio/qui/actions/runs/22308672555" target="_blank">2026-02-23 13:43:08</a></td></tr>
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
