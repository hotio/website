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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15016" onclick="CopyToClipboard('tag15016');return false;" class="tag-decoration">release</div><div id="tag29520" onclick="CopyToClipboard('tag29520');return false;" class="tag-decoration">release-55d4dee</div><div id="tag24783" onclick="CopyToClipboard('tag24783');return false;" class="tag-decoration">release-0.24.2419</div><div id="tag1744" onclick="CopyToClipboard('tag1744');return false;" class="tag-decoration">release-v0</div><div id="tag17500" onclick="CopyToClipboard('tag17500');return false;" class="tag-decoration">release-v0.24</div><div id="tag23670" onclick="CopyToClipboard('tag23670');return false;" class="tag-decoration">release-v0.24.2419</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/55d4deec9c097ac409b1b7ab0f0d2c64e0cfa32f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32223570243" target="_blank">2026-08-19 06:28:36</a></td></tr>
<tr><td><div id="tag15638" onclick="CopyToClipboard('tag15638');return false;" class="tag-decoration">testing</div><div id="tag8162" onclick="CopyToClipboard('tag8162');return false;" class="tag-decoration">testing-4b51eb1</div><div id="tag20801" onclick="CopyToClipboard('tag20801');return false;" class="tag-decoration">testing-0.24.2416</div><div id="tag27948" onclick="CopyToClipboard('tag27948');return false;" class="tag-decoration">testing-v0</div><div id="tag27003" onclick="CopyToClipboard('tag27003');return false;" class="tag-decoration">testing-v0.24</div><div id="tag17486" onclick="CopyToClipboard('tag17486');return false;" class="tag-decoration">testing-v0.24.2416</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4b51eb1da5f277a68dd9052349f6da78cb9f5cae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32148131892" target="_blank">2026-08-18 14:24:24</a></td></tr>
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
