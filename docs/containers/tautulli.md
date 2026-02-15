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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18540" onclick="CopyToClipboard('tag18540');return false;" class="tag-decoration">release</div><div id="tag7891" onclick="CopyToClipboard('tag7891');return false;" class="tag-decoration">release-a96ae0c</div><div id="tag691" onclick="CopyToClipboard('tag691');return false;" class="tag-decoration">release-2.16.1</div><div id="tag4783" onclick="CopyToClipboard('tag4783');return false;" class="tag-decoration">release-v2</div><div id="tag29372" onclick="CopyToClipboard('tag29372');return false;" class="tag-decoration">release-v2.16</div><div id="tag23962" onclick="CopyToClipboard('tag23962');return false;" class="tag-decoration">release-v2.16.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/a96ae0c80e26a61cbf6826f4c0963a73e7cafb1a" target="_blank">Version update: 2.16.0 => 2.16.1</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/22042995163" target="_blank">2026-02-15 21:01:36</a></td></tr>
<tr><td><div id="tag337" onclick="CopyToClipboard('tag337');return false;" class="tag-decoration">testing</div><div id="tag20299" onclick="CopyToClipboard('tag20299');return false;" class="tag-decoration">testing-4b5f13a</div><div id="tag23625" onclick="CopyToClipboard('tag23625');return false;" class="tag-decoration">testing-2.16.1</div><div id="tag29859" onclick="CopyToClipboard('tag29859');return false;" class="tag-decoration">testing-v2</div><div id="tag24540" onclick="CopyToClipboard('tag24540');return false;" class="tag-decoration">testing-v2.16</div><div id="tag22529" onclick="CopyToClipboard('tag22529');return false;" class="tag-decoration">testing-v2.16.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/4b5f13a61b8ffd9f8035366a64e8cca4d5decd07" target="_blank">Version update: 2.16.0 => 2.16.1</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/22042995611" target="_blank">2026-02-15 21:01:39</a></td></tr>
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
