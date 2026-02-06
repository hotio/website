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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17744" onclick="CopyToClipboard('tag17744');return false;" class="tag-decoration">release</div><div id="tag28949" onclick="CopyToClipboard('tag28949');return false;" class="tag-decoration">release-79296bb</div><div id="tag26396" onclick="CopyToClipboard('tag26396');return false;" class="tag-decoration">release-0.24.1044</div><div id="tag6736" onclick="CopyToClipboard('tag6736');return false;" class="tag-decoration">release-v0</div><div id="tag32378" onclick="CopyToClipboard('tag32378');return false;" class="tag-decoration">release-v0.24</div><div id="tag4237" onclick="CopyToClipboard('tag4237');return false;" class="tag-decoration">release-v0.24.1044</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/79296bb5c210916744c7350e76811a8a049efb05" target="_blank">Version update: 0.24.1032 => 0.24.1044</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21740452224" target="_blank">2026-02-06 05:57:03</a></td></tr>
<tr><td><div id="tag7965" onclick="CopyToClipboard('tag7965');return false;" class="tag-decoration">testing</div><div id="tag28929" onclick="CopyToClipboard('tag28929');return false;" class="tag-decoration">testing-64f5cbd</div><div id="tag11394" onclick="CopyToClipboard('tag11394');return false;" class="tag-decoration">testing-0.24.1044</div><div id="tag4976" onclick="CopyToClipboard('tag4976');return false;" class="tag-decoration">testing-v0</div><div id="tag19497" onclick="CopyToClipboard('tag19497');return false;" class="tag-decoration">testing-v0.24</div><div id="tag8415" onclick="CopyToClipboard('tag8415');return false;" class="tag-decoration">testing-v0.24.1044</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/64f5cbde83d8c96e1497007e2dbe825a9499b9b4" target="_blank">Version update: 0.24.1032 => 0.24.1044</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21740453154" target="_blank">2026-02-06 05:57:06</a></td></tr>
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
