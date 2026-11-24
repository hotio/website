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
<tr><td><div id="tag3743" onclick="CopyToClipboard('tag3743');return false;" class="tag-decoration">nightly</div><div id="tag17435" onclick="CopyToClipboard('tag17435');return false;" class="tag-decoration">nightly-6a38585</div><div id="tag10772" onclick="CopyToClipboard('tag10772');return false;" class="tag-decoration">nightly-4.0.0.5236</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/6a385850664d782562d2dbf8ea1aa24b3bbf1731" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45336176127" target="_blank">2026-11-24 05:50:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27262" onclick="CopyToClipboard('tag27262');return false;" class="tag-decoration">release</div><div id="tag30454" onclick="CopyToClipboard('tag30454');return false;" class="tag-decoration">release-993f8e7</div><div id="tag17602" onclick="CopyToClipboard('tag17602');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/993f8e73f799b026c16755e4d8cbcc9b3639bacf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45336174053" target="_blank">2026-11-24 05:50:53</a></td></tr>
<tr><td><div id="tag23557" onclick="CopyToClipboard('tag23557');return false;" class="tag-decoration">testing</div><div id="tag3336" onclick="CopyToClipboard('tag3336');return false;" class="tag-decoration">testing-a397001</div><div id="tag21935" onclick="CopyToClipboard('tag21935');return false;" class="tag-decoration">testing-3.2.1.5196</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/a397001215bdfd9193087af73031709a2cb632b7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/45448328066" target="_blank">2026-11-24 17:24:58</a></td></tr>
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
