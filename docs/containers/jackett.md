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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20030" onclick="CopyToClipboard('tag20030');return false;" class="tag-decoration">release</div><div id="tag28470" onclick="CopyToClipboard('tag28470');return false;" class="tag-decoration">release-8f7ebdd</div><div id="tag26891" onclick="CopyToClipboard('tag26891');return false;" class="tag-decoration">release-0.24.3047</div><div id="tag24064" onclick="CopyToClipboard('tag24064');return false;" class="tag-decoration">release-v0</div><div id="tag25445" onclick="CopyToClipboard('tag25445');return false;" class="tag-decoration">release-v0.24</div><div id="tag14361" onclick="CopyToClipboard('tag14361');return false;" class="tag-decoration">release-v0.24.3047</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8f7ebdd68c1dfc02b908351a2393a76e336b3213" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/43000619391" target="_blank">2026-11-11 10:05:12</a></td></tr>
<tr><td><div id="tag29115" onclick="CopyToClipboard('tag29115');return false;" class="tag-decoration">testing</div><div id="tag23680" onclick="CopyToClipboard('tag23680');return false;" class="tag-decoration">testing-a369d39</div><div id="tag6803" onclick="CopyToClipboard('tag6803');return false;" class="tag-decoration">testing-0.24.3047</div><div id="tag13781" onclick="CopyToClipboard('tag13781');return false;" class="tag-decoration">testing-v0</div><div id="tag1508" onclick="CopyToClipboard('tag1508');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16505" onclick="CopyToClipboard('tag16505');return false;" class="tag-decoration">testing-v0.24.3047</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a369d398fcf7f8ceeecd53148ffb32221939548d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/43000618983" target="_blank">2026-11-11 10:05:12</a></td></tr>
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
