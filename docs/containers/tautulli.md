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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12572" onclick="CopyToClipboard('tag12572');return false;" class="tag-decoration">release</div><div id="tag27456" onclick="CopyToClipboard('tag27456');return false;" class="tag-decoration">release-2d95435</div><div id="tag31788" onclick="CopyToClipboard('tag31788');return false;" class="tag-decoration">release-2.17.1</div><div id="tag30948" onclick="CopyToClipboard('tag30948');return false;" class="tag-decoration">release-v2</div><div id="tag8944" onclick="CopyToClipboard('tag8944');return false;" class="tag-decoration">release-v2.17</div><div id="tag7819" onclick="CopyToClipboard('tag7819');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/2d95435148e8ddaec6dd79c208930fccf7bb4313" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25927421284" target="_blank">2026-05-15 15:53:25</a></td></tr>
<tr><td><div id="tag2792" onclick="CopyToClipboard('tag2792');return false;" class="tag-decoration">testing</div><div id="tag29273" onclick="CopyToClipboard('tag29273');return false;" class="tag-decoration">testing-0086858</div><div id="tag15347" onclick="CopyToClipboard('tag15347');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag16701" onclick="CopyToClipboard('tag16701');return false;" class="tag-decoration">testing-v2</div><div id="tag25765" onclick="CopyToClipboard('tag25765');return false;" class="tag-decoration">testing-v2.17</div><div id="tag32541" onclick="CopyToClipboard('tag32541');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/0086858e0b0f29eb77a26e6a5c002a1713adbe1f" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25927418352" target="_blank">2026-05-15 15:53:22</a></td></tr>
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
