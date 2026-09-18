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
<tr><td><div id="tag30032" onclick="CopyToClipboard('tag30032');return false;" class="tag-decoration">nightly</div><div id="tag19100" onclick="CopyToClipboard('tag19100');return false;" class="tag-decoration">nightly-7b75bd3</div><div id="tag1912" onclick="CopyToClipboard('tag1912');return false;" class="tag-decoration">nightly-3.1.6.5078</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/7b75bd34f557bafc358236175dea66f1d3e14378" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35256723797" target="_blank">2026-09-17 18:05:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28508" onclick="CopyToClipboard('tag28508');return false;" class="tag-decoration">release</div><div id="tag30644" onclick="CopyToClipboard('tag30644');return false;" class="tag-decoration">release-6f3dfe1</div><div id="tag4877" onclick="CopyToClipboard('tag4877');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/6f3dfe182f1d2349bb4a08fbc6c0149c2daaa206" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35318732382" target="_blank">2026-09-18 07:17:35</a></td></tr>
<tr><td><div id="tag14225" onclick="CopyToClipboard('tag14225');return false;" class="tag-decoration">testing</div><div id="tag27374" onclick="CopyToClipboard('tag27374');return false;" class="tag-decoration">testing-0ee8090</div><div id="tag9272" onclick="CopyToClipboard('tag9272');return false;" class="tag-decoration">testing-3.1.6.5078</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/0ee8090b716b73eca14533cc073e23c942cee2c2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35318728198" target="_blank">2026-09-18 07:17:32</a></td></tr>
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
