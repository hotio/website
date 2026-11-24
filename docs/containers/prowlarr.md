---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7158" onclick="CopyToClipboard('tag7158');return false;" class="tag-decoration">nightly</div><div id="tag13807" onclick="CopyToClipboard('tag13807');return false;" class="tag-decoration">nightly-b95d3d8</div><div id="tag27553" onclick="CopyToClipboard('tag27553');return false;" class="tag-decoration">nightly-3.1.0.5797</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/b95d3d8e08a5976d590425e5d436377b29dff2cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45493764168" target="_blank">2026-11-24 21:42:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1000" onclick="CopyToClipboard('tag1000');return false;" class="tag-decoration">release</div><div id="tag15730" onclick="CopyToClipboard('tag15730');return false;" class="tag-decoration">release-4f7346b</div><div id="tag12267" onclick="CopyToClipboard('tag12267');return false;" class="tag-decoration">release-3.1.0.5799</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/4f7346b3b570c8dde3237bbc448e8e745ab65a03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45493750178" target="_blank">2026-11-24 21:42:10</a></td></tr>
<tr><td><div id="tag12391" onclick="CopyToClipboard('tag12391');return false;" class="tag-decoration">testing</div><div id="tag17122" onclick="CopyToClipboard('tag17122');return false;" class="tag-decoration">testing-6fbcaf0</div><div id="tag10372" onclick="CopyToClipboard('tag10372');return false;" class="tag-decoration">testing-3.1.0.5799</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/6fbcaf04c452e7c34fb8bf060e7001c7d7f9b232" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45493766097" target="_blank">2026-11-24 21:42:16</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
