---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7770" onclick="CopyToClipboard('tag7770');return false;" class="tag-decoration">release</div><div id="tag8255" onclick="CopyToClipboard('tag8255');return false;" class="tag-decoration">release-2d14503</div><div id="tag28944" onclick="CopyToClipboard('tag28944');return false;" class="tag-decoration">release-8.9.0</div><div id="tag27107" onclick="CopyToClipboard('tag27107');return false;" class="tag-decoration">release-v8</div><div id="tag3052" onclick="CopyToClipboard('tag3052');return false;" class="tag-decoration">release-v8.9</div><div id="tag8551" onclick="CopyToClipboard('tag8551');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/2d14503284591978f99dca62be25396e349520cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34512176438" target="_blank">2026-09-10 18:05:21</a></td></tr>
<tr><td><div id="tag26294" onclick="CopyToClipboard('tag26294');return false;" class="tag-decoration">testing</div><div id="tag26620" onclick="CopyToClipboard('tag26620');return false;" class="tag-decoration">testing-e5028db</div><div id="tag32766" onclick="CopyToClipboard('tag32766');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag16103" onclick="CopyToClipboard('tag16103');return false;" class="tag-decoration">testing-v8</div><div id="tag20879" onclick="CopyToClipboard('tag20879');return false;" class="tag-decoration">testing-v8.9</div><div id="tag6927" onclick="CopyToClipboard('tag6927');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/e5028db9a5dd7727d3243f946ed5f5ebbf43bd5c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34491528662" target="_blank">2026-09-10 14:48:48</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
