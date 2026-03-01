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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1544" onclick="CopyToClipboard('tag1544');return false;" class="tag-decoration">release</div><div id="tag29663" onclick="CopyToClipboard('tag29663');return false;" class="tag-decoration">release-7a9cabe</div><div id="tag14657" onclick="CopyToClipboard('tag14657');return false;" class="tag-decoration">release-0.24.1234</div><div id="tag18462" onclick="CopyToClipboard('tag18462');return false;" class="tag-decoration">release-v0</div><div id="tag2295" onclick="CopyToClipboard('tag2295');return false;" class="tag-decoration">release-v0.24</div><div id="tag13247" onclick="CopyToClipboard('tag13247');return false;" class="tag-decoration">release-v0.24.1234</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/7a9cabeb631e748cfbad2627d2113c184e43224e" target="_blank">Version update: 0.24.1226 => 0.24.1234</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22537207760" target="_blank">2026-03-01 05:57:36</a></td></tr>
<tr><td><div id="tag13483" onclick="CopyToClipboard('tag13483');return false;" class="tag-decoration">testing</div><div id="tag14781" onclick="CopyToClipboard('tag14781');return false;" class="tag-decoration">testing-8e9b8b9</div><div id="tag27652" onclick="CopyToClipboard('tag27652');return false;" class="tag-decoration">testing-0.24.1226</div><div id="tag13734" onclick="CopyToClipboard('tag13734');return false;" class="tag-decoration">testing-v0</div><div id="tag10019" onclick="CopyToClipboard('tag10019');return false;" class="tag-decoration">testing-v0.24</div><div id="tag7428" onclick="CopyToClipboard('tag7428');return false;" class="tag-decoration">testing-v0.24.1226</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/8e9b8b90a4fa9f581f9649b5ec90e3cc66270143" target="_blank">Version update: 0.24.1223 => 0.24.1226</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22515548667" target="_blank">2026-02-28 06:46:50</a></td></tr>
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
