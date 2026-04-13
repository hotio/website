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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10454" onclick="CopyToClipboard('tag10454');return false;" class="tag-decoration">release</div><div id="tag18548" onclick="CopyToClipboard('tag18548');return false;" class="tag-decoration">release-ffa40c9</div><div id="tag19133" onclick="CopyToClipboard('tag19133');return false;" class="tag-decoration">release-0.24.1577</div><div id="tag15097" onclick="CopyToClipboard('tag15097');return false;" class="tag-decoration">release-v0</div><div id="tag9936" onclick="CopyToClipboard('tag9936');return false;" class="tag-decoration">release-v0.24</div><div id="tag11822" onclick="CopyToClipboard('tag11822');return false;" class="tag-decoration">release-v0.24.1577</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ffa40c98158f8b82152c1c3718aad04c19abedb7" target="_blank">Version update: 0.24.1567 => 0.24.1577</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24330220224" target="_blank">2026-04-13 07:03:17</a></td></tr>
<tr><td><div id="tag6337" onclick="CopyToClipboard('tag6337');return false;" class="tag-decoration">testing</div><div id="tag23446" onclick="CopyToClipboard('tag23446');return false;" class="tag-decoration">testing-15ac0ab</div><div id="tag8190" onclick="CopyToClipboard('tag8190');return false;" class="tag-decoration">testing-0.24.1567</div><div id="tag29383" onclick="CopyToClipboard('tag29383');return false;" class="tag-decoration">testing-v0</div><div id="tag24356" onclick="CopyToClipboard('tag24356');return false;" class="tag-decoration">testing-v0.24</div><div id="tag29049" onclick="CopyToClipboard('tag29049');return false;" class="tag-decoration">testing-v0.24.1567</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/15ac0abb3b14b5ce8f3097a34c3c75ad46e75241" target="_blank">Version update: 0.24.1564 => 0.24.1567</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24301364963" target="_blank">2026-04-12 07:22:01</a></td></tr>
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
