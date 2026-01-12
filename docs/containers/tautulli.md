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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25396" onclick="CopyToClipboard('tag25396');return false;" class="tag-decoration">release</div><div id="tag10550" onclick="CopyToClipboard('tag10550');return false;" class="tag-decoration">release-2.16.0</div><div id="tag16157" onclick="CopyToClipboard('tag16157');return false;" class="tag-decoration">release-14fd96f</div><div id="tag9655" onclick="CopyToClipboard('tag9655');return false;" class="tag-decoration">release-v2</div><div id="tag30548" onclick="CopyToClipboard('tag30548');return false;" class="tag-decoration">release-v2.16</div><div id="tag995" onclick="CopyToClipboard('tag995');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/14fd96f25881a6c5b33157f4a6a5ca94b140be3b" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20898168290" target="_blank">2026-01-11 16:17:55</a></td></tr>
<tr><td><div id="tag11652" onclick="CopyToClipboard('tag11652');return false;" class="tag-decoration">testing</div><div id="tag28693" onclick="CopyToClipboard('tag28693');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag28685" onclick="CopyToClipboard('tag28685');return false;" class="tag-decoration">testing-167cb55</div><div id="tag20856" onclick="CopyToClipboard('tag20856');return false;" class="tag-decoration">testing-v2</div><div id="tag31350" onclick="CopyToClipboard('tag31350');return false;" class="tag-decoration">testing-v2.16</div><div id="tag6414" onclick="CopyToClipboard('tag6414');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/167cb559e07eafb1d58172f4424b5d5a33740940" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20898168498" target="_blank">2026-01-11 16:17:56</a></td></tr>
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

--8<-- "includes/wireguard.md"
