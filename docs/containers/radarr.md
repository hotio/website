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
<tr><td><div id="tag30103" onclick="CopyToClipboard('tag30103');return false;" class="tag-decoration">nightly</div><div id="tag17447" onclick="CopyToClipboard('tag17447');return false;" class="tag-decoration">nightly-54df114</div><div id="tag22294" onclick="CopyToClipboard('tag22294');return false;" class="tag-decoration">nightly-7.1.0.10948</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/54df114089dfba7b76bcf8ba9e777f632abc3574" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45756716281" target="_blank">2026-11-26 04:40:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14991" onclick="CopyToClipboard('tag14991');return false;" class="tag-decoration">release</div><div id="tag7585" onclick="CopyToClipboard('tag7585');return false;" class="tag-decoration">release-ff6c231</div><div id="tag10800" onclick="CopyToClipboard('tag10800');return false;" class="tag-decoration">release-7.0.3.10918</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/ff6c2310c1ac8b7aa32aa5d3ce66ce7be97e8b9d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45756714797" target="_blank">2026-11-26 04:40:34</a></td></tr>
<tr><td><div id="tag7504" onclick="CopyToClipboard('tag7504');return false;" class="tag-decoration">testing</div><div id="tag20629" onclick="CopyToClipboard('tag20629');return false;" class="tag-decoration">testing-e4584ea</div><div id="tag3563" onclick="CopyToClipboard('tag3563');return false;" class="tag-decoration">testing-7.1.0.10948</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/e4584ead7f8e41b3249e5c9c762cbc372bb4b194" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45756713926" target="_blank">2026-11-26 04:40:33</a></td></tr>
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
