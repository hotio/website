---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag5536" onclick="CopyToClipboard('tag5536');return false;" class="tag-decoration">nightly</div><div id="tag6579" onclick="CopyToClipboard('tag6579');return false;" class="tag-decoration">nightly-34fca57</div><div id="tag30717" onclick="CopyToClipboard('tag30717');return false;" class="tag-decoration">nightly-c1fa78e0b28ac1d5164421f31e2d105dcaa2ea40</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/34fca57b183bf600c6bbc0dcc140ff09b5b5894d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/33125787223" target="_blank">2026-08-27 23:18:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26673" onclick="CopyToClipboard('tag26673');return false;" class="tag-decoration">release</div><div id="tag14527" onclick="CopyToClipboard('tag14527');return false;" class="tag-decoration">release-0dbc5e3</div><div id="tag615" onclick="CopyToClipboard('tag615');return false;" class="tag-decoration">release-0.31.1</div><div id="tag7937" onclick="CopyToClipboard('tag7937');return false;" class="tag-decoration">release-v0</div><div id="tag30181" onclick="CopyToClipboard('tag30181');return false;" class="tag-decoration">release-v0.31</div><div id="tag3480" onclick="CopyToClipboard('tag3480');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/0dbc5e31eeba97d90abaea9c10411ac2b0620d32" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/33001506116" target="_blank">2026-08-26 18:45:59</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
