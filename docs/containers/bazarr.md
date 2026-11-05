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
<tr><td><div id="tag7376" onclick="CopyToClipboard('tag7376');return false;" class="tag-decoration">nightly</div><div id="tag16036" onclick="CopyToClipboard('tag16036');return false;" class="tag-decoration">nightly-4d5656e</div><div id="tag17710" onclick="CopyToClipboard('tag17710');return false;" class="tag-decoration">nightly-1.6.3-beta.26</div><div id="tag11222" onclick="CopyToClipboard('tag11222');return false;" class="tag-decoration">nightly-v1</div><div id="tag17991" onclick="CopyToClipboard('tag17991');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag5447" onclick="CopyToClipboard('tag5447');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/4d5656e2eaca06d82e0db804ef08d3855f5eb773" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42043109904" target="_blank">2026-11-05 14:14:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4355" onclick="CopyToClipboard('tag4355');return false;" class="tag-decoration">release</div><div id="tag12167" onclick="CopyToClipboard('tag12167');return false;" class="tag-decoration">release-34c84b5</div><div id="tag2410" onclick="CopyToClipboard('tag2410');return false;" class="tag-decoration">release-1.6.2</div><div id="tag29982" onclick="CopyToClipboard('tag29982');return false;" class="tag-decoration">release-v1</div><div id="tag14540" onclick="CopyToClipboard('tag14540');return false;" class="tag-decoration">release-v1.6</div><div id="tag30836" onclick="CopyToClipboard('tag30836');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/34c84b5e6efbe046229e083bb20a700274804320" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/42112005058" target="_blank">2026-11-05 21:22:05</a></td></tr>
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
