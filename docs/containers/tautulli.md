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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16224" onclick="CopyToClipboard('tag16224');return false;" class="tag-decoration">release</div><div id="tag12613" onclick="CopyToClipboard('tag12613');return false;" class="tag-decoration">release-b5e9453</div><div id="tag365" onclick="CopyToClipboard('tag365');return false;" class="tag-decoration">release-2.18.2</div><div id="tag9467" onclick="CopyToClipboard('tag9467');return false;" class="tag-decoration">release-v2</div><div id="tag2052" onclick="CopyToClipboard('tag2052');return false;" class="tag-decoration">release-v2.18</div><div id="tag4369" onclick="CopyToClipboard('tag4369');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/b5e9453e020dbfca0502329675984069b1b91827" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42811109221" target="_blank">2026-11-10 11:53:10</a></td></tr>
<tr><td><div id="tag27812" onclick="CopyToClipboard('tag27812');return false;" class="tag-decoration">testing</div><div id="tag22451" onclick="CopyToClipboard('tag22451');return false;" class="tag-decoration">testing-328dc71</div><div id="tag2790" onclick="CopyToClipboard('tag2790');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag13925" onclick="CopyToClipboard('tag13925');return false;" class="tag-decoration">testing-v2</div><div id="tag15971" onclick="CopyToClipboard('tag15971');return false;" class="tag-decoration">testing-v2.18</div><div id="tag7246" onclick="CopyToClipboard('tag7246');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/328dc71dbba55aebabc231833384c6298b1bf926" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42811111103" target="_blank">2026-11-10 11:53:11</a></td></tr>
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
