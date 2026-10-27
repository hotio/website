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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9579" onclick="CopyToClipboard('tag9579');return false;" class="tag-decoration">release</div><div id="tag31183" onclick="CopyToClipboard('tag31183');return false;" class="tag-decoration">release-5b8091c</div><div id="tag2195" onclick="CopyToClipboard('tag2195');return false;" class="tag-decoration">release-2.18.2</div><div id="tag24923" onclick="CopyToClipboard('tag24923');return false;" class="tag-decoration">release-v2</div><div id="tag2174" onclick="CopyToClipboard('tag2174');return false;" class="tag-decoration">release-v2.18</div><div id="tag1091" onclick="CopyToClipboard('tag1091');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/5b8091c24eccd551bac0d1fecb68943505e86658" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40559695050" target="_blank">2026-10-27 18:24:26</a></td></tr>
<tr><td><div id="tag24167" onclick="CopyToClipboard('tag24167');return false;" class="tag-decoration">testing</div><div id="tag24865" onclick="CopyToClipboard('tag24865');return false;" class="tag-decoration">testing-3c924f7</div><div id="tag18526" onclick="CopyToClipboard('tag18526');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag32600" onclick="CopyToClipboard('tag32600');return false;" class="tag-decoration">testing-v2</div><div id="tag4274" onclick="CopyToClipboard('tag4274');return false;" class="tag-decoration">testing-v2.18</div><div id="tag9656" onclick="CopyToClipboard('tag9656');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/3c924f76c8719de750936809ae1421bebd2e82d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40559699584" target="_blank">2026-10-27 18:24:31</a></td></tr>
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
