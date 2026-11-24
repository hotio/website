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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7688" onclick="CopyToClipboard('tag7688');return false;" class="tag-decoration">release</div><div id="tag19257" onclick="CopyToClipboard('tag19257');return false;" class="tag-decoration">release-48ea581</div><div id="tag9875" onclick="CopyToClipboard('tag9875');return false;" class="tag-decoration">release-2.19.1</div><div id="tag18540" onclick="CopyToClipboard('tag18540');return false;" class="tag-decoration">release-v2</div><div id="tag3513" onclick="CopyToClipboard('tag3513');return false;" class="tag-decoration">release-v2.19</div><div id="tag28294" onclick="CopyToClipboard('tag28294');return false;" class="tag-decoration">release-v2.19.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/48ea581021f65da89bed333b55a80345f7d8d6a2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/45398812871" target="_blank">2026-11-24 12:59:13</a></td></tr>
<tr><td><div id="tag12571" onclick="CopyToClipboard('tag12571');return false;" class="tag-decoration">testing</div><div id="tag4662" onclick="CopyToClipboard('tag4662');return false;" class="tag-decoration">testing-4b321a1</div><div id="tag11608" onclick="CopyToClipboard('tag11608');return false;" class="tag-decoration">testing-2.19.1</div><div id="tag27630" onclick="CopyToClipboard('tag27630');return false;" class="tag-decoration">testing-v2</div><div id="tag3075" onclick="CopyToClipboard('tag3075');return false;" class="tag-decoration">testing-v2.19</div><div id="tag21045" onclick="CopyToClipboard('tag21045');return false;" class="tag-decoration">testing-v2.19.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/4b321a1ea50fe1abfcf2a282347926e3f2e6c646" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/45398819899" target="_blank">2026-11-24 12:59:15</a></td></tr>
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
