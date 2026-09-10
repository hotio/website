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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26348" onclick="CopyToClipboard('tag26348');return false;" class="tag-decoration">release</div><div id="tag31856" onclick="CopyToClipboard('tag31856');return false;" class="tag-decoration">release-8fe89a8</div><div id="tag25613" onclick="CopyToClipboard('tag25613');return false;" class="tag-decoration">release-2.18.1</div><div id="tag19424" onclick="CopyToClipboard('tag19424');return false;" class="tag-decoration">release-v2</div><div id="tag22530" onclick="CopyToClipboard('tag22530');return false;" class="tag-decoration">release-v2.18</div><div id="tag30406" onclick="CopyToClipboard('tag30406');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/8fe89a85adcacce8649304d32a9786fce6bee9d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/34494637489" target="_blank">2026-09-10 15:17:10</a></td></tr>
<tr><td><div id="tag15713" onclick="CopyToClipboard('tag15713');return false;" class="tag-decoration">testing</div><div id="tag8406" onclick="CopyToClipboard('tag8406');return false;" class="tag-decoration">testing-e33706b</div><div id="tag14822" onclick="CopyToClipboard('tag14822');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag31588" onclick="CopyToClipboard('tag31588');return false;" class="tag-decoration">testing-v2</div><div id="tag20014" onclick="CopyToClipboard('tag20014');return false;" class="tag-decoration">testing-v2.18</div><div id="tag17144" onclick="CopyToClipboard('tag17144');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/e33706b7a306dc5805f90f707a6fa2b9349eb405" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/34494645638" target="_blank">2026-09-10 15:17:14</a></td></tr>
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
