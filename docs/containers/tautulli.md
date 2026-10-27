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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9605" onclick="CopyToClipboard('tag9605');return false;" class="tag-decoration">release</div><div id="tag19346" onclick="CopyToClipboard('tag19346');return false;" class="tag-decoration">release-32cdd5a</div><div id="tag22965" onclick="CopyToClipboard('tag22965');return false;" class="tag-decoration">release-2.18.2</div><div id="tag27033" onclick="CopyToClipboard('tag27033');return false;" class="tag-decoration">release-v2</div><div id="tag16849" onclick="CopyToClipboard('tag16849');return false;" class="tag-decoration">release-v2.18</div><div id="tag31403" onclick="CopyToClipboard('tag31403');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/32cdd5a2c29f4936f612edf4eddc3ab51f0b4ec4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40596704926" target="_blank">2026-10-27 22:41:15</a></td></tr>
<tr><td><div id="tag9078" onclick="CopyToClipboard('tag9078');return false;" class="tag-decoration">testing</div><div id="tag19174" onclick="CopyToClipboard('tag19174');return false;" class="tag-decoration">testing-3c924f7</div><div id="tag815" onclick="CopyToClipboard('tag815');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag32341" onclick="CopyToClipboard('tag32341');return false;" class="tag-decoration">testing-v2</div><div id="tag535" onclick="CopyToClipboard('tag535');return false;" class="tag-decoration">testing-v2.18</div><div id="tag3546" onclick="CopyToClipboard('tag3546');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/3c924f76c8719de750936809ae1421bebd2e82d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40559699584" target="_blank">2026-10-27 18:24:31</a></td></tr>
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
