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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6206" onclick="CopyToClipboard('tag6206');return false;" class="tag-decoration">release</div><div id="tag24898" onclick="CopyToClipboard('tag24898');return false;" class="tag-decoration">release-be13a26</div><div id="tag23698" onclick="CopyToClipboard('tag23698');return false;" class="tag-decoration">release-0.24.988</div><div id="tag4680" onclick="CopyToClipboard('tag4680');return false;" class="tag-decoration">release-v0</div><div id="tag29243" onclick="CopyToClipboard('tag29243');return false;" class="tag-decoration">release-v0.24</div><div id="tag1914" onclick="CopyToClipboard('tag1914');return false;" class="tag-decoration">release-v0.24.988</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/be13a26f4d6b307f2dc39fa461e2e76775cd64bf" target="_blank">Version update: 0.24.980 => 0.24.988</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21506760109" target="_blank">2026-01-30 06:30:14</a></td></tr>
<tr><td><div id="tag6880" onclick="CopyToClipboard('tag6880');return false;" class="tag-decoration">testing</div><div id="tag26327" onclick="CopyToClipboard('tag26327');return false;" class="tag-decoration">testing-930d1f1</div><div id="tag17515" onclick="CopyToClipboard('tag17515');return false;" class="tag-decoration">testing-0.24.988</div><div id="tag17019" onclick="CopyToClipboard('tag17019');return false;" class="tag-decoration">testing-v0</div><div id="tag4234" onclick="CopyToClipboard('tag4234');return false;" class="tag-decoration">testing-v0.24</div><div id="tag12350" onclick="CopyToClipboard('tag12350');return false;" class="tag-decoration">testing-v0.24.988</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/930d1f1584b915b293bbe561c02617cb6b57865a" target="_blank">Version update: 0.24.980 => 0.24.988</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21506761036" target="_blank">2026-01-30 06:30:18</a></td></tr>
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
