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
<tr><td><div id="tag14301" onclick="CopyToClipboard('tag14301');return false;" class="tag-decoration">nightly</div><div id="tag9871" onclick="CopyToClipboard('tag9871');return false;" class="tag-decoration">nightly-e90cd52</div><div id="tag30214" onclick="CopyToClipboard('tag30214');return false;" class="tag-decoration">nightly-1.6.3-beta.32</div><div id="tag393" onclick="CopyToClipboard('tag393');return false;" class="tag-decoration">nightly-v1</div><div id="tag15278" onclick="CopyToClipboard('tag15278');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag9466" onclick="CopyToClipboard('tag9466');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/e90cd52423c33b18e9cd5e8be2f3c1849491b75b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/43696737508" target="_blank">2026-11-15 08:55:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30954" onclick="CopyToClipboard('tag30954');return false;" class="tag-decoration">release</div><div id="tag21386" onclick="CopyToClipboard('tag21386');return false;" class="tag-decoration">release-c49aefb</div><div id="tag24674" onclick="CopyToClipboard('tag24674');return false;" class="tag-decoration">release-1.6.2</div><div id="tag2867" onclick="CopyToClipboard('tag2867');return false;" class="tag-decoration">release-v1</div><div id="tag3742" onclick="CopyToClipboard('tag3742');return false;" class="tag-decoration">release-v1.6</div><div id="tag14440" onclick="CopyToClipboard('tag14440');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c49aefb2a109dc66a0427b01841a126219e6c0c8" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/43329169963" target="_blank">2026-11-12 23:28:34</a></td></tr>
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
