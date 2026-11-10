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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30547" onclick="CopyToClipboard('tag30547');return false;" class="tag-decoration">release</div><div id="tag5236" onclick="CopyToClipboard('tag5236');return false;" class="tag-decoration">release-b5e9453</div><div id="tag29094" onclick="CopyToClipboard('tag29094');return false;" class="tag-decoration">release-2.18.2</div><div id="tag20520" onclick="CopyToClipboard('tag20520');return false;" class="tag-decoration">release-v2</div><div id="tag20229" onclick="CopyToClipboard('tag20229');return false;" class="tag-decoration">release-v2.18</div><div id="tag30876" onclick="CopyToClipboard('tag30876');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/b5e9453e020dbfca0502329675984069b1b91827" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42811109221" target="_blank">2026-11-10 11:53:10</a></td></tr>
<tr><td><div id="tag27899" onclick="CopyToClipboard('tag27899');return false;" class="tag-decoration">testing</div><div id="tag18434" onclick="CopyToClipboard('tag18434');return false;" class="tag-decoration">testing-69a58cf</div><div id="tag19996" onclick="CopyToClipboard('tag19996');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag17481" onclick="CopyToClipboard('tag17481');return false;" class="tag-decoration">testing-v2</div><div id="tag9944" onclick="CopyToClipboard('tag9944');return false;" class="tag-decoration">testing-v2.18</div><div id="tag19930" onclick="CopyToClipboard('tag19930');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/69a58cfb8cca5817e0b0290016f5a9a0dfdf220c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42312730960" target="_blank">2026-11-06 23:33:42</a></td></tr>
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
