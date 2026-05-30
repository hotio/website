---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30628" onclick="CopyToClipboard('tag30628');return false;" class="tag-decoration">nightly</div><div id="tag23362" onclick="CopyToClipboard('tag23362');return false;" class="tag-decoration">nightly-8a542e0</div><div id="tag19130" onclick="CopyToClipboard('tag19130');return false;" class="tag-decoration">nightly-3.1.3.4963</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/8a542e0c6c10754b79f3c9d76658c187c20355ac" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/26681124083" target="_blank">2026-05-30 10:06:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14334" onclick="CopyToClipboard('tag14334');return false;" class="tag-decoration">release</div><div id="tag26989" onclick="CopyToClipboard('tag26989');return false;" class="tag-decoration">release-f6f7b54</div><div id="tag6648" onclick="CopyToClipboard('tag6648');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/f6f7b54f3b7dbdb5bb8483fbf39e2595592dfceb" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/26681119257" target="_blank">2026-05-30 10:06:34</a></td></tr>
<tr><td><div id="tag6152" onclick="CopyToClipboard('tag6152');return false;" class="tag-decoration">testing</div><div id="tag16042" onclick="CopyToClipboard('tag16042');return false;" class="tag-decoration">testing-56255d0</div><div id="tag2617" onclick="CopyToClipboard('tag2617');return false;" class="tag-decoration">testing-3.1.2.4938</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/56255d06129c0c19b16c558a6d1292d6e9e389da" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/26681120060" target="_blank">2026-05-30 10:06:37</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
