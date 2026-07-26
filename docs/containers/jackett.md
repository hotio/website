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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag801" onclick="CopyToClipboard('tag801');return false;" class="tag-decoration">release</div><div id="tag29242" onclick="CopyToClipboard('tag29242');return false;" class="tag-decoration">release-a96fcb9</div><div id="tag13626" onclick="CopyToClipboard('tag13626');return false;" class="tag-decoration">release-0.24.2268</div><div id="tag12888" onclick="CopyToClipboard('tag12888');return false;" class="tag-decoration">release-v0</div><div id="tag18192" onclick="CopyToClipboard('tag18192');return false;" class="tag-decoration">release-v0.24</div><div id="tag28313" onclick="CopyToClipboard('tag28313');return false;" class="tag-decoration">release-v0.24.2268</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a96fcb9e488d5a1a0fc9017bef4505ff6d4273d0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30194148759" target="_blank">2026-07-26 08:10:46</a></td></tr>
<tr><td><div id="tag19649" onclick="CopyToClipboard('tag19649');return false;" class="tag-decoration">testing</div><div id="tag26454" onclick="CopyToClipboard('tag26454');return false;" class="tag-decoration">testing-4b12031</div><div id="tag25051" onclick="CopyToClipboard('tag25051');return false;" class="tag-decoration">testing-0.24.2268</div><div id="tag27971" onclick="CopyToClipboard('tag27971');return false;" class="tag-decoration">testing-v0</div><div id="tag10887" onclick="CopyToClipboard('tag10887');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15807" onclick="CopyToClipboard('tag15807');return false;" class="tag-decoration">testing-v0.24.2268</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4b1203165f2b5f06ccb4bb15ff6c791ad1d582a0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30194149658" target="_blank">2026-07-26 08:10:48</a></td></tr>
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
