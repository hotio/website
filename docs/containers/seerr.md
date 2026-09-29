---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag26874" onclick="CopyToClipboard('tag26874');return false;" class="tag-decoration">nightly</div><div id="tag29875" onclick="CopyToClipboard('tag29875');return false;" class="tag-decoration">nightly-6b38b09</div><div id="tag19768" onclick="CopyToClipboard('tag19768');return false;" class="tag-decoration">nightly-fa58c3069795991c6741f624e7374808fe780eb8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/6b38b096daf8ecd2fe27289f9bf5c6f3f787a7bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/36540965807" target="_blank">2026-09-29 08:09:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16845" onclick="CopyToClipboard('tag16845');return false;" class="tag-decoration">release</div><div id="tag11646" onclick="CopyToClipboard('tag11646');return false;" class="tag-decoration">release-20410e6</div><div id="tag9358" onclick="CopyToClipboard('tag9358');return false;" class="tag-decoration">release-3.5.0</div><div id="tag16524" onclick="CopyToClipboard('tag16524');return false;" class="tag-decoration">release-v3</div><div id="tag24377" onclick="CopyToClipboard('tag24377');return false;" class="tag-decoration">release-v3.5</div><div id="tag21623" onclick="CopyToClipboard('tag21623');return false;" class="tag-decoration">release-v3.5.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/20410e6f6a6afd132d3e3abc4f503bcd64adb5e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/36362292209" target="_blank">2026-09-28 00:27:26</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
