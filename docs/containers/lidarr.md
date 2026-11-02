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
<tr><td><div id="tag31030" onclick="CopyToClipboard('tag31030');return false;" class="tag-decoration">nightly</div><div id="tag32294" onclick="CopyToClipboard('tag32294');return false;" class="tag-decoration">nightly-8bdbee1</div><div id="tag7927" onclick="CopyToClipboard('tag7927');return false;" class="tag-decoration">nightly-3.2.0.5164</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/8bdbee173c712ee71ad618c8cbede27b2acbadef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/41545039859" target="_blank">2026-11-02 23:23:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7910" onclick="CopyToClipboard('tag7910');return false;" class="tag-decoration">release</div><div id="tag10822" onclick="CopyToClipboard('tag10822');return false;" class="tag-decoration">release-eb42525</div><div id="tag4549" onclick="CopyToClipboard('tag4549');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/eb4252509a2d45e57f2048cfae3e73e9b48d8751" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40584713115" target="_blank">2026-10-27 21:11:46</a></td></tr>
<tr><td><div id="tag27662" onclick="CopyToClipboard('tag27662');return false;" class="tag-decoration">testing</div><div id="tag11259" onclick="CopyToClipboard('tag11259');return false;" class="tag-decoration">testing-544b118</div><div id="tag26763" onclick="CopyToClipboard('tag26763');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/544b118ae9763fdc6e2f2d23a230a83e0b333a50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/41545042965" target="_blank">2026-11-02 23:23:17</a></td></tr>
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
