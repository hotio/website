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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27408" onclick="CopyToClipboard('tag27408');return false;" class="tag-decoration">release</div><div id="tag29423" onclick="CopyToClipboard('tag29423');return false;" class="tag-decoration">release-e40a835</div><div id="tag19049" onclick="CopyToClipboard('tag19049');return false;" class="tag-decoration">release-0.24.1731</div><div id="tag18434" onclick="CopyToClipboard('tag18434');return false;" class="tag-decoration">release-v0</div><div id="tag14129" onclick="CopyToClipboard('tag14129');return false;" class="tag-decoration">release-v0.24</div><div id="tag6669" onclick="CopyToClipboard('tag6669');return false;" class="tag-decoration">release-v0.24.1731</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e40a83504dfb47dcad40545f8216b06cbbfec605" target="_blank">Version update: 0.24.1649 => 0.24.1731</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24819814372" target="_blank">2026-04-23 06:08:57</a></td></tr>
<tr><td><div id="tag17763" onclick="CopyToClipboard('tag17763');return false;" class="tag-decoration">testing</div><div id="tag8723" onclick="CopyToClipboard('tag8723');return false;" class="tag-decoration">testing-c84e1f6</div><div id="tag7845" onclick="CopyToClipboard('tag7845');return false;" class="tag-decoration">testing-0.24.1736</div><div id="tag32036" onclick="CopyToClipboard('tag32036');return false;" class="tag-decoration">testing-v0</div><div id="tag17560" onclick="CopyToClipboard('tag17560');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16325" onclick="CopyToClipboard('tag16325');return false;" class="tag-decoration">testing-v0.24.1736</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c84e1f610260aba020ea58c78b82e0425a43cd0d" target="_blank">Version update: 0.24.1731 => 0.24.1736</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24875138459" target="_blank">2026-04-24 06:11:06</a></td></tr>
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
