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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2597" onclick="CopyToClipboard('tag2597');return false;" class="tag-decoration">release</div><div id="tag6627" onclick="CopyToClipboard('tag6627');return false;" class="tag-decoration">release-fce8daa</div><div id="tag25892" onclick="CopyToClipboard('tag25892');return false;" class="tag-decoration">release-0.24.2413</div><div id="tag32667" onclick="CopyToClipboard('tag32667');return false;" class="tag-decoration">release-v0</div><div id="tag10663" onclick="CopyToClipboard('tag10663');return false;" class="tag-decoration">release-v0.24</div><div id="tag14566" onclick="CopyToClipboard('tag14566');return false;" class="tag-decoration">release-v0.24.2413</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fce8daaacdd064ad80d3cd91195d20889722fdb9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31931357545" target="_blank">2026-08-16 06:24:50</a></td></tr>
<tr><td><div id="tag22591" onclick="CopyToClipboard('tag22591');return false;" class="tag-decoration">testing</div><div id="tag17442" onclick="CopyToClipboard('tag17442');return false;" class="tag-decoration">testing-163fa15</div><div id="tag19550" onclick="CopyToClipboard('tag19550');return false;" class="tag-decoration">testing-0.24.2414</div><div id="tag20491" onclick="CopyToClipboard('tag20491');return false;" class="tag-decoration">testing-v0</div><div id="tag26692" onclick="CopyToClipboard('tag26692');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10231" onclick="CopyToClipboard('tag10231');return false;" class="tag-decoration">testing-v0.24.2414</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/163fa151305116e849d9b25e03018126d9a737cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31972782034" target="_blank">2026-08-16 21:11:58</a></td></tr>
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
