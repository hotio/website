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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10504" onclick="CopyToClipboard('tag10504');return false;" class="tag-decoration">release</div><div id="tag11095" onclick="CopyToClipboard('tag11095');return false;" class="tag-decoration">release-32cdd5a</div><div id="tag9277" onclick="CopyToClipboard('tag9277');return false;" class="tag-decoration">release-2.18.2</div><div id="tag26179" onclick="CopyToClipboard('tag26179');return false;" class="tag-decoration">release-v2</div><div id="tag17477" onclick="CopyToClipboard('tag17477');return false;" class="tag-decoration">release-v2.18</div><div id="tag9126" onclick="CopyToClipboard('tag9126');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/32cdd5a2c29f4936f612edf4eddc3ab51f0b4ec4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40596704926" target="_blank">2026-10-27 22:41:15</a></td></tr>
<tr><td><div id="tag12355" onclick="CopyToClipboard('tag12355');return false;" class="tag-decoration">testing</div><div id="tag15118" onclick="CopyToClipboard('tag15118');return false;" class="tag-decoration">testing-f9e7950</div><div id="tag12999" onclick="CopyToClipboard('tag12999');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag24081" onclick="CopyToClipboard('tag24081');return false;" class="tag-decoration">testing-v2</div><div id="tag9112" onclick="CopyToClipboard('tag9112');return false;" class="tag-decoration">testing-v2.18</div><div id="tag5373" onclick="CopyToClipboard('tag5373');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/f9e7950e43a82af185b15119649305f88f6ede6f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40596705384" target="_blank">2026-10-27 22:41:16</a></td></tr>
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
