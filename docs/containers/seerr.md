---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag12681" onclick="CopyToClipboard('tag12681');return false;" class="tag-decoration">nightly</div><div id="tag9055" onclick="CopyToClipboard('tag9055');return false;" class="tag-decoration">nightly-e4bf7c0</div><div id="tag13800" onclick="CopyToClipboard('tag13800');return false;" class="tag-decoration">nightly-059008cbb2ee0ca457ac93597d379407cb61a622</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/e4bf7c0d3b9191a19b551bd71116accc8757bc09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/32103364393" target="_blank">2026-08-18 05:33:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26312" onclick="CopyToClipboard('tag26312');return false;" class="tag-decoration">release</div><div id="tag21203" onclick="CopyToClipboard('tag21203');return false;" class="tag-decoration">release-77c379f</div><div id="tag32624" onclick="CopyToClipboard('tag32624');return false;" class="tag-decoration">release-3.4.1</div><div id="tag702" onclick="CopyToClipboard('tag702');return false;" class="tag-decoration">release-v3</div><div id="tag30924" onclick="CopyToClipboard('tag30924');return false;" class="tag-decoration">release-v3.4</div><div id="tag6769" onclick="CopyToClipboard('tag6769');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/77c379f82f4bb0ddf4691dcb8caae49918b7ed6a" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/32036366049" target="_blank">2026-08-17 13:42:36</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
