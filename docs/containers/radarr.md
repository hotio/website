---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag25386" onclick="CopyToClipboard('tag25386');return false;" class="tag-decoration">nightly</div><div id="tag17837" onclick="CopyToClipboard('tag17837');return false;" class="tag-decoration">nightly-0ab9815</div><div id="tag26798" onclick="CopyToClipboard('tag26798');return false;" class="tag-decoration">nightly-6.2.1.10464</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/0ab98159c248da4df171f274ea8eb42e1c2beb3d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/27277633591" target="_blank">2026-06-10 12:53:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22276" onclick="CopyToClipboard('tag22276');return false;" class="tag-decoration">release</div><div id="tag19210" onclick="CopyToClipboard('tag19210');return false;" class="tag-decoration">release-c408e94</div><div id="tag17871" onclick="CopyToClipboard('tag17871');return false;" class="tag-decoration">release-6.2.1.10461</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/c408e943427c8b5b35333270ad30e05ca62cd8f9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/27277634962" target="_blank">2026-06-10 12:53:31</a></td></tr>
<tr><td><div id="tag14894" onclick="CopyToClipboard('tag14894');return false;" class="tag-decoration">testing</div><div id="tag541" onclick="CopyToClipboard('tag541');return false;" class="tag-decoration">testing-8228332</div><div id="tag12388" onclick="CopyToClipboard('tag12388');return false;" class="tag-decoration">testing-6.2.1.10461</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/8228332c2ebd69683b5a5e44ac6e0d99bdfb4138" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/27277631385" target="_blank">2026-06-10 12:53:29</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
