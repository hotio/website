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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31427" onclick="CopyToClipboard('tag31427');return false;" class="tag-decoration">release</div><div id="tag21187" onclick="CopyToClipboard('tag21187');return false;" class="tag-decoration">release-804d224</div><div id="tag13880" onclick="CopyToClipboard('tag13880');return false;" class="tag-decoration">release-0.24.2092</div><div id="tag19582" onclick="CopyToClipboard('tag19582');return false;" class="tag-decoration">release-v0</div><div id="tag14161" onclick="CopyToClipboard('tag14161');return false;" class="tag-decoration">release-v0.24</div><div id="tag1393" onclick="CopyToClipboard('tag1393');return false;" class="tag-decoration">release-v0.24.2092</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/804d2243ee97495034bd5a02f111aa1a81469e0a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27865975923" target="_blank">2026-06-20 08:43:13</a></td></tr>
<tr><td><div id="tag7891" onclick="CopyToClipboard('tag7891');return false;" class="tag-decoration">testing</div><div id="tag6465" onclick="CopyToClipboard('tag6465');return false;" class="tag-decoration">testing-c73c524</div><div id="tag5702" onclick="CopyToClipboard('tag5702');return false;" class="tag-decoration">testing-0.24.2092</div><div id="tag7927" onclick="CopyToClipboard('tag7927');return false;" class="tag-decoration">testing-v0</div><div id="tag16407" onclick="CopyToClipboard('tag16407');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28840" onclick="CopyToClipboard('tag28840');return false;" class="tag-decoration">testing-v0.24.2092</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c73c5247b2608f8375edcce8eacd7068fb7ed227" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27865975589" target="_blank">2026-06-20 08:43:12</a></td></tr>
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
