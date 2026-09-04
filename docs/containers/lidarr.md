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
<tr><td><div id="tag7802" onclick="CopyToClipboard('tag7802');return false;" class="tag-decoration">nightly</div><div id="tag3446" onclick="CopyToClipboard('tag3446');return false;" class="tag-decoration">nightly-ea3cd1f</div><div id="tag28433" onclick="CopyToClipboard('tag28433');return false;" class="tag-decoration">nightly-3.1.5.5066</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/ea3cd1fc6a05e33b3ccb3c9c475dd643416bc543" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33920600212" target="_blank">2026-09-04 21:19:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28866" onclick="CopyToClipboard('tag28866');return false;" class="tag-decoration">release</div><div id="tag18600" onclick="CopyToClipboard('tag18600');return false;" class="tag-decoration">release-571dea4</div><div id="tag17077" onclick="CopyToClipboard('tag17077');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/571dea481f32deb2fa125f598b90fca13852ac6b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33920593973" target="_blank">2026-09-04 21:19:53</a></td></tr>
<tr><td><div id="tag10860" onclick="CopyToClipboard('tag10860');return false;" class="tag-decoration">testing</div><div id="tag16329" onclick="CopyToClipboard('tag16329');return false;" class="tag-decoration">testing-b1d7655</div><div id="tag6433" onclick="CopyToClipboard('tag6433');return false;" class="tag-decoration">testing-3.1.4.5029</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/b1d7655f64d681a8903dcce1db0eb3b296fd35ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/33920609050" target="_blank">2026-09-04 21:20:04</a></td></tr>
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
