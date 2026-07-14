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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30179" onclick="CopyToClipboard('tag30179');return false;" class="tag-decoration">release</div><div id="tag9742" onclick="CopyToClipboard('tag9742');return false;" class="tag-decoration">release-438c869</div><div id="tag9638" onclick="CopyToClipboard('tag9638');return false;" class="tag-decoration">release-2.17.2</div><div id="tag25825" onclick="CopyToClipboard('tag25825');return false;" class="tag-decoration">release-v2</div><div id="tag13840" onclick="CopyToClipboard('tag13840');return false;" class="tag-decoration">release-v2.17</div><div id="tag26613" onclick="CopyToClipboard('tag26613');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/438c86985b0744f4e707d6dac1935ddee20b2efa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29359859274" target="_blank">2026-07-14 18:56:02</a></td></tr>
<tr><td><div id="tag10918" onclick="CopyToClipboard('tag10918');return false;" class="tag-decoration">testing</div><div id="tag2174" onclick="CopyToClipboard('tag2174');return false;" class="tag-decoration">testing-945afd4</div><div id="tag18432" onclick="CopyToClipboard('tag18432');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag32056" onclick="CopyToClipboard('tag32056');return false;" class="tag-decoration">testing-v2</div><div id="tag17675" onclick="CopyToClipboard('tag17675');return false;" class="tag-decoration">testing-v2.17</div><div id="tag19105" onclick="CopyToClipboard('tag19105');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/945afd408447fb422a1b8decc2e870fcf094130c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29359862488" target="_blank">2026-07-14 18:56:04</a></td></tr>
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
