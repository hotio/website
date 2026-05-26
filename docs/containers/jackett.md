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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3107" onclick="CopyToClipboard('tag3107');return false;" class="tag-decoration">release</div><div id="tag32104" onclick="CopyToClipboard('tag32104');return false;" class="tag-decoration">release-c70f1ff</div><div id="tag8434" onclick="CopyToClipboard('tag8434');return false;" class="tag-decoration">release-0.24.1954</div><div id="tag5764" onclick="CopyToClipboard('tag5764');return false;" class="tag-decoration">release-v0</div><div id="tag14594" onclick="CopyToClipboard('tag14594');return false;" class="tag-decoration">release-v0.24</div><div id="tag8071" onclick="CopyToClipboard('tag8071');return false;" class="tag-decoration">release-v0.24.1954</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c70f1ffacd995853fb3fe8fb9b5e9e45a87bd62d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26439013326" target="_blank">2026-05-26 07:37:41</a></td></tr>
<tr><td><div id="tag12760" onclick="CopyToClipboard('tag12760');return false;" class="tag-decoration">testing</div><div id="tag8396" onclick="CopyToClipboard('tag8396');return false;" class="tag-decoration">testing-24a5a8d</div><div id="tag9854" onclick="CopyToClipboard('tag9854');return false;" class="tag-decoration">testing-0.24.1954</div><div id="tag24487" onclick="CopyToClipboard('tag24487');return false;" class="tag-decoration">testing-v0</div><div id="tag11432" onclick="CopyToClipboard('tag11432');return false;" class="tag-decoration">testing-v0.24</div><div id="tag12352" onclick="CopyToClipboard('tag12352');return false;" class="tag-decoration">testing-v0.24.1954</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/24a5a8d362b0410b66cf528244520aa3265be100" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26439013807" target="_blank">2026-05-26 07:37:42</a></td></tr>
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
