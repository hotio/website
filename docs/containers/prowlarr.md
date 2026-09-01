---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7745" onclick="CopyToClipboard('tag7745');return false;" class="tag-decoration">nightly</div><div id="tag31437" onclick="CopyToClipboard('tag31437');return false;" class="tag-decoration">nightly-82e94f1</div><div id="tag4518" onclick="CopyToClipboard('tag4518');return false;" class="tag-decoration">nightly-2.6.3.5599</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/82e94f14c2fbe38651ec6d5d6ed19507d34ca898" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33418813687" target="_blank">2026-08-31 17:18:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11829" onclick="CopyToClipboard('tag11829');return false;" class="tag-decoration">release</div><div id="tag22245" onclick="CopyToClipboard('tag22245');return false;" class="tag-decoration">release-65e3250</div><div id="tag30852" onclick="CopyToClipboard('tag30852');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/65e32501ff75bfcf50ef771787161e22611b73a3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33479919667" target="_blank">2026-09-01 06:58:07</a></td></tr>
<tr><td><div id="tag29657" onclick="CopyToClipboard('tag29657');return false;" class="tag-decoration">testing</div><div id="tag32167" onclick="CopyToClipboard('tag32167');return false;" class="tag-decoration">testing-f7a6c2a</div><div id="tag14846" onclick="CopyToClipboard('tag14846');return false;" class="tag-decoration">testing-2.6.3.5592</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/f7a6c2a07a367c480fe8e1ef0b37c9e4d78fac82" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33444949566" target="_blank">2026-08-31 22:10:19</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
