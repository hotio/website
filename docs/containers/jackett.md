---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26663" onclick="CopyToClipboard('tag26663');return false;" class="tag-decoration">release</div><div id="tag23275" onclick="CopyToClipboard('tag23275');return false;" class="tag-decoration">release-c9aed9a</div><div id="tag10277" onclick="CopyToClipboard('tag10277');return false;" class="tag-decoration">release-0.24.2850</div><div id="tag26922" onclick="CopyToClipboard('tag26922');return false;" class="tag-decoration">release-v0</div><div id="tag24038" onclick="CopyToClipboard('tag24038');return false;" class="tag-decoration">release-v0.24</div><div id="tag20491" onclick="CopyToClipboard('tag20491');return false;" class="tag-decoration">release-v0.24.2850</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c9aed9a2775cc5d479ac35cab4235e403ca9f7de" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38552900329" target="_blank">2026-10-14 10:54:58</a></td></tr>
<tr><td><div id="tag1156" onclick="CopyToClipboard('tag1156');return false;" class="tag-decoration">testing</div><div id="tag16591" onclick="CopyToClipboard('tag16591');return false;" class="tag-decoration">testing-3827dc5</div><div id="tag30556" onclick="CopyToClipboard('tag30556');return false;" class="tag-decoration">testing-0.24.2850</div><div id="tag28120" onclick="CopyToClipboard('tag28120');return false;" class="tag-decoration">testing-v0</div><div id="tag10894" onclick="CopyToClipboard('tag10894');return false;" class="tag-decoration">testing-v0.24</div><div id="tag26638" onclick="CopyToClipboard('tag26638');return false;" class="tag-decoration">testing-v0.24.2850</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3827dc52dbd8e413324aee5536f2f002372923ec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/38552901549" target="_blank">2026-10-14 10:54:59</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
