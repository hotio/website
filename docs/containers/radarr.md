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
<tr><td><div id="tag29686" onclick="CopyToClipboard('tag29686');return false;" class="tag-decoration">nightly</div><div id="tag28057" onclick="CopyToClipboard('tag28057');return false;" class="tag-decoration">nightly-498d815</div><div id="tag4862" onclick="CopyToClipboard('tag4862');return false;" class="tag-decoration">nightly-6.4.3.10645</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/498d815c9e521b14eca582c309ec8d01b975e8df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/33577135716" target="_blank">2026-09-02 00:53:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22961" onclick="CopyToClipboard('tag22961');return false;" class="tag-decoration">release</div><div id="tag25637" onclick="CopyToClipboard('tag25637');return false;" class="tag-decoration">release-b9a779d</div><div id="tag7324" onclick="CopyToClipboard('tag7324');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/b9a779d6b005fcf6f04e1fecd0dd4cd27555d055" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/33510867208" target="_blank">2026-09-01 13:00:37</a></td></tr>
<tr><td><div id="tag6688" onclick="CopyToClipboard('tag6688');return false;" class="tag-decoration">testing</div><div id="tag5381" onclick="CopyToClipboard('tag5381');return false;" class="tag-decoration">testing-2bbc48d</div><div id="tag12160" onclick="CopyToClipboard('tag12160');return false;" class="tag-decoration">testing-6.4.3.10645</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/2bbc48defe22287332afe46c04116bd8a221bb3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/33510863927" target="_blank">2026-09-01 13:00:35</a></td></tr>
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
