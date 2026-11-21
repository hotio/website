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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5848" onclick="CopyToClipboard('tag5848');return false;" class="tag-decoration">release</div><div id="tag31751" onclick="CopyToClipboard('tag31751');return false;" class="tag-decoration">release-6b55349</div><div id="tag25682" onclick="CopyToClipboard('tag25682');return false;" class="tag-decoration">release-0.25.20</div><div id="tag15725" onclick="CopyToClipboard('tag15725');return false;" class="tag-decoration">release-v0</div><div id="tag27150" onclick="CopyToClipboard('tag27150');return false;" class="tag-decoration">release-v0.25</div><div id="tag26166" onclick="CopyToClipboard('tag26166');return false;" class="tag-decoration">release-v0.25.20</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6b55349cbaf90b8991ea6b510802962f9177f6ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/44901373598" target="_blank">2026-11-21 11:55:17</a></td></tr>
<tr><td><div id="tag9298" onclick="CopyToClipboard('tag9298');return false;" class="tag-decoration">testing</div><div id="tag18354" onclick="CopyToClipboard('tag18354');return false;" class="tag-decoration">testing-508fbf7</div><div id="tag26460" onclick="CopyToClipboard('tag26460');return false;" class="tag-decoration">testing-0.25.20</div><div id="tag19608" onclick="CopyToClipboard('tag19608');return false;" class="tag-decoration">testing-v0</div><div id="tag11557" onclick="CopyToClipboard('tag11557');return false;" class="tag-decoration">testing-v0.25</div><div id="tag16268" onclick="CopyToClipboard('tag16268');return false;" class="tag-decoration">testing-v0.25.20</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/508fbf720d99ab44e2370b4e04fbc91c95873bc0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/44901381150" target="_blank">2026-11-21 11:55:23</a></td></tr>
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
