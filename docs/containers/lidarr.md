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
<tr><td><div id="tag20429" onclick="CopyToClipboard('tag20429');return false;" class="tag-decoration">nightly</div><div id="tag15863" onclick="CopyToClipboard('tag15863');return false;" class="tag-decoration">nightly-71c7664</div><div id="tag20001" onclick="CopyToClipboard('tag20001');return false;" class="tag-decoration">nightly-3.2.1.5182</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/71c7664ac31c95c0712697ac0d418994f75814ca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42143945618" target="_blank">2026-11-06 01:27:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3068" onclick="CopyToClipboard('tag3068');return false;" class="tag-decoration">release</div><div id="tag11056" onclick="CopyToClipboard('tag11056');return false;" class="tag-decoration">release-2975644</div><div id="tag10650" onclick="CopyToClipboard('tag10650');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/29756446b948ab2ee7ea7d762d9c03d23194e448" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42143950880" target="_blank">2026-11-06 01:27:17</a></td></tr>
<tr><td><div id="tag7776" onclick="CopyToClipboard('tag7776');return false;" class="tag-decoration">testing</div><div id="tag21441" onclick="CopyToClipboard('tag21441');return false;" class="tag-decoration">testing-57a9531</div><div id="tag15262" onclick="CopyToClipboard('tag15262');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/57a953179abe6889a7a67751bbb427e1253d8bee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/42143953850" target="_blank">2026-11-06 01:27:18</a></td></tr>
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
