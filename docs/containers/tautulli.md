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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30607" onclick="CopyToClipboard('tag30607');return false;" class="tag-decoration">release</div><div id="tag26244" onclick="CopyToClipboard('tag26244');return false;" class="tag-decoration">release-f2cd2b1</div><div id="tag20486" onclick="CopyToClipboard('tag20486');return false;" class="tag-decoration">release-2.17.2</div><div id="tag9906" onclick="CopyToClipboard('tag9906');return false;" class="tag-decoration">release-v2</div><div id="tag1619" onclick="CopyToClipboard('tag1619');return false;" class="tag-decoration">release-v2.17</div><div id="tag10724" onclick="CopyToClipboard('tag10724');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/f2cd2b192c113bc1c229dc6d2d90803bd23e7f7e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/30375902048" target="_blank">2026-07-28 15:57:16</a></td></tr>
<tr><td><div id="tag31403" onclick="CopyToClipboard('tag31403');return false;" class="tag-decoration">testing</div><div id="tag6197" onclick="CopyToClipboard('tag6197');return false;" class="tag-decoration">testing-b0ce813</div><div id="tag10805" onclick="CopyToClipboard('tag10805');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag32609" onclick="CopyToClipboard('tag32609');return false;" class="tag-decoration">testing-v2</div><div id="tag16317" onclick="CopyToClipboard('tag16317');return false;" class="tag-decoration">testing-v2.17</div><div id="tag30088" onclick="CopyToClipboard('tag30088');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/b0ce81325279aa6b0182ed046ec0c077f4082683" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/30375827529" target="_blank">2026-07-28 15:56:20</a></td></tr>
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
