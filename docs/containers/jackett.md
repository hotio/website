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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6122" onclick="CopyToClipboard('tag6122');return false;" class="tag-decoration">release</div><div id="tag962" onclick="CopyToClipboard('tag962');return false;" class="tag-decoration">release-f7e1e98</div><div id="tag14164" onclick="CopyToClipboard('tag14164');return false;" class="tag-decoration">release-0.24.2075</div><div id="tag12871" onclick="CopyToClipboard('tag12871');return false;" class="tag-decoration">release-v0</div><div id="tag30397" onclick="CopyToClipboard('tag30397');return false;" class="tag-decoration">release-v0.24</div><div id="tag23912" onclick="CopyToClipboard('tag23912');return false;" class="tag-decoration">release-v0.24.2075</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f7e1e981d01fbc7ca6ceae9e7483f0ed22a494fc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27598605588" target="_blank">2026-06-16 06:26:13</a></td></tr>
<tr><td><div id="tag17685" onclick="CopyToClipboard('tag17685');return false;" class="tag-decoration">testing</div><div id="tag2749" onclick="CopyToClipboard('tag2749');return false;" class="tag-decoration">testing-34c5a1a</div><div id="tag27016" onclick="CopyToClipboard('tag27016');return false;" class="tag-decoration">testing-0.24.2075</div><div id="tag12206" onclick="CopyToClipboard('tag12206');return false;" class="tag-decoration">testing-v0</div><div id="tag3387" onclick="CopyToClipboard('tag3387');return false;" class="tag-decoration">testing-v0.24</div><div id="tag32292" onclick="CopyToClipboard('tag32292');return false;" class="tag-decoration">testing-v0.24.2075</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/34c5a1a8ce9118907d73b21851d50d5f69d06900" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27598611673" target="_blank">2026-06-16 06:26:22</a></td></tr>
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
