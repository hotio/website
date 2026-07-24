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
<tr><td><div id="tag20067" onclick="CopyToClipboard('tag20067');return false;" class="tag-decoration">nightly</div><div id="tag24883" onclick="CopyToClipboard('tag24883');return false;" class="tag-decoration">nightly-758abb4</div><div id="tag7370" onclick="CopyToClipboard('tag7370');return false;" class="tag-decoration">nightly-3.1.3.4987</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/758abb489e46b2775de0eb11be547d95d0b3f566" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/30099169420" target="_blank">2026-07-24 14:00:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4160" onclick="CopyToClipboard('tag4160');return false;" class="tag-decoration">release</div><div id="tag22912" onclick="CopyToClipboard('tag22912');return false;" class="tag-decoration">release-a0965b4</div><div id="tag28018" onclick="CopyToClipboard('tag28018');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/a0965b4a704779d6a1986887ccbd677310f5de9d" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29692048296" target="_blank">2026-07-19 15:02:55</a></td></tr>
<tr><td><div id="tag11779" onclick="CopyToClipboard('tag11779');return false;" class="tag-decoration">testing</div><div id="tag17143" onclick="CopyToClipboard('tag17143');return false;" class="tag-decoration">testing-2169858</div><div id="tag15957" onclick="CopyToClipboard('tag15957');return false;" class="tag-decoration">testing-3.1.3.4975</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/21698589850084259d363ff252c1b75c01ea3a2f" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/29692050033" target="_blank">2026-07-19 15:02:58</a></td></tr>
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
