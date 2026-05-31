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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28306" onclick="CopyToClipboard('tag28306');return false;" class="tag-decoration">release</div><div id="tag7728" onclick="CopyToClipboard('tag7728');return false;" class="tag-decoration">release-9c8c7ae</div><div id="tag4328" onclick="CopyToClipboard('tag4328');return false;" class="tag-decoration">release-2.17.1</div><div id="tag30796" onclick="CopyToClipboard('tag30796');return false;" class="tag-decoration">release-v2</div><div id="tag27967" onclick="CopyToClipboard('tag27967');return false;" class="tag-decoration">release-v2.17</div><div id="tag25896" onclick="CopyToClipboard('tag25896');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/9c8c7ae5dc9186e8a73778f46db426f9ffdd1fc2" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/26711245863" target="_blank">2026-05-31 11:23:36</a></td></tr>
<tr><td><div id="tag30210" onclick="CopyToClipboard('tag30210');return false;" class="tag-decoration">testing</div><div id="tag26888" onclick="CopyToClipboard('tag26888');return false;" class="tag-decoration">testing-8be067c</div><div id="tag2695" onclick="CopyToClipboard('tag2695');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag16324" onclick="CopyToClipboard('tag16324');return false;" class="tag-decoration">testing-v2</div><div id="tag22938" onclick="CopyToClipboard('tag22938');return false;" class="tag-decoration">testing-v2.17</div><div id="tag26285" onclick="CopyToClipboard('tag26285');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/8be067cb20d10c17a381ff125c3c13902e73cf7f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/26711245139" target="_blank">2026-05-31 11:23:34</a></td></tr>
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
