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
<tr><td><div id="tag1691" onclick="CopyToClipboard('tag1691');return false;" class="tag-decoration">nightly</div><div id="tag18804" onclick="CopyToClipboard('tag18804');return false;" class="tag-decoration">nightly-8bdbee1</div><div id="tag17137" onclick="CopyToClipboard('tag17137');return false;" class="tag-decoration">nightly-3.2.0.5164</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/8bdbee173c712ee71ad618c8cbede27b2acbadef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/41545039859" target="_blank">2026-11-02 23:23:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32322" onclick="CopyToClipboard('tag32322');return false;" class="tag-decoration">release</div><div id="tag3933" onclick="CopyToClipboard('tag3933');return false;" class="tag-decoration">release-1551a16</div><div id="tag8160" onclick="CopyToClipboard('tag8160');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/1551a1639301af786494e3f9541e845e46c11892" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/41545051106" target="_blank">2026-11-02 23:23:22</a></td></tr>
<tr><td><div id="tag25731" onclick="CopyToClipboard('tag25731');return false;" class="tag-decoration">testing</div><div id="tag16824" onclick="CopyToClipboard('tag16824');return false;" class="tag-decoration">testing-544b118</div><div id="tag20177" onclick="CopyToClipboard('tag20177');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/544b118ae9763fdc6e2f2d23a230a83e0b333a50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/41545042965" target="_blank">2026-11-02 23:23:17</a></td></tr>
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
