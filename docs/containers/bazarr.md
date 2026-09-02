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
<tr><td><div id="tag20278" onclick="CopyToClipboard('tag20278');return false;" class="tag-decoration">nightly</div><div id="tag20043" onclick="CopyToClipboard('tag20043');return false;" class="tag-decoration">nightly-35b92c3</div><div id="tag9900" onclick="CopyToClipboard('tag9900');return false;" class="tag-decoration">nightly-1.6.1-beta.35</div><div id="tag5306" onclick="CopyToClipboard('tag5306');return false;" class="tag-decoration">nightly-v1</div><div id="tag28855" onclick="CopyToClipboard('tag28855');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag14119" onclick="CopyToClipboard('tag14119');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/35b92c32e96b6ba80071eac7767aae201c674396" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33512147287" target="_blank">2026-09-01 13:13:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27299" onclick="CopyToClipboard('tag27299');return false;" class="tag-decoration">release</div><div id="tag21329" onclick="CopyToClipboard('tag21329');return false;" class="tag-decoration">release-9ba601d</div><div id="tag6466" onclick="CopyToClipboard('tag6466');return false;" class="tag-decoration">release-1.6.0</div><div id="tag5740" onclick="CopyToClipboard('tag5740');return false;" class="tag-decoration">release-v1</div><div id="tag26996" onclick="CopyToClipboard('tag26996');return false;" class="tag-decoration">release-v1.6</div><div id="tag21119" onclick="CopyToClipboard('tag21119');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/9ba601d3168ba9934278e8dc6b7833d21dc3ee21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33587367356" target="_blank">2026-09-02 03:31:33</a></td></tr>
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
