---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28912" onclick="CopyToClipboard('tag28912');return false;" class="tag-decoration">release</div><div id="tag26228" onclick="CopyToClipboard('tag26228');return false;" class="tag-decoration">release-ce55c36</div><div id="tag21518" onclick="CopyToClipboard('tag21518');return false;" class="tag-decoration">release-0.24.2288</div><div id="tag22248" onclick="CopyToClipboard('tag22248');return false;" class="tag-decoration">release-v0</div><div id="tag18680" onclick="CopyToClipboard('tag18680');return false;" class="tag-decoration">release-v0.24</div><div id="tag209" onclick="CopyToClipboard('tag209');return false;" class="tag-decoration">release-v0.24.2288</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ce55c366d5896aa062fcebdda919807aaf8a014f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30376069159" target="_blank">2026-07-28 15:59:23</a></td></tr>
<tr><td><div id="tag26293" onclick="CopyToClipboard('tag26293');return false;" class="tag-decoration">testing</div><div id="tag27862" onclick="CopyToClipboard('tag27862');return false;" class="tag-decoration">testing-b892360</div><div id="tag12931" onclick="CopyToClipboard('tag12931');return false;" class="tag-decoration">testing-0.24.2288</div><div id="tag7853" onclick="CopyToClipboard('tag7853');return false;" class="tag-decoration">testing-v0</div><div id="tag13000" onclick="CopyToClipboard('tag13000');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25279" onclick="CopyToClipboard('tag25279');return false;" class="tag-decoration">testing-v0.24.2288</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b8923601400b963cef2d1863da67256360f47739" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30346943119" target="_blank">2026-07-28 09:31:25</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
