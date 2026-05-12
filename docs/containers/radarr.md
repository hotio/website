---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag21927" onclick="CopyToClipboard('tag21927');return false;" class="tag-decoration">nightly</div><div id="tag9268" onclick="CopyToClipboard('tag9268');return false;" class="tag-decoration">nightly-e5c2eac</div><div id="tag21949" onclick="CopyToClipboard('tag21949');return false;" class="tag-decoration">nightly-6.2.0.10409</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/e5c2eac3bea3619bef4afc2d0d91381f93872896" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25707218383" target="_blank">2026-05-12 01:16:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2618" onclick="CopyToClipboard('tag2618');return false;" class="tag-decoration">release</div><div id="tag4403" onclick="CopyToClipboard('tag4403');return false;" class="tag-decoration">release-b86eb09</div><div id="tag15359" onclick="CopyToClipboard('tag15359');return false;" class="tag-decoration">release-6.1.1.10360</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/b86eb0906eebd9fb09649116cd2cbf07eef87436" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25707221112" target="_blank">2026-05-12 01:16:48</a></td></tr>
<tr><td><div id="tag15269" onclick="CopyToClipboard('tag15269');return false;" class="tag-decoration">testing</div><div id="tag7403" onclick="CopyToClipboard('tag7403');return false;" class="tag-decoration">testing-017e2d9</div><div id="tag10607" onclick="CopyToClipboard('tag10607');return false;" class="tag-decoration">testing-6.2.0.10390</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/017e2d9208e80a0c0939ee283e4720c190160a84" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25707223945" target="_blank">2026-05-12 01:16:54</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
