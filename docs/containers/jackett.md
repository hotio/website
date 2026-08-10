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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29423" onclick="CopyToClipboard('tag29423');return false;" class="tag-decoration">release</div><div id="tag32202" onclick="CopyToClipboard('tag32202');return false;" class="tag-decoration">release-68d2825</div><div id="tag25512" onclick="CopyToClipboard('tag25512');return false;" class="tag-decoration">release-0.24.2381</div><div id="tag763" onclick="CopyToClipboard('tag763');return false;" class="tag-decoration">release-v0</div><div id="tag32585" onclick="CopyToClipboard('tag32585');return false;" class="tag-decoration">release-v0.24</div><div id="tag32222" onclick="CopyToClipboard('tag32222');return false;" class="tag-decoration">release-v0.24.2381</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/68d2825b5628ed42aa82f88ebc193f71d8381ca8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31365061444" target="_blank">2026-08-10 07:14:25</a></td></tr>
<tr><td><div id="tag684" onclick="CopyToClipboard('tag684');return false;" class="tag-decoration">testing</div><div id="tag24677" onclick="CopyToClipboard('tag24677');return false;" class="tag-decoration">testing-8d959fc</div><div id="tag1868" onclick="CopyToClipboard('tag1868');return false;" class="tag-decoration">testing-0.24.2381</div><div id="tag12997" onclick="CopyToClipboard('tag12997');return false;" class="tag-decoration">testing-v0</div><div id="tag8637" onclick="CopyToClipboard('tag8637');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14533" onclick="CopyToClipboard('tag14533');return false;" class="tag-decoration">testing-v0.24.2381</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/8d959fca971612d38764a11862426d6e065f08f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31365052325" target="_blank">2026-08-10 07:14:17</a></td></tr>
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
