---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag14295" onclick="CopyToClipboard('tag14295');return false;" class="tag-decoration">nightly</div><div id="tag24415" onclick="CopyToClipboard('tag24415');return false;" class="tag-decoration">nightly-523d048</div><div id="tag27214" onclick="CopyToClipboard('tag27214');return false;" class="tag-decoration">nightly-1.5.5-beta.9</div><div id="tag23661" onclick="CopyToClipboard('tag23661');return false;" class="tag-decoration">nightly-v1</div><div id="tag29662" onclick="CopyToClipboard('tag29662');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag5422" onclick="CopyToClipboard('tag5422');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/523d0489e65806efc48f1acfc8321745d4204268" target="_blank">Version update: 1.5.5-beta.8 => 1.5.5-beta.9</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21162258006" target="_blank">2026-01-20 06:52:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9086" onclick="CopyToClipboard('tag9086');return false;" class="tag-decoration">release</div><div id="tag18217" onclick="CopyToClipboard('tag18217');return false;" class="tag-decoration">release-a31fa50</div><div id="tag17604" onclick="CopyToClipboard('tag17604');return false;" class="tag-decoration">release-1.5.4</div><div id="tag17731" onclick="CopyToClipboard('tag17731');return false;" class="tag-decoration">release-v1</div><div id="tag12830" onclick="CopyToClipboard('tag12830');return false;" class="tag-decoration">release-v1.5</div><div id="tag26971" onclick="CopyToClipboard('tag26971');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a31fa503f28f49f1567d20ab37cea52aa9e0464a" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21132213857" target="_blank">2026-01-19 09:30:25</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
