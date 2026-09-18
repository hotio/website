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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20095" onclick="CopyToClipboard('tag20095');return false;" class="tag-decoration">release</div><div id="tag20082" onclick="CopyToClipboard('tag20082');return false;" class="tag-decoration">release-50148e7</div><div id="tag7840" onclick="CopyToClipboard('tag7840');return false;" class="tag-decoration">release-2.18.1</div><div id="tag23431" onclick="CopyToClipboard('tag23431');return false;" class="tag-decoration">release-v2</div><div id="tag30541" onclick="CopyToClipboard('tag30541');return false;" class="tag-decoration">release-v2.18</div><div id="tag17296" onclick="CopyToClipboard('tag17296');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/50148e70d3a13c276a5c89a9ac2079ed8c844933" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35316237544" target="_blank">2026-09-18 06:44:54</a></td></tr>
<tr><td><div id="tag22655" onclick="CopyToClipboard('tag22655');return false;" class="tag-decoration">testing</div><div id="tag26065" onclick="CopyToClipboard('tag26065');return false;" class="tag-decoration">testing-6328417</div><div id="tag11149" onclick="CopyToClipboard('tag11149');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag27774" onclick="CopyToClipboard('tag27774');return false;" class="tag-decoration">testing-v2</div><div id="tag7117" onclick="CopyToClipboard('tag7117');return false;" class="tag-decoration">testing-v2.18</div><div id="tag25281" onclick="CopyToClipboard('tag25281');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/6328417813e3b8590f36234c502a2b2ed31f3537" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35316240755" target="_blank">2026-09-18 06:44:57</a></td></tr>
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
