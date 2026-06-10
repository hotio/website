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
<tr><td><div id="tag23034" onclick="CopyToClipboard('tag23034');return false;" class="tag-decoration">nightly</div><div id="tag26906" onclick="CopyToClipboard('tag26906');return false;" class="tag-decoration">nightly-4e84ded</div><div id="tag14665" onclick="CopyToClipboard('tag14665');return false;" class="tag-decoration">nightly-3.1.3.4970</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/4e84dedc6e2626c6dfe16d42b1a21c3a80e2e83a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/27276377306" target="_blank">2026-06-10 12:31:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1659" onclick="CopyToClipboard('tag1659');return false;" class="tag-decoration">release</div><div id="tag8458" onclick="CopyToClipboard('tag8458');return false;" class="tag-decoration">release-40e0fb9</div><div id="tag7829" onclick="CopyToClipboard('tag7829');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/40e0fb9ef70f0cf7fa8b6c11cc109289097d7b75" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/27276375705" target="_blank">2026-06-10 12:31:07</a></td></tr>
<tr><td><div id="tag22418" onclick="CopyToClipboard('tag22418');return false;" class="tag-decoration">testing</div><div id="tag18035" onclick="CopyToClipboard('tag18035');return false;" class="tag-decoration">testing-1d48a37</div><div id="tag10646" onclick="CopyToClipboard('tag10646');return false;" class="tag-decoration">testing-3.1.3.4968</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/1d48a379ac650170571aa5336abb4082c8a3dd41" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/27276372900" target="_blank">2026-06-10 12:31:04</a></td></tr>
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
