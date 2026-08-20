---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28228" onclick="CopyToClipboard('tag28228');return false;" class="tag-decoration">release</div><div id="tag10666" onclick="CopyToClipboard('tag10666');return false;" class="tag-decoration">release-e646610</div><div id="tag27807" onclick="CopyToClipboard('tag27807');return false;" class="tag-decoration">release-2.17.2</div><div id="tag25463" onclick="CopyToClipboard('tag25463');return false;" class="tag-decoration">release-v2</div><div id="tag31921" onclick="CopyToClipboard('tag31921');return false;" class="tag-decoration">release-v2.17</div><div id="tag10745" onclick="CopyToClipboard('tag10745');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/e646610ad0e82b2d64fceb73f92cd00a88726559" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32328755950" target="_blank">2026-08-20 03:34:59</a></td></tr>
<tr><td><div id="tag22436" onclick="CopyToClipboard('tag22436');return false;" class="tag-decoration">testing</div><div id="tag28778" onclick="CopyToClipboard('tag28778');return false;" class="tag-decoration">testing-9b9d68d</div><div id="tag8282" onclick="CopyToClipboard('tag8282');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag25124" onclick="CopyToClipboard('tag25124');return false;" class="tag-decoration">testing-v2</div><div id="tag20613" onclick="CopyToClipboard('tag20613');return false;" class="tag-decoration">testing-v2.17</div><div id="tag14663" onclick="CopyToClipboard('tag14663');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/9b9d68d93f30f378d375a8c9add879de9b1c62dd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32328760155" target="_blank">2026-08-20 03:35:02</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
