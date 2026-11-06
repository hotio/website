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
<tr><td><div id="tag12905" onclick="CopyToClipboard('tag12905');return false;" class="tag-decoration">nightly</div><div id="tag30910" onclick="CopyToClipboard('tag30910');return false;" class="tag-decoration">nightly-ccaf650</div><div id="tag32722" onclick="CopyToClipboard('tag32722');return false;" class="tag-decoration">nightly-1.6.3-beta.26</div><div id="tag8723" onclick="CopyToClipboard('tag8723');return false;" class="tag-decoration">nightly-v1</div><div id="tag15287" onclick="CopyToClipboard('tag15287');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag14426" onclick="CopyToClipboard('tag14426');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/ccaf65024f4c030b31b8ead958b097d3c9ad1294" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42307579701" target="_blank">2026-11-06 22:49:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26894" onclick="CopyToClipboard('tag26894');return false;" class="tag-decoration">release</div><div id="tag3366" onclick="CopyToClipboard('tag3366');return false;" class="tag-decoration">release-34c84b5</div><div id="tag4790" onclick="CopyToClipboard('tag4790');return false;" class="tag-decoration">release-1.6.2</div><div id="tag13601" onclick="CopyToClipboard('tag13601');return false;" class="tag-decoration">release-v1</div><div id="tag3108" onclick="CopyToClipboard('tag3108');return false;" class="tag-decoration">release-v1.6</div><div id="tag23425" onclick="CopyToClipboard('tag23425');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/34c84b5e6efbe046229e083bb20a700274804320" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42112005058" target="_blank">2026-11-05 21:22:05</a></td></tr>
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
