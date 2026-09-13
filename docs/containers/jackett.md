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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31872" onclick="CopyToClipboard('tag31872');return false;" class="tag-decoration">release</div><div id="tag2900" onclick="CopyToClipboard('tag2900');return false;" class="tag-decoration">release-c21f76e</div><div id="tag32557" onclick="CopyToClipboard('tag32557');return false;" class="tag-decoration">release-0.24.2581</div><div id="tag28491" onclick="CopyToClipboard('tag28491');return false;" class="tag-decoration">release-v0</div><div id="tag11722" onclick="CopyToClipboard('tag11722');return false;" class="tag-decoration">release-v0.24</div><div id="tag5768" onclick="CopyToClipboard('tag5768');return false;" class="tag-decoration">release-v0.24.2581</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c21f76e9eb1b41f9e7caed1fbbdafd0595f0b584" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34746205246" target="_blank">2026-09-13 07:50:18</a></td></tr>
<tr><td><div id="tag27651" onclick="CopyToClipboard('tag27651');return false;" class="tag-decoration">testing</div><div id="tag19249" onclick="CopyToClipboard('tag19249');return false;" class="tag-decoration">testing-7412b1f</div><div id="tag22044" onclick="CopyToClipboard('tag22044');return false;" class="tag-decoration">testing-0.24.2581</div><div id="tag7467" onclick="CopyToClipboard('tag7467');return false;" class="tag-decoration">testing-v0</div><div id="tag20682" onclick="CopyToClipboard('tag20682');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2546" onclick="CopyToClipboard('tag2546');return false;" class="tag-decoration">testing-v0.24.2581</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7412b1f08c4a82b5e7ecc3f43e64c0f7149d2323" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34746205121" target="_blank">2026-09-13 07:50:17</a></td></tr>
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
