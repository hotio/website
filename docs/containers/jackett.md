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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26707" onclick="CopyToClipboard('tag26707');return false;" class="tag-decoration">release</div><div id="tag14650" onclick="CopyToClipboard('tag14650');return false;" class="tag-decoration">release-46201c9</div><div id="tag28483" onclick="CopyToClipboard('tag28483');return false;" class="tag-decoration">release-0.24.1614</div><div id="tag26058" onclick="CopyToClipboard('tag26058');return false;" class="tag-decoration">release-v0</div><div id="tag25553" onclick="CopyToClipboard('tag25553');return false;" class="tag-decoration">release-v0.24</div><div id="tag17290" onclick="CopyToClipboard('tag17290');return false;" class="tag-decoration">release-v0.24.1614</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/46201c99fda8966fdebb8dc803a5c63384a34cf0" target="_blank">Version update: 0.24.1608 => 0.24.1614</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24552765760" target="_blank">2026-04-17 07:11:52</a></td></tr>
<tr><td><div id="tag20014" onclick="CopyToClipboard('tag20014');return false;" class="tag-decoration">testing</div><div id="tag9665" onclick="CopyToClipboard('tag9665');return false;" class="tag-decoration">testing-6a08aa6</div><div id="tag15678" onclick="CopyToClipboard('tag15678');return false;" class="tag-decoration">testing-0.24.1614</div><div id="tag27343" onclick="CopyToClipboard('tag27343');return false;" class="tag-decoration">testing-v0</div><div id="tag9473" onclick="CopyToClipboard('tag9473');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4174" onclick="CopyToClipboard('tag4174');return false;" class="tag-decoration">testing-v0.24.1614</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6a08aa6316f6f027c64d6422ca3a29e52e1b6080" target="_blank">Version update: 0.24.1608 => 0.24.1614</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24552766911" target="_blank">2026-04-17 07:11:55</a></td></tr>
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
