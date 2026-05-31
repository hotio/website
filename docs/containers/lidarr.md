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
<tr><td><div id="tag24342" onclick="CopyToClipboard('tag24342');return false;" class="tag-decoration">nightly</div><div id="tag24734" onclick="CopyToClipboard('tag24734');return false;" class="tag-decoration">nightly-9d9fe1b</div><div id="tag25133" onclick="CopyToClipboard('tag25133');return false;" class="tag-decoration">nightly-3.1.3.4968</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/9d9fe1b1bf77aab744ab82c6da5362be9ec6a8dd" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/26710871609" target="_blank">2026-05-31 11:05:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1209" onclick="CopyToClipboard('tag1209');return false;" class="tag-decoration">release</div><div id="tag28638" onclick="CopyToClipboard('tag28638');return false;" class="tag-decoration">release-5cc80b4</div><div id="tag8837" onclick="CopyToClipboard('tag8837');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/5cc80b438542f55b38fdd81594350ae01fe09c9f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/26710870422" target="_blank">2026-05-31 11:05:18</a></td></tr>
<tr><td><div id="tag11480" onclick="CopyToClipboard('tag11480');return false;" class="tag-decoration">testing</div><div id="tag26685" onclick="CopyToClipboard('tag26685');return false;" class="tag-decoration">testing-7e3bffe</div><div id="tag18250" onclick="CopyToClipboard('tag18250');return false;" class="tag-decoration">testing-3.1.3.4968</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/7e3bffe7b4280430b5a5e77c6001f0488bebd061" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/26723346388" target="_blank">2026-05-31 20:16:49</a></td></tr>
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
