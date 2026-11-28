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
<tr><td><div id="tag13810" onclick="CopyToClipboard('tag13810');return false;" class="tag-decoration">nightly</div><div id="tag1446" onclick="CopyToClipboard('tag1446');return false;" class="tag-decoration">nightly-df40b48</div><div id="tag27062" onclick="CopyToClipboard('tag27062');return false;" class="tag-decoration">nightly-4.0.0.5247</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/df40b48390e7a877b952ddc77d1be163b7192ea4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/46095105008" target="_blank">2026-11-28 01:50:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29670" onclick="CopyToClipboard('tag29670');return false;" class="tag-decoration">release</div><div id="tag28988" onclick="CopyToClipboard('tag28988');return false;" class="tag-decoration">release-cf91095</div><div id="tag31571" onclick="CopyToClipboard('tag31571');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/cf910952224e55521f92100d6c66ecf115d25593" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/46095102993" target="_blank">2026-11-28 01:50:16</a></td></tr>
<tr><td><div id="tag6849" onclick="CopyToClipboard('tag6849');return false;" class="tag-decoration">testing</div><div id="tag15060" onclick="CopyToClipboard('tag15060');return false;" class="tag-decoration">testing-abd2d23</div><div id="tag10133" onclick="CopyToClipboard('tag10133');return false;" class="tag-decoration">testing-3.2.1.5196</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/abd2d23159056203c03f81b2bfa46fe2442028ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/46095109826" target="_blank">2026-11-28 01:50:21</a></td></tr>
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
