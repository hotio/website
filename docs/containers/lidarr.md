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
<tr><td><div id="tag3888" onclick="CopyToClipboard('tag3888');return false;" class="tag-decoration">nightly</div><div id="tag23881" onclick="CopyToClipboard('tag23881');return false;" class="tag-decoration">nightly-d9d6ae2</div><div id="tag14525" onclick="CopyToClipboard('tag14525');return false;" class="tag-decoration">nightly-3.2.1.5182</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/d9d6ae2a02bc067c77de54196c4589359030a7ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42308418934" target="_blank">2026-11-06 22:56:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2133" onclick="CopyToClipboard('tag2133');return false;" class="tag-decoration">release</div><div id="tag24849" onclick="CopyToClipboard('tag24849');return false;" class="tag-decoration">release-2975644</div><div id="tag30077" onclick="CopyToClipboard('tag30077');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/29756446b948ab2ee7ea7d762d9c03d23194e448" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42143950880" target="_blank">2026-11-06 01:27:17</a></td></tr>
<tr><td><div id="tag29547" onclick="CopyToClipboard('tag29547');return false;" class="tag-decoration">testing</div><div id="tag10037" onclick="CopyToClipboard('tag10037');return false;" class="tag-decoration">testing-57a9531</div><div id="tag118" onclick="CopyToClipboard('tag118');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/57a953179abe6889a7a67751bbb427e1253d8bee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42143953850" target="_blank">2026-11-06 01:27:18</a></td></tr>
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
