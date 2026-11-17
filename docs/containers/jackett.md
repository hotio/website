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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1104" onclick="CopyToClipboard('tag1104');return false;" class="tag-decoration">release</div><div id="tag19455" onclick="CopyToClipboard('tag19455');return false;" class="tag-decoration">release-c0f4c26</div><div id="tag3096" onclick="CopyToClipboard('tag3096');return false;" class="tag-decoration">release-0.24.3078</div><div id="tag26681" onclick="CopyToClipboard('tag26681');return false;" class="tag-decoration">release-v0</div><div id="tag30410" onclick="CopyToClipboard('tag30410');return false;" class="tag-decoration">release-v0.24</div><div id="tag29466" onclick="CopyToClipboard('tag29466');return false;" class="tag-decoration">release-v0.24.3078</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c0f4c26f703b30c4e755c8e7740da55225a20de2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/44060061409" target="_blank">2026-11-17 09:55:40</a></td></tr>
<tr><td><div id="tag28005" onclick="CopyToClipboard('tag28005');return false;" class="tag-decoration">testing</div><div id="tag24808" onclick="CopyToClipboard('tag24808');return false;" class="tag-decoration">testing-a4b98d7</div><div id="tag26693" onclick="CopyToClipboard('tag26693');return false;" class="tag-decoration">testing-0.24.3078</div><div id="tag16911" onclick="CopyToClipboard('tag16911');return false;" class="tag-decoration">testing-v0</div><div id="tag4942" onclick="CopyToClipboard('tag4942');return false;" class="tag-decoration">testing-v0.24</div><div id="tag6002" onclick="CopyToClipboard('tag6002');return false;" class="tag-decoration">testing-v0.24.3078</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a4b98d7b2aacb8e8ce7ccffb84a5e1e5ba412b7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/44060055063" target="_blank">2026-11-17 09:55:38</a></td></tr>
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
