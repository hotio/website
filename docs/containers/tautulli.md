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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28441" onclick="CopyToClipboard('tag28441');return false;" class="tag-decoration">release</div><div id="tag14417" onclick="CopyToClipboard('tag14417');return false;" class="tag-decoration">release-35f274b</div><div id="tag7417" onclick="CopyToClipboard('tag7417');return false;" class="tag-decoration">release-2.18.1</div><div id="tag27531" onclick="CopyToClipboard('tag27531');return false;" class="tag-decoration">release-v2</div><div id="tag14865" onclick="CopyToClipboard('tag14865');return false;" class="tag-decoration">release-v2.18</div><div id="tag5624" onclick="CopyToClipboard('tag5624');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/35f274b8e81e5e97e6ab92d4c319b6f2a0718b95" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35960487868" target="_blank">2026-09-24 05:33:35</a></td></tr>
<tr><td><div id="tag26740" onclick="CopyToClipboard('tag26740');return false;" class="tag-decoration">testing</div><div id="tag24014" onclick="CopyToClipboard('tag24014');return false;" class="tag-decoration">testing-d6e953e</div><div id="tag12050" onclick="CopyToClipboard('tag12050');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag12103" onclick="CopyToClipboard('tag12103');return false;" class="tag-decoration">testing-v2</div><div id="tag32426" onclick="CopyToClipboard('tag32426');return false;" class="tag-decoration">testing-v2.18</div><div id="tag7031" onclick="CopyToClipboard('tag7031');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/d6e953ee8793c925c03312d93d4d22b03b97ddf8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35960471252" target="_blank">2026-09-24 05:33:21</a></td></tr>
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
